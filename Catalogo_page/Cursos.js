const cursosArrays = [

    {
        img:"../Media/python_image.jpg",
        id: "Curso1",
        titulo: "CursoPython",
        profesor: "Dr. Ana Gómez",
        Descripcion: "Aprende los conceptos básicos de Python, un lenguaje de programación muy popular y fácil de usar.",
    },
    {
        img:"../Media/html_y_css_image.png",
        id: "Curso2",
        titulo: "Desarrollo Web con HTML y CSS",
        profesor: "Lic. Juan Pérez",
        Descripcion: "Crea tus primeras páginas web y dales estilo con HTML y CSS",
    },
    {
        img: "../Media/marketing_image.png",
        id: "Curso3",
        titulo: "Marketing Digital Esencial",
        profesor: "MSc. Laura Vega",
        Descripcion: "Descubre las estrategias clave para promocionar productos y servicios en línea.",
    },

];

    const Contenedor_cursos=document.querySelector("#cursos_disponibles")

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