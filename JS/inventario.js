$(document).ready(function(){     
    $("#myTable").dynamicTable({
          //definimos las columnas iniciales    
          columns: [{
                text: "Frutas",
                key: "fruit"
            },
            {
                text: "Licores",
                key: "spirits"
            },
            {
                text: "Saborizantes",
                key: "flavorings"
            },
            {
                text: "Artefactos",
                key: "artifacts"
            },
               
          ],
   
          //carga de datos en la tabla de inventario
          data: [{
                fruit: 'Sandia',
                spirits: 'Vodka',
                flavorings: 'Azucar',
                artifacts: 'Licuadora' 
                
            },
            {
                fruit: 'Fresa',
                spirits: 'Rom Blanco',
                flavorings: 'Hierba Buena',
                artifacts: 'Cucharas' 
            },
            {
                fruit: 'Piña',
                spirits: 'Tequila',
                flavorings: 'Canela',
                artifacts: 'Vaso Mexclador' 
            }
          ],
  
          //definición de botones
          buttons: {
              addButton: '<input type="button" value="Nuevo" class="btn btn-success" />',
              cancelButton: '<input type="button" value="Cancelar" class="btn btn-primary" />',
              deleteButton: '<input type="button" value="Borrar" class="btn btn-danger" />',
              editButton: '<input type="button" value="Editar" class="btn btn-primary" />',
              saveButton: '<input type="button" value="Guardar" class="btn btn-success" />',
          },
        
         
      });	    
  });    

  //Menú de Navegación
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
