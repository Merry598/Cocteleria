//Navegacion Menu
let btnMenu = document.querySelector('.btn-menu');
let barIconX = document.querySelector('.btn-menu i');
let menu = document.querySelector('.list-container');
let menuContent = document.querySelector('.menu');
var activador = true;

btnMenu.addEventListener('click', (event) => {

    //Icon X
    barIconX.classList.toggle('fa-times');

    if(activador){
        menu.style.left = '0%'; 
        menu.style.transition = '0.5s';
     
        activador = false;
      }
      else{
       activador = false;
       menu.style.left = '-100%';
   
       activador = true;
      }
   
   });

   // Add class "active"
let enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach((element) => {
   
  element.addEventListener('click', (event) => {
   enlaces.forEach((link) => {
     link.classList.remove('active');
   });
    event.target.classList.add('active');

  });

});

//Scroll Efect

let prevScrollPos = window.pageYOffset;
let goTop = document.querySelector('.go-top');

window.onscroll = () => {

 //Hide & Show - Scroll Menu (Function)
 let currentScrollPos = window.pageYOffset;

 if (prevScrollPos > currentScrollPos) {
   menuContent.style.top = '0px';
   menuContent.style.transition = '0.5s';
 }else{
   menuContent.style.top = '-60px';
   menuContent.style.transition = '0.5s';
 }
 prevScrollPos = currentScrollPos;

 //Scoll Menu & Go Top & See Down (Styles)
 let arriba = window.pageYOffset;
//Conditions
if(arriba <= 600){
    menuContent.style.borderBottom = 'none';

    //Ocultar Go Top
    goTop.style.right = '-100px';
  }else{
    menuContent.style.borderBottom = '3px solid #ff2e63';

    //Mostrar Go Top
    goTop.style.right = '0px';
  }
  
}

//Go Top Click
goTop.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

let abajo = document.querySelector('#abajo');

abajo.addEventListener('click', () => {
  document.body.scrollTop = 600;
  document.documentElement.scrollTop = 600;
  
});
// ************Formulario Login****************
const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
//********Fin Formulario Login*****************

//**********Formulario de Registro-Validación con JavaScript***************

//Se utiliza para que el campo de texto solo acepte letras
function soloLetras(e) {
  key = e.keyCode || e.which;
  tecla = String.fromCharCode(key).toString();
  letras = " áéíóúabcdefghijklmnñopqrstuvwxyzÁÉÍÓÚABCDEFGHIJKLMNÑOPQRSTUVWXYZ";//Se define todo el abecedario que se quiere que se muestre.
  especiales = [8, 37, 39, 46, 6]; //Es la validación del KeyCodes, que teclas recibe el campo de texto.

  tecla_especial = false
  for(var i in especiales) {
      if(key == especiales[i]) {
          tecla_especial = true;
          break;
      }
  }

  if(letras.indexOf(tecla) == -1 && !tecla_especial){
alert('En este campo no se permiten números, sólo letras.');
      return false;
    }
}

//Se utiliza para que el campo de texto solo acepte números
function SoloNumeros(evt){
  if(window.event){//asignamos el valor de la tecla a keynum
   keynum = evt.keyCode; //IE
  }
  else{
   keynum = evt.which; //FF
  } 
  //comprobamos si se encuentra en el rango numérico y que teclas no recibirá.
  if((keynum > 47 && keynum < 58) || keynum == 8 || keynum == 13 || keynum == 6 ){
   return true;
  }
  else{
alert('No se aceptan letras,sólo números');
   return false;
  }
 }
