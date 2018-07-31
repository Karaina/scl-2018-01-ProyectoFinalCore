function adminLog() {
    window.location.href = '../html/loginadmin.html'
}

function showVisits() {
    const alert = document.getElementById('errorAlert');
    const loginValue = document.getElementById('loginAdmin').value;
    if (loginValue === 'admin123') {
        window.location.href = '../html/showRegisteredVisits.html'
    } else {
        alert.innerHTML = `<p>Ingrese clave válida</p>`
    } 
}

let container = document.getElementById('cont');
var databaseRef = firebase.database().ref('users/');

databaseRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        let contenedor = document.getElementById('cont');
        let divcreator = document.createElement('div');
        divcreator.classList = 'divcreator';
        let row = document.createElement('div');
        row.classList = 'row';
        let rowcreator = document.createElement('div');
        rowcreator.classList = 'row';
        let col12 = document.createElement('div');
        col12.classList = 'col s12 texto';
        let col6creator = document.createElement('div');
        col6creator.classList = 'col s6';        
        let pcreator = document.createElement('p');
        let ptexto =  document.createElement('p');
        let textcreator = document.createTextNode(childData.nombre + ' ' + childData.apellido);
        let cololo6 = document.createElement('div');
        cololo6.classList = 'col s6';
        let pepe = document.createElement('p');
        let popo = document.createElement('p');
        let date = document.createTextNode(childData.hora);


    pcreator.appendChild(textcreator);
    row.appendChild(col12);
    col12.appendChild(ptexto);        
    col6creator.appendChild(pcreator);
    rowcreator.appendChild(col6creator);
    cololo6.appendChild(popo);
    rowcreator.appendChild(cololo6);
    contenedor.appendChild(rowcreator);        
    contenedor.appendChild(row);
  });
});  


var tblUsers = document.getElementById('tbl_users_list');
  var databaseRef = firebase.database().ref('users/');
  var rowIndex = 1;
  
  databaseRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
   var childKey = childSnapshot.key;
   var childData = childSnapshot.val();
   
   var row = tblUsers.insertRow(rowIndex);
   var cellId = row.insertCell(0);
   var cellName = row.insertCell(1);
   cellId.appendChild(document.createTextNode(childKey));
   cellName.appendChild(document.createTextNode(childData.nombre));
   
   rowIndex = rowIndex + 1;
    });
  });

   