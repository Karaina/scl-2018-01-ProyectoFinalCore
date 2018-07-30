const tblUsers = document.getElementById('users_table');
const databaseRef = firebase.database().ref('users/');
let rowIndex = 1;
  
databaseRef.once('value', function(snapshot) {    
    snapshot.forEach(function(childSnapshot) {
        let childData = childSnapshot.val();
  
        var row = tblUsers.insertRow(rowIndex);
        var cellName = row.insertCell(0);
        var cellLastName = row.insertCell(1);
        var cellEmploy = row.insertCell(2);
        var cellEmail = row.insertCell(3);
   
        cellName.appendChild(document.createTextNode(childData.first_name));
        cellLastName.appendChild(document.createTextNode(childData.last_name));
        cellEmploy.appendChild(document.createTextNode(childData.employ));
        cellEmail.appendChild(document.createTextNode(childData.email));

        rowIndex = rowIndex + 1;
    });
  });
   
function save_user(){
    window.location.href = '../html/bienvenida.html'
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;
    const emailValue = document.getElementById('email').value;
    const employment = document.getElementById('employment').value;

    var uid = firebase.database().ref().child('users').push().key;
  
    var data = {
    user_id: uid,
        first_name: first_name,
        last_name: last_name,
        email: emailValue,
        //time: time.value,
        employ: employment
    }
   
   var updates = {};
   updates['/users/' + uid] = data;
   firebase.database().ref().update(updates);
   
   reload_page();
  }
  
  function reload_page(){
   window.location.reload();
  }
  

