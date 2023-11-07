const formEncuesta = document.getElementById('formEncuesta');
const selectLocalidad = document.getElementById('localidad');
const selectGenre = document.getElementById('genero');
const levelStudy = document.getElementById('nivelEstudio');
const questionCareer = document.getElementById('carrera');
const questionSuitableSubject = document.getElementById('materiaAdecuada');
const questionAddSubject = document.getElementById('materiaAgregar');
const questionObsolete = document.getElementById('esObsoleto');
const questionUnnecessary = document.getElementById('materiaInnecesaria');
const getLocality = async ()=>{
    const res = await fetch('/api/localities');
    const localidades = await res.json();
    localidades.forEach(localidad => {
        selectLocalidad.innerHTML += `<option value="${localidad.id_locality}">${localidad.name}</option>`
    });
};

formEncuesta.addEventListener('submit',async(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('localidad_id',selectLocalidad.value);
    formData.append('genre_id',selectGenre.value);
    formData.append("education_level",levelStudy.value)
    const responses = {
        questionId: [1, 2, 3, 4, 5],
        response: [
            questionCareer.value,
            questionSuitableSubject.value,
            questionAddSubject.value,
            questionObsolete.value,
            questionUnnecessary.value,
        ]
    };

    // Agregar 'responses' al objeto 'data'
    formData.append("responses", JSON.stringify(responses));
    const data = Object.fromEntries(formData);
    const res = await fetch('/api/quiz/create', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json' // Asegúrate de establecer el encabezado 'Content-Type' correctamente
        }
        
    });
    Swal.fire({
        title: "Good job!",
        text: "Encuesta Completada!",
        icon: "success"
      });
      formEncuesta.reset();
});
document.addEventListener('DOMContentLoaded', async ()=>{
    await getLocality();
});