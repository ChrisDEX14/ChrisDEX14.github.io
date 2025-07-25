        /*esta funcion se dispara cuando preciono el boton (enviar) de mi formulario.
        la accion del boton me sirve para buscar el <input type="file"> de mi HTML que esta identificado
        con el id ("Arch"), esta informacion la alamceno en un variable llamada "archivo".

        Luego tengo un if para evaluar mi variable "archivo". Lo que hace mi condicional es primero buscar la 
        propiedad files.length de mi variable "archivo", es decir, el boton al accionarse toma el <inpu type="file">, entonces la propieda file.length se encarga de verificar si exite almenos un elemento en fileList (filelist es un almacenamiento temporal que tiene el navegador, donde se guarda la informacion del archivo que subio el usuario), en el caso de que exista almenos uno (osea que sea mayor a 0 elementos),sale una alerta de envio exitoso, caso contrario si no existe ningun elemento (ose que sean 0), entoneces salta
        la alerta de falta de archivos*/

        function tareaEnviar(){

        let archivo=document.getElementById("Arch");

        if(archivo.files.length > 0){
            alert("la tarea fue enviada exitosamente")
        }else{
            alert("falta un archivo")
        }
    }