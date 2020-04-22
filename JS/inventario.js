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
   
          //carga de datos
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