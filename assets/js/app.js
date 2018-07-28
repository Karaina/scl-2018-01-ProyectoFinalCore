// Función para el input del registro de la hora
$('.timepicker').pickatime({
    default: 'now',
    twelvehour: false, 
    donetext: 'OK',
  autoclose: false,
  vibrate: true 
});

// Registro de usuario
function registerWithFirebase() {
    const emailValue = email.value;
    const passwordValue = password.value;
    const first_name = firstname.value;
    const last_name = lastname.value;
    const time = time.value;
    const employment = employment.value;
    const uid = firebase.database().ref().child('users').push().key;

    firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
    .then(() => {
        console.log("Usuario registrado con éxito");
        const data = {
            user_id: uid,
            first_name: first_name,
            last_name: last_name,
            email: emailValue,
            time: time.value,
            employ: employment.value
        }
        const updates = {};
        updates['/users/' + uid] = data;
        firebase.database().ref().update(updates)
    
        console.log("se guardó el usuario")
     })
    .catch((error) => {
        console.log("Error de firebase > Código > "+error.code);
        console.log("Error de firebase > Mensaje > "+error.message);
     });
} 

function update_user(){
    var user_name = document.getElementById('user_name').value;
    var user_id = document.getElementById('user_id').value;
 
    var data = {
     user_id: user_id,
     user_name: user_name
    }
    
    var updates = {};
    updates['/users/' + user_id] = data;
    firebase.database().ref().update(updates);  
   }
