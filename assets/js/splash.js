window.onload = timeout;
function timeout() {
    window.setTimeout("redirect()", 4200)
}

function redirect() {
    window.location.href = "../html/bienvenida.html"
    return;
}