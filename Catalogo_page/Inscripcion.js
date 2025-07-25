/*Explicaremos que sucede en esta sentencia (PD: ya que nuestra experiencia en javaScript es muy corta
decidimos ayudarnos de la IA para poder solucionar un problema. Recalcamos que esta explicacion es para
poder justificar nuestro uso de la IA por lo que tenemos la obligacion de explicar que hizo el codigo
ya que tambien tenemos que tener entendimiento de ello, por lo que hicimos la investigaciones necesarias
para dar la explicacion y comprender el tema .*/

/*Antes que todo, quiero mencionar el motivo de este script, En la fase dos del proyecto se nos pide que a la hora
de hacer clic en la inscripcion del curso s enos envie un mensaje de lerta pidiendo si queremos confirmar la accion
por loq eu tenemos dos opciones, aceptarla o rechazarla, en el caso de aceptarla nos dira si nos inscribimos en
el curso y se anadira a "mis cursos"; en caso contrario si la rechazamos nos mostrara la cancelacion del mismo*/

/*Ante que todo debemos llamar el "DOMcontentLoaded' para que no haya problemas a la hora de ejecutar
el Script, ya que lo que hace el DOM es cargar toda la info que tiene el HTML para que luego el Script del Java
pueda leerlo por completo y no ocurra errores.

Ahora luego de que todo el contenido del HTML sea leido se accionara la funcion adjuntarEscuchadoresInscripcion()
la cual activaria el funcionamiento del codigo */

document.addEventListener('DOMContentLoaded', () => {adjuntarEscuchadoresInscripcion();
    
    /*Ahora vamos a definir la funcion adjuntarEscuchadoresInscripcion(),es decir, que va a realizar.*/
    


    function adjuntarEscuchadoresInscripcion() {

        /*Primero definimos la variable "botonesInscripcion" esta selecionara la clase .boton_inscripcion, es decir,
        esta tomara la info de los botones de "inscripcion" que esta en el HTML.*/
        const botonesInscripcion = document.querySelectorAll('.boton_inscripcion');
        

        /*Ahora este forEach recorrera cada elemento que contenga el botonesInscripcion y le asignamos el nombre boton para
        identificarlo  */
        botonesInscripcion.forEach(boton => {
            
            /*El forEach me ayudara a recorrer cada boton de incripcion de mi HTML, por ello este va a ejecutar un AddEventListener
            con el evento de click, es decir que de manera individual, al hacer click en cualquiera de los botones este ejecutara
            una accion*/
            boton.addEventListener('click', (evento) => {

                /*Ahora declaramos dos variables: una me ayudara a almacenar el id del boton seleccionado(en el HTML
                o bueno el Java Script que tiene la informacion de los cursos, en ek Array se declaro un ID unico
                a cada curso, este para diferenciar cual curso seleccione), y la otra me ayudara a tomar el nombre
                o titulo del curso al cual selecione */
                const idCurso = evento.target.id;
                const tituloCurso = evento.target.dataset.titulo;
                
                /*Ahora Esta Variable manda una alerta de confirmacion la cual contiene un mensaje
                con el titulo de mi curso el cual esta almacenado en la variable tituloCurso*/
                const confirmarInscripcion = confirm(`¿Quieres Inscribir el curso: ${tituloCurso}?`);
                
                /*Luego tenemos este condicional el cual no ayudara a definir la aceptacion o negacion del curso.*/

                
                if (confirmarInscripcion) {
                
                    /*Primero tenemos el caso de que se verdad la variable confirmarInscripcion: Este mandara un mensaje
                    de inscripcion exitoso en el curso*/
                    alert(`¡Te inscribiste con éxito al curso: ${tituloCurso}!`);

                    /*Como necesitamos agregar el curso a "mis cursos" debemos crear un alamcenamiento 
                    de datos temporal en el navegador ya que no estamos trabajando con el lado del servidor.
                    para ello, se hara lo siguiente:
                    
                    Almacenamos esta informacion en la variable "cursosInscritos". Lo que quiere decir
                    esta variable es que temporalmente mientra la sesion del usuario este activa almacenara en el
                    navegador la informacion del curso que fue inscrito. Entonces la propiedad "sessionStorage.getItem"
                    anadira la info del curso bajo una palabra clave "enrolledCourses".Esta info se guardara en forma
                    de array en un JSON. En el caso que JSON este vacio, es decir sessionStorage no
                    haya almacenado nada, mi pagina de "mis cursos" estara vacia*/
                    let cursosInscritos = JSON.parse(sessionStorage.getItem('enrolledCourses')) || [];

                    /*Esta variable me ayudara a redierccionar al contenido del curso despues de selecionarlo en
                    "mis cursos" */
                    const contentUrlGenerada = `../Contenido_Cursos/${idCurso}_contenido.html`;
                    
                    /*esta variable me ayuda a verificar si existe el curso en mi SessionStorage. es decir
                    si mi SessionEstorage tiene un "cursosInscritos" en su array, me evita duplicar la informacion,
                    pero si no existe en mi array la anade */
                    const yaEstaInscrito = cursosInscritos.some(cursoExistente => cursoExistente.id === idCurso);
                    
                    /*Este condicional me ayudara hacer la "Magia". En terminos generales me anadira el curso que seleccione
                    con el boton de inscribir y se guardara en el almacenamiento del navegador(Tambien evita que se duplique
                    la informacion en caso de que ya exista), para luego usarlo en el Script de "mis cursos".

                    entonces este if me dice lo siguiente:
                    Pone una condicion en "yaEstaInscrito"(el ! me quiere decir que NO es verdad que existe un curso inscrito)
                    si mi curso no esta en el array del JSON, osea en el almacenamiento de mi navegador lo anade
                    mediante la propiedad "cursosInscritos.push" poniendo el nombre,la id y la redireccion del curso.
                    la propiedad sessionStorage.setItem me guarda la informacion actualizada
                    en el navegador. 

                    */
                    if (!yaEstaInscrito) {

                        cursosInscritos.push({id: idCurso, name: tituloCurso, contentUrl: contentUrlGenerada});
                        sessionStorage.setItem('enrolledCourses', JSON.stringify(cursosInscritos));
                    }

                /*por ultimo este else me denega la incripcion si preciono no en la alerta de confirmacion
                inicial */
                } else {
                    alert('Curso cancelado.');
                }
            });
        });
    }
});