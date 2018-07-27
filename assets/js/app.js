// Registro de usuario
function registerWithFirebase() {
    const emailValue = email.value;
    const passwordValue = password.value;

    firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
    .then(() => {
        console.log("Usuario registrado con éxito");
     })
    .catch((error) => {
        console.log("Error de firebase > Código > "+error.code);
        console.log("Error de firebase > Mensaje > "+error.message);
     });
} 