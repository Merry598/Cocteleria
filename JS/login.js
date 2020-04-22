//Animación label javascript

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
   // Add class "active-El menu cuando se mimimiza la pantalla"
let enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach((element) => {
   
  element.addEventListener('click', (event) => {
   enlaces.forEach((link) => {
     link.classList.remove('active');
   });
    event.target.classList.add('active');

  });

});

// Validar Usuario Login
function validarUsuario(){
  var usuario,contrasena;

  usuario=document.fdatos.nombre.value;
  contrasena=document.fdatos.contrasena.value
 
  if(usuario==""){
      alert("Tiene que escribir el usuario");
      document.fdatos.nombre.focus();
      return 0;
  }
  if(contrasena==""){
      alert("Tiene que escribir la contraseña");
      document.fdatos.contra.focus();
      return 0;
  }

  if(usuario!="Maria" && contrasena!="123"){
      alert("Usuario o contraseña incorrecto");
      return 0;
  }else{

      alert("Bienvenido");
      document.fdatos.nombre.value="";
      document.fdatos.nombre.value="";
      document.fdatos.submit();
  }
  

}


