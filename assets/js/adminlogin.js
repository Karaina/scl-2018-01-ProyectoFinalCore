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

const container = document.getElementById('cont');
var databaseRef = firebase.database().ref('users/');

databaseRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
   var childKey = childSnapshot.key;
   var childData = childSnapshot.val();
   container.innerHTML = `       
    <p> ${childData.nombre} </p> `;
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

   