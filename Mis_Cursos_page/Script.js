document.addEventListener('DOMContentLoaded', () => {
    const contenedorCursosInscritos = document.getElementById('cursos-inscritos-container');
    const cursosInscritos = JSON.parse(sessionStorage.getItem('enrolledCourses')) || [];

    if (cursosInscritos.length === 0) {
        contenedorCursosInscritos.innerHTML = '<p>No tienes cursos inscritos aún.</p>';
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

