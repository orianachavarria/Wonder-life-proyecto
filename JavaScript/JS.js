function validar(){
    var nombre, apellido, email, pais, genero, preferencia, expresion;

    nombre = document.getElementById ("nombre").value;
    apellido= document.getElementById ("apellido").value;
    email= document.getElementById ("email").value;
    pais= document.getElementById ("pais").value;
    genero= document.getElementById ("genero").value;
    preferencia= document.getElementById ("preferencia").value;  
    preferencia= document.getElementById ("terminos").value;  
    expresion = /\w+@\w+\.+[a-z]/;
     
    if(nombre === "" || apellido === "" || email ==="" || pais ==="" || genero ==="" || preferencia ==="" || terminos ===""    ){
        alert ("Todos los campos son obligatorios");
        return false;
    }
    else if(email.length >50) {
        alert ("El correo es muy largo");
        return false;
    }

    else if (!expresion.test(email)){
        alert("El correo no es valido")
        return false;
    }

    else if(nombre.length >20 || apellido.length >20) {
        alert ("El nombre y apellido no deben tener  mas 20 caracteres");
        return false;
    }

    else if(nombre.length <3 || apellido.length <3) {
        alert ("El nombre y apellido son muy cortos ");
        return false;
    }



}