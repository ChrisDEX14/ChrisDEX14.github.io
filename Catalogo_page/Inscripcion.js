document.addEventListener('DOMContentLoaded', () => {
    // Definir los cursos (una copia o cargar desde Script.js si se expone)
    // Para no duplicar, vamos a obtener la información del curso directamente del DOM o buscar en el array original
    // Es más robusto si `cursosDisponibles` del Script.js es accesible globalmente, o si se pasa información suficiente en el DOM.
    // Para simplificar, asumiremos que los IDs y títulos del DOM son suficientes,
    // y que la URL de contenido se puede construir basada en el ID.
    // O, si `cursosDisponibles` de Script.js está disponible globalmente, se puede usar:
    // const cursosDisponibles = window.cursosDisponibles; // Si se expuso en Script.js

    // Ya que los botones se cargan dinámicamente, aseguramos que los listeners se adjunten después
    // de que el DOM esté completamente cargado y los botones existan.
    adjuntarEscuchadoresInscripcion();

    function adjuntarEscuchadoresInscripcion() {
        const botonesInscripcion = document.querySelectorAll('.boton_inscripcion');

        botonesInscripcion.forEach(boton => {
            boton.addEventListener('click', (evento) => {
                const idCurso = evento.target.id;
                const tituloCurso = evento.target.dataset.titulo;

                const confirmarInscripcion = confirm(`¿Quieres Inscribir el curso: ${tituloCurso}?`);

                if (confirmarInscripcion) {
                    alert(`¡Te inscribiste con éxito al curso: ${tituloCurso}!`);

                    let cursosInscritos = JSON.parse(sessionStorage.getItem('enrolledCourses')) || [];

                    // Necesitamos obtener la URL de contenido. Como no queremos duplicar el array de cursos
                    // aquí, podemos definir una convención de URL o buscarla si el array es global.
                    // Para este ejemplo, construiremos la URL basada en el ID, como hicimos antes.
                    const contentUrlGenerada = `../Contenido_Cursos/${idCurso}_contenido.html`;

                    // Verificar si el curso ya está inscrito
                    const yaEstaInscrito = cursosInscritos.some(cursoExistente => cursoExistente.id === idCurso);

                    if (!yaEstaInscrito) {
                        cursosInscritos.push({
                            id: idCurso,
                            name: tituloCurso,
                            contentUrl: contentUrlGenerada // Usamos la URL generada
                        });
                        sessionStorage.setItem('enrolledCourses', JSON.stringify(cursosInscritos));
                        console.log(`Curso '${tituloCurso}' inscrito y guardado.`);
                    } else {
                        console.log(`El curso '${tituloCurso}' ya está inscrito.`);
                    }

                } else {
                    alert('Curso cancelado.');
                }
            });
        });
    }
});