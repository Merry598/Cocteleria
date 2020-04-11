function validarUsuario(){
    var usuario,contrasena;

    usuario=document.fdatos.nombre.value;
    contrasena=document.fdatos.contra.value
   
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

function RegistrarUsuario(){

    var nombre,apellidos,numid,genero,pais,direccion,correo,usuario,contrasena,concontra;

    nombre=document.fdatos.nombre.value;
    apellidos=document.fdatos.apellidos.value;
    numid=document.fdatos.numid.value;
    genero=document.fdatos.genero.value;
    pais=document.fdatos.pais.value;
    direccion=document.fdatos.direccion.value;
    correo=document.fdatos.correo.value;
    usuario=document.fdatos.usuario.value;
    contrasena=document.fdatos.contra.value;
    concontra=document.fdatos.concontra.value;

    if(nombre==""){
        alert("Tiene que escribir un nombre");
        document.fdatos.nombre.focus();
        return 0;
    }
    if(apellido==""){
        alert("Tiene que escribir el apellido");
        document.fdatos.apellido.focus();
        return 0;
    }
    if( document.fdatos.ident.selectedIndex==0){
        alert("Debe de seleccionar algun tipo de identificacion ");
        document.fdatos.ident.focus();
      return 0;
    }
    numid=validarEntero(numid)
        if(numid==""){
        alert("Tiene que escribir un numero de indentificacion");
        document.fdatos.numid.focus();
        return 0;
        }
        if( document.fdatos.genero.selectedIndex==0){
            alert("Debe de seleccionar el genero ");
            document.fdatos.genero.focus();
          return 0;
        }
    if(pais==""){
        alert("Tiene que escribir el pais");
        document.fdatos.apellido.focus();
        return 0;
    }
    if(direccion==""){
        alert("Tiene que escribir una direccion");
        document.fdatos.direccion.focus();
        return 0;
    }
    if(correo==""){
        alert("Tiene que escribir un correo electronico");
        document.fdatos.correo.focus();
        return 0;
    }
    if(usuario==""){
        alert("Tiene que escribir el usuario");
        document.fdatos.usuario.focus();
        return 0;
    }
    if(contrasena==""){
        alert("Tiene que escribir la contraseña");
        document.fdatos.contra.focus();
        return 0;
    }
    if(concontra==""){
        alert("Tiene que escribir la confirmacion de la contraseña");
        document.fdatos.concontra.focus();
        return 0;
    }
    if(contrasena!=concontra){
        alert("Las contraseñas no coinciden");
        document.fdatos.concontra.focus();
        return 0;

    }
    alert("Se registro correctamente");
    limpiarRegistrarUsuario();

}

function limpiarRegistrarUsuario(){

    document.fdatos.nombre.value="";
    document.fdatos.apellidos.value="";
    document.fdatos.numid.value="";
    document.fdatos.ident.selectedIndex=0;
    document.fdatos.genero.value;
    document.fdatos.direccion.value="";
    document.fdatos.correo.value="";
    document.fdatos.usuario.value="";
    document.fdatos.contra.value="";
    document.fdatos.concontra.value="";
   
}

function redireccionar(){

document.fdatos.submit();
}


    

