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


   