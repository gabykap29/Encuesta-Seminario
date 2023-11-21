export const getMaterias = (carrera)=>{
    switch (carrera){
        case "TEC. SUP. EN DESARROLLO DE SOFTWARE":{
            return ["Arquitectura y sistemas operativos",
            "Algoritmos y estructura de datos",
            "Taller de lenguaje de programacion",
            "Base de datos",
            "Practica Profesional",
            "Laboratorio de Ingles",
            "Matematica aplicada",
            "Tecnologia y sociedad",
            "Ingenieria de software",
            "Seminarios de talleres de actualizacion",
            "Orientacion en valores y motivacional",]
        }
        case "TEC. SUP. TELECOMUNICACIONES":{
            return ["Calculo aplicado a las telecomunicaciones",
            "Fisica aplicada a las telecomunicaciones",
            "Señales y sistemas continuos y discretos",
            "Introduccion a la progamacion",
            "Fundamentos de las telecomunicaciones",
            "Laboratorio de electrotecnia, electronica analogica y digital",
            "Ingles tecnico",
            "Comunicaciones analogicas",
            "Laboratorio de electromagnetismo aplicado",
            "Comunicaciones degitales",
            "Laboratorio de redes de datos y comunicaciones",
            "Gestion y mantenimiento de calidad",
            "Sistemas opticos",
            "Normativas de comunicaciones",
            "Economia y proyectos",
            "Seguridad e higiene industrial",]
        }
        case "TEC. SUP. MECATRÓNICA":{
            return ["Ingles tecnico",
            "Seguridad e Higiene industrial",
            "Metro fisica",
            "Elementos de maquinas",
            "Taller de dibujo tecnico",
            "Taller de matematica",
            "Sistema hidraulicos y neumaticos",
            "Sistema electricos y electronicos",
            "Introduccion a la mecatronica",
            "Taller de electricidad y electronica",
            "Diseño industrial y CAD",
            "Sistema mecanico",
            "Integracion de sistemas",]
        } 
        case "TEC. SUP. EN QUIMICA INDUSTRIAL":{
            return ["Ingles tecnico",
            "Seguridad e Higiene industrial",
            "Metro fisica",
            "Elementos de maquinas",
            "Taller de dibujo tecnico",
            "Taller de matematica",
            "Sistema hidraulicos y neumaticos",
            "Sistema electricos y electronicos",
            "Introduccion a la mecatronica",
            "Taller de electricidad y electronica",
            "Diseño industrial y CAD",
            "Sistema mecanico",
            "Integracion de sistemas",]
        }
    }
};