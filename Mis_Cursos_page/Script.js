/*Continuando con la adicion de los cursos del "catalogo de cursos" a mis cursos"
Ahora debemos hacer aparecer los cursos inscritos a "mis cursos", esto lo haremos de la siguiente manera*/

/* vovemos a seleccionar el DOM para leer el contenido del HTML y no tener errores en el script*/
document.addEventListener('DOMContentLoaded', () => {

    /*Creamos dos variables, una seleccionara la clase cursos-inscritos-container que esta en mi 
    HTML, es decir, entrara al <diV> con esa clase asignada*/
    const contenedorCursosInscritos = document.getElementById('cursos-inscritos-container');

    /*La otra obtendra el la informacion que esta en "enrolledCourses" que esta en el script anteior
    (recordemos que esta contiene la informacion del curso almacenado el cual incribimos), en el caso que
    este vacio no mostara nada*/
    const cursosInscritos = JSON.parse(sessionStorage.getItem('enrolledCourses')) || [];
    

    /*Bien Ahora tenemos un condicional que nos ayudara a implementar el curso selecionado para ser
    enviado a mis cursos" 
    
    Primero evaluamos si la variable cursosInscritos tiene algun curso alamacenado es decir,
    si existe algun elemento. En ese caso de que no existiera ninguno mi HTML me mostraria el mensaje de
    "No tienes cursos inscritos aún"*/
    if (cursosInscritos.length === 0) {
        contenedorCursosInscritos.innerHTML = '<p>No tienes cursos inscritos aún.</p>';

    /*caso contrario, si existe un curso en el alamacenamiento del navegador se eecutara este ELSE:
    
    este entrara en un forEach de cursosInscritos, esto para verificar cada curso que este almacenado
    de forma individual en el array. Entonces este al seleccionar un curso anadera esa informacion en un <div>
    del HTML el cual mostrara los cursos inscritos, esto estara asignada a la variable "elementoCursoDiv"
    entonces esta  variable se le anadira una clase para poder manipularse en el CSS, y ademas anadira
    caracteristicas a mi HTML como lo es el h3 o Nombre del curso. Luego este tendra un "addEventListener"
    que ejecuatara la accion de click, para que este me redirecione al contenido del curso*/
    } else {
        cursosInscritos.forEach(curso => {

            const elementoCursoDiv = document.createElement('div');

            elementoCursoDiv.classList.add('curso-inscrito-item');
            elementoCursoDiv.innerHTML = `
                <h3>${curso.name}</h3>
            `;

            elementoCursoDiv.addEventListener('click', () => {

                if (curso.contentUrl) {
                    window.location.href ="../Curso_contenido_page/contenido_page.html";
                }

            });
            contenedorCursosInscritos.appendChild(elementoCursoDiv);
        });
    }
});

