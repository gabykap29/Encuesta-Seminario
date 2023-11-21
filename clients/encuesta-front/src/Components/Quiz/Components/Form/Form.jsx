import { useState,useEffect } from "react";
import { getFetch } from "../../../Hooks/getFetch.js";
import { getMaterias } from "../../../Hooks/getMaterias.js";
const Form = ()=>{
  const [localidades,setLocalidades] = useState([]);
  const [carrera,setCarrera] = useState([]);
  const [materias,setMaterias] = useState([]);
  const [resForm,setResForm] = useState([]);
  const [form,setForm] = useState({
    localidad: "",
    genero: "",
    edad: "",
    carrera: "",
    materiaAdecuada: "",
    materiaAgregar: "",
    esObsoleto: "",
    materiaInnecesaria: "",
    responses:{
      questionId: [1, 2, 3, 4, 5, 6],
      
    }
  });



  useEffect(()=>{
    getFetch("http://localhost:4004/api/localities")
    .then((data)=>{
      setLocalidades(data);
    });

  },[]);

    const handleChangeCarrera = (e)=>{
      const carrera = e.target.value;
      setCarrera(carrera);
      setMaterias( getMaterias(carrera))
    }

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setForm((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };


    const handleSubmit = (e) => {
      e.preventDefault();
        const res = fetch('http://localhost:4004/api/quiz/create',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form)
        })
        const data = res.json();
        setResForm(data);
        console.log(resForm);
    };

    return (
        <>
        <div className="container">
        <form
          action=""
          className="g-3 needs-validation"
          id="formEncuesta"
          encType="multipart/form-data"
          onSubmit={ handleSubmit}
        >
          <div className="my-3 text-primary">
            <h5>Datos Personales</h5>
          </div>
          <div className="">
            <label htmlFor="validatonTooltip04" className="form-label"
              ><b>¿Cuál es su localidad?</b></label
            >
            <select 
            className="form-select input"
             id="localidad"
             name="localidad"
             onChange={handleInputChange}
             required>
              <option selected disabled>Seleccione una localidad</option>
              {localidades.map((localidad, index)=>{
                return (
                  <option key={index} value={localidad.id_locality}>{localidad.name}</option>
                )
              })}
            </select>
          </div>
          
          <div className="my-3">
            <label htmlFor="validationTooltip04" className="form-label"
              ><b>¿Cuál es su género?</b></label
            >
            <select className="form-select input"
             id="genero"
             name="genero"
             onChange={handleInputChange}
              required
              >
              <option defaultValue={0} disabled>Selecciona una opción</option>
              <option value= {1} >Masculino</option>
              <option value= {2} >Femenino</option>
              <option value= {3} >Otros</option>
            </select>
          </div>
          <div className="my-3">
            <label htmlFor="validationTooltipUsername" className="form-label"
              ><b
                >¿Cuál es su edad?</b
              ></label
            >
            <div className="input-group has-validation" id="divMateria">
              <input
              type="number"
              className="form-control input"
              id="edad"
              name="edad"
              onChange={handleInputChange}
              aria-describedby="validationTooltipUsernamePrepend"
              required
            />
            </div>
          </div>
          <div className="my-3 text-primary">
            <h5>Datos Académicos</h5>
          </div>
          <div className="my-3">
            <label htmlFor="validationTooltip02" className="form-label"
              ><b>¿Qué carrera está cursando?</b></label>
            <div className="input-group has-validation" id="divCarrera">
              <select 
              className="form-select" 
              id="carrera" 
              onChange={(e)=>{
                handleChangeCarrera(e);
                handleInputChange(e);
              } }
              
              required
              name="carrera" 
              >
                <option selected disabled>Seleccione una carrera</option>
                <option value="TEC. SUP. EN DESARROLLO DE SOFTWARE"> TEC. SUP. EN DESARROLLO DE SOFTWARE </option>
                <option value="TEC. SUP. TELECOMUNICACIONES"> TEC. SUP. TELECOMUNICACIONES </option>
                <option value="TEC. SUP. MECATRÓNICA"> TEC. SUP. MECATRÓNICA </option>
                <option value="TEC. SUP. EN QUIMICA INDUSTRIAL"> TEC. SUP. EN QUIMICA INDUSTRIAL </option>
              </select>
            </div>
          </div>
          <div className="my-3">
            <label htmlFor="validationTooltipUsername" className="form-label"
              ><b
                >¿Qué materia le parece la mas adecuada a su curso?</b
              ></label
            >
            <div className="input-group has-validation" id="divMateria">
              <select 
              className="form-select" 
              id="materiaAdecuada" 
              name="materiaAdecuada" 
              onChange={handleInputChange}
              required>
                <option disabled>Seleccione una materia</option>
                {materias.map((materia, index)=>{
                  return (
                    <option key={index} value={materia}>{materia}</option>
                  )
                })}
              </select>
            </div>
          </div>
          <div className="">
            <label htmlFor="validationTooltipUsername" className="form-label"
              ><b>¿Qué materia agregaría a su curso?</b></label
            >
            <div className="input-group has-validation">
              <input
                type="text"
                className="form-control input"
                id="materiaAgregar"
                name="materiaAgregar"
                onChange={handleInputChange}
                aria-describedby="validationTooltipUsernamePrepend"
                required
              />
            </div>
          </div>
          <div className="my-3">
            <label htmlFor="validationTooltipUsername" className="form-label"
              ><b
                >En cuanto al contenido en general, ¿le parece actualizado u
                obsoleto?</b
              ></label
            >
            <div className="input-group has-validation">
              <select 
              className="form-select input" 
              id="esObsoleto" 
              name="esObsoleto"
              onChange={handleInputChange}
              required>
                <option value="Otro">Otro</option>
                <option value="Actualizado">Actualizado</option>
                <option value="Obsoleto">Obsoleto</option>
              </select>
            </div>
          </div>
          <div className="my-3">
            <label htmlFor="validationTooltipUsername" className="form-label"
              ><b
                >¿Consideras que alguna materia es innecesaria?</b
              ></label
            >
            <div className="input-group has-validation">
              <input
                type="text"
                className="form-control input"
                id="materiaInnecesaria"
                name="materiaInnecesaria"
                onChange={handleInputChange}
                aria-describedby="validationTooltipUsernamePrepend"
              />
            </div>
          </div>
          <div className="mb-1 mt-3">
            <button className="btn btn-primary" type="submit">Enviar</button>
            <button className="btn btn-secondary" type="reset">
              Borrar campos
            </button>
          </div>
        </form>
      </div>
        </>
      
    )
}

export default Form;