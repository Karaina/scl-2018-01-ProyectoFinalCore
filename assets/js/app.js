// Registro de usuario
function registerWithFirebase() {
    const emailValue = email.value;
    const passwordValue = password.value;
    const first_name = firstname.value;
    const last_name = lastname.value;
    const uid = firebase.database().ref().child('users').push().key;

    firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
    .then(() => {
        console.log("Usuario registrado con éxito");
        const data = {
            user_id: uid,
            first_name: first_name,
            last_name: last_name,
            email: emailValue
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

