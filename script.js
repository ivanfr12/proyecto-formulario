

const enviar = document.getElementById('Boton')
const usuario = document.getElementById('nombre');
const password = document.getElementById('password')

inicio_V()

function inicio_V(){
    document.addEventListener('DOMContentLoaded', inicio);
}

function inicio(){
    enviar.disable = true;
    console.log('Cargando')

    usuario.addEventListener('blur', validacion);
    password.addEventListener('blur', validacion);
}

function validacion(e){
if (e.target.value.length > 0) {
    console.log('Informacion valida');
} else {
    window.alert('Ingresa correctamente tus datos');
}
}