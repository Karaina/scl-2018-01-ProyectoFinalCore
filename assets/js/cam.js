var video = document.getElementById('video');
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.
mozGetUserMedia || navigator.oGetUserMedia || navigator.msGetUserMedia;

if(navigator.getUserMedia) {
    navigator.getUserMedia({video:true}, streamWebCam, throwError);
}

function streamWebCam (stream) {
    video.src = window.URL.createObjectURL(stream);
    video.play();
}

function throwError (e) {
    alert(e.name);
}

function snap() {
    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight;
    context.drawImage(video, 0, 0);
}

function subirArchivo(archivo) {
    const data = firebase.auth().users;
    let storageService = firebase.storage();
    // creo una referencia al lugar donde guardaremos el archivo
    let refStorage = storageService.ref('images').child(data.uid + archivo.name);
    // Comienzo la tarea de upload
    const uploadTask = refStorage.put(archivo);

    // defino un evento para saber qué pasa con ese upload iniciado
    uploadTask.on('state_changed', null,
        function(error){
            console.log('Error al subir el archivo', error);
        },
        function(){
            //obtiene la url de la imagen recien subida
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                //cambia el source de la imagen por la url de la imagen recien subida
                document.getElementById('imgReview').src = downloadURL;
              });
        }
    );
}

function save_picture(picture, key) {
    firebase.database().ref(`users/${newReviewKey}`).set({})
}

