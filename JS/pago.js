//Menu de Navegación
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


//Tabla de Pago
function validarPago(){

  var numid,nombre,sexo_rdo,numtel,correo,pago_rdo, numtarjeta,fechavenc,codValid;

  numid=document.fdatos.numid.value;
  nombre=document.fdatos.nombre.value;
  sexo_rdo=document.fdatos.sexo_rdo.value;
  numtel=document.fdatos.numtel.value;
  correo=document.fdatos.correo.value;
  pago_rdo=document.fdatos.pago_rdo.value;
  numtaerjeta=document.fdatos.numtarjeta.value;
  fechavenc=document.fdatos.fechavenc.value;
  codvalid=document.fdatos.codValid.value;


  if( document.fdatos.selecpa.selectedIndex==0){
      alert("Debe de seleccionar un local");
      document.fdatos.selecloc.focus();
    return 0;
  }
  if( numid==""){
      alert("Debe de escribir el número de cédula");
      document.fdatos.numid.focus();
    return 0;
  }

  if( nombre==""){
      alert("Debe escribir su nombre y apellido");
      document.fdatos.nombre.focus();
    return 0;
  }
  if( sexo_rdo==""){
    alert("Debe seleccionar el sexo");
    document.fdatos.sexo_rdo.focus();
  return 0;
}

if( nomtel==""){
  alert("Debe escribir el número de cédula");
  document.fdatos.nombre.focus();
return 0;
}
  if( correo==""){
      alert("Debe escribir un correo electronico");
      document.fdatos.correo.focus();
    return 0;
  }
  if( pago_rdo==""){
    alert("Debe seleccionar el pago");
    document.fdatos.nombre.focus();
  return 0;
}
  if( numtaerjeta==""){
      alert("Debe escribir un numero de tarjeta");
      document.fdatos.numtarjeta.focus();
    return 0;
  }
  if( fechavenc==""){
    alert("Debe escribir la fecha de vencimiento");
    document.fdatos.numtarjeta.focus();
  return 0;
}

  
  if( codValid==""){
      alert("Debe escribir un código de validación");
      document.fdatos.codValid.focus();
    return 0;
  }
  alert("Gracias por su compra");
  limpiarvalidarPago();
}

function limpiarvalidarPago(){

  document.fdatos.selecloc.selectedIndex=0;
document.fdatos.numid.value="";
document.fdatos.nombre.value="";
document.fdatos.sexo_rdo.value="";
document.fdatos.numtel.value="";
document.fdatos.correo.value="";
document.fdatos.pago_rdo.value="";
document.fdatos.numtarjeta.value="";
document.fdatos.fechavenc.value;
document.fdatos.codValid.value="";
  
}


function validarEntero(valor){
  valor=parseInt(valor);
  if(isNaN(valor)){
      return "";
  }else{
      return valor;
  }


}

