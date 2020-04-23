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
//Tabla de Clientes
$(document).ready(function(){     
  $("#myTable").dynamicTable({
        //definimos las columnas iniciales    
        columns: [{
              text: "Nombre",
              key: "name"
          },
          {
              text: "Apellidos",
              key: "surname"
          },
          {
              text: "Género",
              key: "gender"
          },
          {
              text: "Teléfono",
              key: "phone"
          },        
        ],
       
        //carga de datos en la table de clientes
        data: [{
          name: 'Jared',
          surname: 'Rojas Aragón',
          gender: 'M',
          phone: '67894534' 
        },
        {
          name: 'María',
          surname: 'Solís Salas',
          gender: 'F',
          phone: '87024571'
      },
      {
        name: 'Wendel',
        surname: 'Sáenz Rodriguez',
        gender: 'M',
        phone: '45780324'
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
    showActionColumn: true,
    //condicionales
    getControl: function (columnKey) {
        if (columnKey == "phone") {
          return '<input type="number" class="form-control" />';
        }

        if (columnKey == "gender") {
          return '<select class="form-control"><option value="M">Masculino</option><option value="F">Femenino</option></select>';
        }

        return '<input type="text" class="form-control" />';
    }

});	    
});    