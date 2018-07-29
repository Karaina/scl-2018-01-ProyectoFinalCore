//Función para el selector de empresas del if
$(document).ready(function(){
    $('select').formSelect();
  });


// Reedirección de vistas
function register() {
    window.location.href = "../html/tipoVisita.html";
}

function cliente() {
    window.location.href = "../html/cliente.html";
}

function search() {
    window.location.href = "../html/registrodatos.html"
}


// Validar rut
function checkRut(rut) {
    // Despejar Puntos
    let valor = rut.value.replace('.',''); 
    // Despejar Guión
    valor = valor.replace('-','');
    
    // Aislar Cuerpo y Dígito Verificador
    cuerpo = valor.slice(0,-1);
    dv = valor.slice(-1).toUpperCase();
    
    // Formatear RUN
    rut.value = cuerpo + '-'+ dv

    // Si no cumple con el mínimo ej. (n.nnn.nnn)
    if(cuerpo.length < 7) {
        rut.setCustomValidity("RUT Incompleto");
        return false;}
    
    // Calcular Dígito Verificador
    suma = 0;
    multiplo = 2;
    
    // Para cada dígito del Cuerpo
    for(i=1;i<=cuerpo.length;i++) {    
        // Obtener su Producto con el Múltiplo Correspondiente
        index = multiplo * valor.charAt(cuerpo.length - i);        
        // Sumar al Contador General
        suma = suma + index;       
        // Consolidar Múltiplo dentro del rango [2,7]
        if(multiplo < 7) {
            multiplo = multiplo + 1;
        } else {
            multiplo = 2;
        }  
    }    
    // Calcular Dígito Verificador en base al Módulo 11
    dvEsperado = 11 - (suma % 11);
    
    // Casos Especiales (0 y K)
    dv = (dv == 'K')?10:dv;
    dv = (dv == 0)?11:dv;
    
    // Validar que el Cuerpo coincide con su Dígito Verificador
    if(dvEsperado != dv) {rut.setCustomValidity("RUT Inválido");
    return false;
}   
    // Si todo sale bien, eliminar errores (decretar que es válido)
    rut.setCustomValidity('');
}


// Guardar datos en la data firebase
function save_user(){
    const name = document.getElementById('first_name').value;
    const surname = document.getElementById('last_name').value;
    const rut = document.getElementById('rut').value;
    const motivoVisita = document.getElementById('motivo').value;
    let date = new Date();
    let tiempo = date.getHours() + ":" + date.getMinutes();
    let days = date.getDate() + "." + date.getMonth() + "." + date.getFullYear();

    var uid = firebase.database().ref().child('users').push().key;
  
    var data = {
    user_id: uid,
        nombre: name,
        apellido: surname,
        rut: rut,
        motivo: motivoVisita,
        hora: tiempo,
        fecha: days
    }
   
   var updates = {};
   updates['/users/' + uid] = data;
   firebase.database().ref().update(updates);
   
  }