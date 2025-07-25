/*Esta Array contiene la informacion de los cursos del sistema*/

const cursosArrays = [

    {
        img:"../Media/python_image.jpg",
        id: "Curso1",
        titulo: "CursoPython",
        profesor: "Dr. Ana Gómez",
        Descripcion: "Aprende los conceptos básicos de Python, un lenguaje de programación muy popular y fácil de usar.",
    },
    {
        img:"../Media/html_y_css_image.jpg",
        id: "Curso2",
        titulo: "Desarrollo Web con HTML y CSS",
        profesor: "Lic. Juan Pérez",
        Descripcion: "Crea tus primeras páginas web y dales estilo con HTML y CSS",
    },
    {
        img: "../Media/marketing_image.jpg",
        id: "Curso3",
        titulo: "Marketing Digital Esencial",
        profesor: "MSc. Laura Vega",
        Descripcion: "Descubre las estrategias clave para promocionar productos y servicios en línea.",
    },

];

/*aqui creamos una funcion que nos ayudara a mostrar los cursos en la pagina. Primero tomamos una variable 
la cual selecionara un <div> de mi HTML para poder manipularlo.

Ahora hago una funcion llamada "cargarcursos".

En ella tengo una un forEach que me permitira selecionar los elementos que tengo en mi array, a este forEach
lo nombro curso.

Luego creo una variable que me permitira crear elementos en el <div> del HTML, entonces a esa
variable le asigno una clase llamada "cursos" para que esta pueda ser modificada posteriormente en el CSS.Tambien
el div le asignamos la propiedad innerHTML para crear el contenido del HTML.

Ahora pondremos la caracteristicas del curso mostrado, es decir, anadiremos el recuadro con su caracteristicas 
en el HTML, siendo esta los titulos,las imagenes,nombres y botnos que seran mostrados en la
interfaz del "Catalogo de cursos".

Finalmente utilizamos la propiedad append para insertar ese contneido en el HTML y sea mostrado. */

    const Contenedor_cursos=document.querySelector(".cursos_disponibles")

function cargarcursos() {


cursosArrays.forEach(curso => {

    const div = document.createElement("div")

    div.classList.add("cursos");
    div.innerHTML = `  
                    <img class="imagen_curso" src="${curso.img}">
                    <div class="detalles_curso">
                            <h2 class="nombre_curso">${curso.titulo}</h2>
                            <p class="profesor_curso">${curso.profesor}</p>
                            <p class="Descripcion_curso">${curso.Descripcion}</p>
                    <button class="boton_inscripcion" id="${curso.id}" data-titulo="${curso.titulo}">inscribirse</button>
    
    `
    Contenedor_cursos.append(div);
})

};

cargarcursos();