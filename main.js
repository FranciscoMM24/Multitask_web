const menuBotonMostrar = document.querySelector('.botonMenu');
const menuBotonCerrar = document.getElementById('botonCerrar__menu');
const menu = document.querySelector('.container-menu__menu');

const botonFormProgramacion = document.querySelector('.cerrar-form__programacion');
const FormProgramacion = document.querySelector('.form-programacion');
const botonMostrarFormProgramacion = document.getElementById('Programacion');

const botonFormRedes = document.getElementById('btnRedes');
const FormRedes = document.querySelector('.form-redes');
const botonCerrarFormRedes = document.querySelector('.cerrar-form__redes');


function mostrarMenu(){
    menu.classList.remove('inactive');
}

function cerrarMenu(){
    menu.classList.add('inactive');
}

function mostrarFormProgramacion(){
    FormProgramacion.classList.add('inactive');
}

function cerrarFormProgramacion(){
    FormProgramacion.classList.remove('inactive');
}

function mostrarFormRedes(){
    FormRedes.classList.remove('inactive');
}

function cerrarFormRedes(){
    FormRedes.classList.add('inactive');
}




menuBotonMostrar.addEventListener('click',mostrarMenu);
menuBotonCerrar.addEventListener('click',cerrarMenu);
botonFormProgramacion.addEventListener('click',mostrarFormProgramacion);
botonMostrarFormProgramacion.addEventListener('click',cerrarFormProgramacion);
botonFormRedes.addEventListener('click',mostrarFormRedes);
botonCerrarFormRedes.addEventListener('click',cerrarFormRedes);

