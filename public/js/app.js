const formEncuesta = document.getElementById('formEncuesta');
const selectLocalidad = document.getElementById('localidad');
const selectGenre = document.getElementById('genero');
const levelStudy = document.getElementById('nivelEstudio');
const questionCareer = document.getElementById('carrera');
const questionSuitableSubject = document.getElementById('materiaAdecuada');
const questionAddSubject = document.getElementById('materiaAgregar');
const questionObsolete = document.getElementById('esObsoleto');
const questionUnnecessary = document.getElementById('materiaInnecesaria');
const divCareer = document.getElementById('divCarrera');
const divSubject = document.getElementById('divMateria');
const getLocality = async ()=>{
    const res = await fetch('/api/localities');
    const localidades = await res.json();
    localidades.forEach(localidad => {
        selectLocalidad.innerHTML += `<option value="${localidad.id_locality}">${localidad.name}</option>`
    });
};

questionCareer.addEventListener('change',()=>{
    switch (questionCareer.value) {
        case ("TEC. SUP. EN DESARROLLO DE SOFTWARE"):{
            questionSuitableSubject.innerHTML = ``
            questionSuitableSubject.innerHTML += `
            <option value="programacion">Programación de Software</option>
            <option value="algoritmos">Algoritmos y Estructuras de Datos</option>
            <option value="diseñoWeb">Diseño Web</option>
            <option value="basesDeDatos">Bases de Datos</option>
            <option value="seguridadInformatica">Seguridad Informática</option>
            <option value="desarrolloMovil">Desarrollo de Aplicaciones Móviles</option>
            <option value="testing">Pruebas de Software (Testing)</option>
            <option value="inteligenciaArtificial">Inteligencia Artificial</option>
            <option value="desarrolloAgil">Desarrollo Ágil de Software</option>
            <option value="ingenieriaSoftware">Ingeniería de Software</option>
            <option value="desarrolloFrontend">Desarrollo Frontend</option>
            <option value="desarrolloBackend">Desarrollo Backend</option>
            <option value="arquitecturaSoftware">Arquitectura de Software</option>
            <option value="gestionProyectos">Gestión de Proyectos de Software</option>
            <option value="calidadSoftware">Calidad de Software</option>
            <option value="Otra">Otras</option>
            `
            break;
        }case ('TEC. SUP. TELECOMUNICACIONES' ):{
            questionSuitableSubject.innerHTML = ``
            questionSuitableSubject.innerHTML += `
            <option value="telecomFundamentos">Fundamentos de Telecomunicaciones</option>
            <option value="redesDatos">Redes de Datos</option>
            <option value="teoriaSenales">Teoría de Señales y Sistemas</option>
            <option value="comunicacionesMoviles">Comunicaciones Móviles</option>
            <option value="tecnologiaFibraOptica">Tecnología de Fibra Óptica</option>
            <option value="antenasPropagacion">Antenas y Propagación de Ondas</option>
            <option value="telecomSatelital">Comunicaciones Satelitales</option>
            <option value="criptografia">Criptografía y Seguridad en Comunicaciones</option>
            <option value="procesamientoImagenes">Procesamiento de Imágenes y Señales</option>
            <option value="internetOfThings">Internet de las Cosas (IoT)</option>
            <option value="comunicacionesInalambricas">Comunicaciones Inalámbricas</option>
            <option value="tecnologia4G5G">Tecnología 4G y 5G</option>
            <option value="telecomRedesOpticas">Redes Ópticas de Telecomunicaciones</option>
            <option value="seguridadRedes">Seguridad en Redes de Telecomunicaciones</option>
            <option value="telemetria">Telemetría y Control Remoto</option>
            `
            break;
        }

        case ('TEC. SUP. MECATRÓNICA'):{
            questionSuitableSubject.innerHTML = ``
            questionSuitableSubject.innerHTML += `
            <option value="mecatronicaFundamentos">Fundamentos de Mecatrónica</option>
            <option value="controlAutomatico">Control Automático</option>
            <option value="robotica">Robótica Industrial</option>
            <option value="electronicaDigital">Electrónica Digital</option>
            <option value="mecanica">Mecánica de Materiales</option>
            <option value="sistemasEmbebidos">Sistemas Embebidos</option>
            <option value="instrumentacion">Instrumentación y Medición</option>
            <option value="automatizacionIndustrial">Automatización Industrial</option>
            <option value="procesamientoImagenes">Procesamiento de Imágenes y Visión Artificial</option>
            <option value="inteligenciaArtificial">Inteligencia Artificial Aplicada</option>
            <option value="energiasRenovables">Energías Renovables en Mecatrónica</option>
            <option value="diseñoMecatronico">Diseño Mecatrónico de Sistemas</option>
            <option value="mecatronicaMovil">Mecatrónica Móvil y Autónoma</option>
            <option value="controlCalidad">Control de Calidad en Mecatrónica</option>
            <option value="tecnologiaIndustria40">Tecnología de la Industria 4.0</option>`
            break;
        }case('TEC. SUP. EN BIOQUÍMICA'):{
            questionSuitableSubject.innerHTML = ``
            questionSuitableSubject.innerHTML += `
            <option value="bioquimicaBasica">Bioquímica Básica</option>
            <option value="biologiaMolecular">Biología Molecular</option>
            <option value="quimicaAnalitica">Química Analítica en Bioquímica</option>
            <option value="microbiologia">Microbiología y Virología</option>
            <option value="bioquimicaClinica">Bioquímica Clínica</option>
            <option value="hematologia">Hematología y Coagulación</option>
            <option value="quimicaOrganica">Química Orgánica en Bioquímica</option>
            <option value="genetica">Genética y Biología Celular</option>
            <option value="inmunologia">Inmunología y Serología</option>
            <option value="bioquimicaAlimentos">Bioquímica de Alimentos y Nutrición</option>
            <option value="toxicologia">Toxicología y Análisis de Drogas</option>
            <option value="metodosDiagnostico">Métodos de Diagnóstico en Bioquímica</option>
            <option value="biotecnologia">Biotecnología y Genómica en Bioquímica</option>
            <option value="quimicaFarmaceutica">Química Farmacéutica y Farmacología</option>
            <option value="eticaBioquimica">Ética y Legislación en Bioquímica</option>
            <option value="biomedicina">Biomedicina</option>`
            break;
        }case ('OTROS'):{
            divCareer.innerHTML = "";
            divCareer.innerHTML=`
            <input
            type="text"
            class="form-control input"
            id="carrera"
            aria-describedby="validationTooltipUsernamePrepend"
            required
          />
            `
            questionSuitableSubject.innerHTML = "";
            divSubject.innerHTML = 
            `
            <input
            type="text"
            class="form-control input"
            id="materiaAdecuada"
            aria-describedby="validationTooltipUsernamePrepend"
            required
          />`
            
            break;
        }
    }

})
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