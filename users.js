function mostrarImgYNombre(nombre, img){
    
    let contenedor = document.getElementById('contenedor');
    let contenedorp = document.getElementById('displayname');
    let contNavbar = document.getElementById('imguser');
    let imge = document.createElement('img');
    let p = document.createElement('p');
    let textop = document.createTextNode(nombre);
    imge.setAttribute('src', img);
    imge.className = 'imgusuario';
    let imgNavbar = document.createElement('img');
    imgNavbar.setAttribute('src', img);
    imgNavbar.className = 'imgnavbar';
    
    contNavbar.appendChild(imgNavbar);
    contenedor.appendChild(imge);
    p.appendChild(textop);
    contenedorp.appendChild(p);
}