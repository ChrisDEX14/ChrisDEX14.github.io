/*Esta funcion me valida el usuario predeterminado del sistema*/

function login(){

/*Tomo dos variables y le asigno un document.getElementById para tomar los datos
de los campos del formulario de HTML. Luego con un condicional evaluo tanto User como Password
asignandole que valores deben tener para accedar al sistema. En el caso que no sean validos saldra
una alert mencionando que los datos son invalidos y no redirecciona a ningun lugar*/


let user=document.getElementById("usuario").value
let password=document.getElementById("contra").value

if (user=="Estudiante_123" && password=="123"){

    window.location.href="../Catalogo_page/catalogo_page.html";

}else{

    alert("Datos no validos");

}

}
