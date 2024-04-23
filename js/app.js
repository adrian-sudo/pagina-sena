//navegacion
const hamburgesa = document.querySelector('.hamburgesa');
const navegacion = document.querySelector('.navegacion');
const enlaces = document.querySelectorAll('.navegacion a');

document.addEventListener('DOMContentLoaded',()=>{
    mostrarMenu();
    cerrarMenu();
});


function mostrarMenu(){
    hamburgesa.addEventListener('click',()=>{
       navegacion.classList.toggle('ocultar');
    });
}

//ciclo cerrarseccion
function cerrarMenu(){
    enlaces.forEach(enlaces =>{
        enlaces.addEventListener('click',(e)=>{
           // console.log(e.target.tagName);

           if(e.target.tagName === 'A'){
            navegacion.classList.add('ocultar'); //oculatar el menu
           }
        });
    })
}