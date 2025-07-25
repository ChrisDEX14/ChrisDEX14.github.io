/*Esta funcion me valida si los campos del formulario de registro estan llenos

    Entonces lo que hice fue asignarles una variable a cada campo de mi registro, aplicando
    document.getElementById (esto para tener capturar los valores introducidos en mi HTML).
    Luego en un condicional evaluo cada variable en la cual puese que si almenos un elemento cumple con que
    este vacia ("") me salte la alerta de (los campos no estan completos!) de lo contrario 
    si ninguna cumple con que este vacia me salta (El registro a sido exitoso) y me redirecciona a la pagina
    de login.*/
    
    function registro(){

    
    let name=document.getElementById("nomb").value
    let userLastName=document.getElementById("apelli").value
    let username=document.getElementById("nomb_User").value 
    let email=document.getElementById("cor").value
    let pass=document.getElementById("passw").value

    if(pass=="" || email=="" || userLastName=="" || username=="" || name==""){
        alert("⚠️ Los Campos no estan completos!")
    }else{
        alert("El registro a sido exitoso✅")
        window.location.href="../Login/login_page.html";
}
}