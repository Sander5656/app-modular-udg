import { UniversityCenter } from "@/types";



export const universityCenters: UniversityCenter[] = [
  {
  id: "cucei",
  name: "Centro Universitario de Ciencias Exactas e Ingenierías",
  acronym: "CUCEI",
  description: "El CUCEI es el centro líder en la formación de profesionales en ciencias exactas e ingenierías, destacando por su infraestructura moderna y programas educativos de excelencia.",
  admissionScoresPdf: {
  label: "Consultar puntajes mínimos de los ciclos escolares recientes",
  url: "https://escolar.udg.mx/sites/default/files/adjuntos/puntajes-minimos-nivel-superior-25b_0.docx"
},
  address: "Blvd. Marcelino García Barragán 1421, Guadalajara, Jalisco",
  phone: "33 1378 5900",
  email: "contacto@cucei.udg.mx",
  website: "http://www.cucei.udg.mx",
  
  interestingFacts: [
    "Cuenta con más de 15,000 estudiantes",
    "Ofrece 20 programas de licenciatura",
    "Posee 45 laboratorios especializados",
    "Tiene convenios con más de 100 universidades internacionales"
  ],
  coordinates: { lat: 20.6557, lng: -103.3256 },
  image: "/centers/cucei.jpg",
  

  careers: [
    {
      id: "lic-fisica",
      name: "Licenciatura en Física",
      description: "Formación en física teórica y experimental.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Curso propedéutico","Documentación oficial"],
      fieldOfStudy: "Ciencias Exactas",
      professionalProfile: "Investigación y docencia en física.",
      centerId: "cucei",
      website: "https://www.cucei.udg.mx/oferta-academica/licenciaturas/licenciatura-en-fisica"
    },
    {
      id: "lic-matematicas",
      name: "Licenciatura en Matemáticas",
      description: "Formación en matemáticas puras y aplicadas.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Curso propedéutico","Documentación oficial"],
      fieldOfStudy: "Ciencias Exactas",
      professionalProfile: "Modelado matemático, docencia e investigación.",
      centerId: "cucei",
      website: "https://www.cucei.udg.mx/oferta-academica/licenciaturas/licenciatura-en-matematicas"
    },
    {
      id: "lic-quimica",
      name: "Licenciatura en Química",
      description: "Formación en química analítica, orgánica e inorgánica.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Curso propedéutico","Documentación oficial"],
      fieldOfStudy: "Ciencias Exactas",
      professionalProfile: "Industria química, investigación y control de calidad.",
      centerId: "cucei",
      website: "https://www.cucei.udg.mx/oferta-academica/licenciaturas/licenciatura-quimica"
    },
    {
      id: "qfb",
      name: "Químico Farmacéutico Biólogo",
      description: "Formación en salud, farmacéutica y biología.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Curso propedéutico","Documentación oficial"],
      fieldOfStudy: "Ciencias de la Salud",
      professionalProfile: "Laboratorio clínico, industria farmacéutica y biotecnología.",
      centerId: "cucei",
      website: "https://www.cucei.udg.mx/oferta-academica/licenciaturas/licenciatura-en-quimico-farmaceutico-biologo"
    },
    {
      id: "ing-ciencia-materiales",
      name: "Ingeniería en Ciencia de Materiales",
      description: "Estudio de materiales y sus aplicaciones.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Curso propedéutico","Documentación oficial"],
      fieldOfStudy: "Materiales e Ingeniería",
      professionalProfile: "Desarrollo y caracterización de materiales.",
      centerId: "cucei",
      website: "https://www.cucei.udg.mx/oferta-academica/licenciaturas/ingenieria-en-ciencia-de-materiales"
    },
    {
      id: "ing-civil",
      name: "Ingeniería Civil",
      description: "Diseño y construcción de infraestructura.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Curso propedéutico","Documentación oficial"],
      fieldOfStudy: "Ingeniería y Construcción",
      professionalProfile: "Gestión y supervisión de obras civiles.",
      centerId: "cucei",
      website: "https://www.cucei.udg.mx/oferta-academica/licenciaturas/licenciatura-en-ingenieria-civil"
    },
    {
      id: "ing-alimentos-biotec",
      name: "Ingeniería en Alimentos y Biotecnología",
      description: "Procesos alimentarios y biotecnológicos.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Curso propedéutico","Documentación oficial"],
      fieldOfStudy: "Biotecnología",
      professionalProfile: "Industria alimentaria y bioprocesos.",
      centerId: "cucei",
      website: "https://www.cucei.udg.mx/oferta-academica/licenciaturas/licenciatura-en-ingenieria-en-alimentos-y-biotecnologia"
    },
    {
      id: "ing-topografia-geomatica",
      name: "Ingeniería en Topografía Geomática",
      description: "Levantamientos y sistemas geoespaciales.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Curso propedéutico","Documentación oficial"],
      fieldOfStudy: "Geociencias",
      professionalProfile: "Cartografía, SIG y georreferenciación.",
      centerId: "cucei",
      website: "https://www.cucei.udg.mx/es/oferta-academica/licenciaturas/licenciatura-en-ingenieria-topografica"
    },
    {
      id: "ing-industrial",
      name: "Ingeniería Industrial",
      description: "Optimización de procesos y sistemas productivos.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Curso propedéutico","Documentación oficial"],
      fieldOfStudy: "Ingeniería Industrial",
      professionalProfile: "Gestión de operaciones y mejora continua.",
      centerId: "cucei",
      website: "https://www.cucei.udg.mx/oferta-academica/licenciaturas/licenciatura-en-ingenieria-industrial"
    },
    {
      id: "ing-mecanica-electrica",
      name: "Ingeniería Mecánica Eléctrica",
      description: "Sistemas mecánicos y eléctricos integrados.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Curso propedéutico","Documentación oficial"],
      fieldOfStudy: "Ingeniería Mecánica y Eléctrica",
      professionalProfile: "Diseño y mantenimiento de sistemas electromecánicos.",
      centerId: "cucei",
      website: "https://www.cucei.udg.mx/oferta-academica/licenciaturas/licenciatura-en-ingenieria-mecanica-electrica"
    },
    {
      id: "ing-quimica",
      name: "Ingeniería Química",
      description: "Procesos químicos industriales.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Curso propedéutico","Documentación oficial"],
      fieldOfStudy: "Ingeniería Química",
      professionalProfile: "Diseño y operación de plantas químicas.",
      centerId: "cucei",
      website: "https://www.cucei.udg.mx/oferta-academica/licenciaturas/licenciatura-en-ingenieria-quimica"
    },
    {
      id: "ing-logistica-transporte",
      name: "Ingeniería en Logística y Transporte",
      description: "Gestión de cadenas de suministro y transporte.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Curso propedéutico","Documentación oficial"],
      fieldOfStudy: "Logística",
      professionalProfile: "Optimización de cadenas de suministro.",
      centerId: "cucei",
      website: "https://www.cucei.udg.mx/oferta-academica/licenciaturas/ingenieria-en-logistica-y-transporte"
    },
    {
      id: "ing-informatica",
      name: "Ingeniería Informática",
      description: "Sistemas de información y software.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Curso propedéutico","Documentación oficial"],
      fieldOfStudy: "Tecnologías de la Información",
      professionalProfile: "Desarrollo y administración de sistemas informáticos.",
      centerId: "cucei",
      website: "https://www.cucei.udg.mx/oferta-academica/licenciaturas/licenciatura-en-ingenieria-informatica"
    },
    {
      id: "ing-biomédica",
      name: "Ingeniería Biomédica",
      description: "Tecnología aplicada a la salud.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Curso propedéutico","Documentación oficial"],
      fieldOfStudy: "Ingeniería Biomédica",
      professionalProfile: "Diseño y mantenimiento de equipos médicos.",
      centerId: "cucei",
      website: "https://www.cucei.udg.mx/oferta-academica/licenciaturas/licenciatura-en-ingenieria-biomedica"
    },
    {
      id: "ing-computacion",
      name: "Ingeniería en Computación",
      description: "Diseño y desarrollo de sistemas computacionales.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Curso propedéutico","Documentación oficial"],
      fieldOfStudy: "Ciencias de la Computación",
      professionalProfile: "Desarrollo de software y sistemas inteligentes.",
      centerId: "cucei",
      website: "https://www.cucei.udg.mx/oferta-academica/licenciaturas/licenciatura-en-ingenieria-en-computacion"
    },
    {
      id: "ing-electromovilidad-autotronica",
      name: "Ingeniería en Electromovilidad y Autotrónica",
      description: "Sistemas eléctricos para movilidad y control vehicular.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Curso propedéutico","Documentación oficial"],
      fieldOfStudy: "Ingeniería Automotriz",
      professionalProfile: "Desarrollo de vehículos eléctricos y sistemas de control.",
      centerId: "cucei",
      website: "https://www.cucei.udg.mx/oferta-academica/licenciaturas/ingenieria-en-electromovilidad-y-autotronica"
    },
    {
      id: "ing-electronica-sistemas-inteligentes",
      name: "Ingeniería en Electrónica y Sistemas Inteligentes",
      description: "Electrónica aplicada e inteligencia embebida.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Curso propedéutico","Documentación oficial"],
      fieldOfStudy: "Electrónica",
      professionalProfile: "Diseño de sistemas electrónicos inteligentes.",
      centerId: "cucei",
      website: "https://www.cucei.udg.mx/oferta-academica/licenciaturas/ingenieria-en-electronica-y-sistemas-inteligentes"
    },
    {
      id: "ing-fotonica",
      name: "Ingeniería Fotónica",
      description: "Tecnologías basadas en luz y fotónica.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Curso propedéutico","Documentación oficial"],
      fieldOfStudy: "Fotónica",
      professionalProfile: "Desarrollo de dispositivos y sistemas ópticos.",
      centerId: "cucei",
      website: "https://www.cucei.udg.mx/oferta-academica/licenciaturas/licenciatura-en-ingenieria-fotonica"
    },
    {
      id: "ing-mecatronica-inteligente",
      name: "Ingeniería en Mecatrónica Inteligente",
      description: "Integración mecánica, electrónica y control.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Curso propedéutico","Documentación oficial"],
      fieldOfStudy: "Mecatrónica",
      professionalProfile: "Diseño de sistemas automatizados y robóticos.",
      centerId: "cucei",
      website: "https://www.cucei.udg.mx/oferta-academica/licenciaturas/ingenieria-en-mecatronica-inteligente"
    },
    {
      id: "ing-robotica",
      name: "Ingeniería Robótica",
      description: "Diseño y control de robots y sistemas autónomos.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Curso propedéutico","Documentación oficial"],
      fieldOfStudy: "Robótica",
      professionalProfile: "Desarrollo de robots industriales y de servicio.",
      centerId: "cucei",
      website: "https://www.cucei.udg.mx/oferta-academica/licenciaturas/licenciatura-en-ingenieria-robotica"
    },
    {
      id: "lic-desarrollo-sistemas-web",
      name: "Licenciatura en Desarrollo de Sistemas Web",
      description: "Desarrollo web; modalidad virtual.",
      duration: "Consultar plan de estudios",
      modality: "Virtual",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Tecnologías de la Información",
      professionalProfile: "Desarrollo y mantenimiento de aplicaciones web.",
      centerId: "cucei",
      website: "https://www.cucei.udg.mx/carreras/desarrolloweb/"
    },
    {
      id: "lic-tecnologias-informacion",
      name: "Licenciatura en Tecnologías e Información",
      description: "Tecnologías de la información; modalidad virtual.",
      duration: "Consultar plan de estudios",
      modality: "Virtual",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Tecnologías de la Información",
      professionalProfile: "Administración de TI y servicios digitales.",
      centerId: "cucei",
      website: "https://www.cucei.udg.mx/carreras/tecnologias/"
    }
  ]
},
  {
  id: "cucs",
  name: "Centro Universitario de Ciencias de la Salud",
  acronym: "CUCS",
  description: "El CUCS es reconocido por formar profesionales de la salud con excelencia académica y compromiso social, contando con hospitales escuela de primer nivel.",
    admissionScoresPdf: {
  label: "Consultar puntajes mínimos de los ciclos escolares recientes",
  url: "https://escolar.udg.mx/sites/default/files/adjuntos/puntajes-minimos-nivel-superior-25b_0.docx"
},

  address: "Sierra Mojada 950, Guadalajara, Jalisco",
  phone: "33 1058 5200",
  email: "contacto@cucs.udg.mx",
  website: "http://www.cucs.udg.mx",
  interestingFacts: ["Primer centro de salud de la UdeG","Cuenta con 4 hospitales escuela","Más de 8,000 estudiantes","Programas reconocidos internacionalmente"],
  coordinates: { lat: 20.6739, lng: -103.3478 },
  image: "/centers/cucs.jpeg",
  careers: [
    {
      id: "medicina",
      name: "Médico Cirujano y Partero",
      description: "Forma médicos competentes para prevenir, diagnosticar y tratar enfermedades con un enfoque humanista.",
      duration: "13 semestres",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión CENEVAL","Entrevista","Documentación oficial"],
      fieldOfStudy: "Medicina",
      professionalProfile: "Diagnostica y trata enfermedades, realiza procedimientos quirúrgicos y promueve la salud comunitaria.",
      centerId: "cucs",
      website: "http://pregrado.udg.mx/Centros/Tem%C3%A1ticos/CUCS/licenciatura-en-medico-cirujano-y-partero"
    },
    {
      id: "enfermeria",
      name: "Licenciatura en Enfermería",
      description: "Prepara profesionales del cuidado de la salud con enfoque integral y humanista.",
      duration: "8 semestres",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Curso propedéutico","Documentación oficial"],
      fieldOfStudy: "Enfermería y Cuidados de la Salud",
      professionalProfile: "Brinda cuidados de enfermería, gestiona servicios de salud y promueve estilos de vida saludables.",
      centerId: "cucs",
      website: "http://pregrado.udg.mx/Centros/Tem%C3%A1ticos/CUCS/enfermeria-cucs"
    },
    {
      id: "enfermeria-distancia",
      name: "Licenciatura en Enfermería (Modalidad a Distancia)",
      description: "Programa de enfermería en modalidad a distancia con prácticas presenciales programadas.",
      duration: "Consultar plan de estudios",
      modality: "A distancia",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Enfermería",
      professionalProfile: "Cuidados de salud y gestión en entornos remotos y presenciales.",
      centerId: "cucs",
      website: "http://pregrado.udg.mx/Centros/Tem%C3%A1ticos/CUCS/licenciatura-en-enfermeria-modalidad-distancia"
    },
    {
      id: "nutricion",
      name: "Licenciatura en Nutrición",
      description: "Forma especialistas en nutrición humana y salud alimentaria.",
      duration: "8 semestres",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Curso propedéutico","Documentación oficial"],
      fieldOfStudy: "Nutrición y Dietética",
      professionalProfile: "Diseña planes nutricionales, promueve hábitos saludables y gestiona programas de nutrición comunitaria.",
      centerId: "cucs",
      website: "http://pregrado.udg.mx/Centros/Tem%C3%A1ticos/CUCS/licenciatura-en-nutricion"
    },
    {
      id: "psicologia",
      name: "Licenciatura en Psicología",
      description: "Formación en evaluación, intervención y promoción de la salud mental.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Psicología",
      professionalProfile: "Intervención clínica, comunitaria y organizacional en salud mental.",
      centerId: "cucs",
      website: "http://pregrado.udg.mx/Centros/Tem%C3%A1ticos/CUCS/psicologia-0"
    },
    {
      id: "cirujano-dentista",
      name: "Licenciatura en Cirujano Dentista",
      description: "Formación en prevención, diagnóstico y tratamiento odontológico.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Odontología",
      professionalProfile: "Atención odontológica integral y salud bucal comunitaria.",
      centerId: "cucs",
      website: "http://pregrado.udg.mx/Centros/Tem%C3%A1ticos/CUCS/cirujano-dentista-cucs"
    },
    {
      id: "bioquimica-clinica",
      name: "Licenciatura en Bioquímica Clínica y Medicina de Laboratorio",
      description: "Formación en análisis clínicos y diagnóstico de laboratorio.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Laboratorio Clínico",
      professionalProfile: "Realiza y supervisa pruebas de laboratorio para diagnóstico médico.",
      centerId: "cucs",
      website: "https://www.cucs.udg.mx/lbcml"
    },
    {
      id: "ciencias-biomédicas",
      name: "Licenciatura en Ciencias Biomédicas",
      description: "Formación en investigación biomédica y biociencias aplicadas.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Biomedicina",
      professionalProfile: "Investigación y desarrollo en biomedicina y biotecnología.",
      centerId: "cucs",
      website: "https://www.cucs.udg.mx/lcb"
    },
    {
      id: "ciencias-forenses",
      name: "Licenciatura en Ciencias Forenses",
      description: "Formación en técnicas forenses y peritaje científico.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Forense",
      professionalProfile: "Análisis forense, peritaje y apoyo a la administración de justicia.",
      centerId: "cucs",
      website: "http://pregrado.udg.mx/Centros/Tem%C3%A1ticos/CUCS/ciencias-forenses"
    },
    {
      id: "podologia",
      name: "Licenciatura en Podología",
      description: "Atención y tratamiento de afecciones del pie y la marcha.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Podología",
      professionalProfile: "Prevención y tratamiento de patologías del pie.",
      centerId: "cucs",
      website: "http://pregrado.udg.mx/Centros/Tem%C3%A1ticos/CUCS/podologia"
    },
    {
      id: "terapia-fisica",
      name: "Licenciatura en Terapia Física",
      description: "Formación en rehabilitación física y terapia manual.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Rehabilitación",
      professionalProfile: "Evaluación y tratamiento de alteraciones del movimiento y funcionalidad.",
      centerId: "cucs",
      website: "http://www.pregrado.udg.mx/Centros/Tem%C3%A1ticos/CUCS/terapia-fisica-lic/"
    },
    {
      id: "cultura-fisica-deportes",
      name: "Licenciatura en Cultura Física y Deportes",
      description: "Formación en entrenamiento, promoción deportiva y salud física.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Deportes y Actividad Física",
      professionalProfile: "Entrenamiento deportivo, promoción de la actividad física y gestión deportiva.",
      centerId: "cucs",
      website: "http://pregrado.udg.mx/Centros/Tem%C3%A1ticos/CUCS/cultura-fisica-y-deportes"
    }
  ]
},
  {
  id: "cucea",
  name: "Centro Universitario de Ciencias Económico Administrativas",
  acronym: "CUCEA",
  description: "El CUCEA es líder en la formación de profesionales en áreas económicas y administrativas, con programas innovadores y vinculación con el sector empresarial.",
    admissionScoresPdf: {
  label: "Consultar puntajes mínimos de los ciclos escolares recientes",
  url: "https://escolar.udg.mx/sites/default/files/adjuntos/puntajes-minimos-nivel-superior-25b_0.docx"
},
  address: "Periférico Norte 799, Zapopan, Jalisco",
  phone: "33 3770 3300",
  email: "contacto@cucea.udg.mx",
  website: "http://www.cucea.udg.mx",
  interestingFacts: ["Más de 18,000 estudiantes","Centro acreditado internacionalmente","Programas con triple acreditación","Red de más de 200 empresas colaboradoras"],
  coordinates: { lat: 20.7411, lng: -103.3801 },
  image: "/centers/cucea.jpeg",
  careers: [
    {
      id: "administracion",
      name: "Licenciatura en Administración",
      description: "Forma líderes empresariales capaces de gestionar organizaciones de manera eficiente y estratégica.",
      duration: "8 semestres",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Curso propedéutico","Documentación oficial"],
      fieldOfStudy: "Administración y Gestión",
      professionalProfile: "Gestiona empresas, desarrolla estrategias organizacionales y lidera equipos de trabajo.",
      centerId: "cucea",
      website: "https://www.cucea.udg.mx/oferta-academica/licenciatura-en-administracion"
    },
    {
      id: "administracion-financiera-sistemas",
      name: "Licenciatura en Administración Financiera y Sistemas",
      description: "Formación en finanzas y sistemas de información aplicados a la gestión empresarial.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Finanzas y Sistemas",
      professionalProfile: "Gestión financiera apoyada en sistemas de información.",
      centerId: "cucea",
      website: "https://www.cucea.udg.mx/oferta-academica/licenciatura-en-administracion-financiera-y-sistemas"
    },
    {
      id: "administracion-gubernamental-politicas-publicas",
      name: "Licenciatura en Administración Gubernamental y Políticas Públicas",
      description: "Formación orientada a la gestión pública y diseño de políticas.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Políticas Públicas",
      professionalProfile: "Gestión pública, evaluación y diseño de políticas públicas.",
      centerId: "cucea",
      website: "https://www.cucea.udg.mx/oferta-academica/licenciatura-en-administracion-gubernamental-y-politicas-publicas"
    },
    {
      id: "auditoria-contabilidad-gubernamental",
      name: "Licenciatura en Auditoría y Contabilidad Gubernamental",
      description: "Formación en auditoría y control para el sector público.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Contabilidad Pública",
      professionalProfile: "Auditoría, control y transparencia en instituciones públicas.",
      centerId: "cucea",
      website: "https://www.cucea.udg.mx/oferta-academica/licenciatura-en-auditoria-y-contabilidad-gubernamental"
    },
    {
      id: "contaduria-publica",
      name: "Licenciatura en Contaduría Pública",
      description: "Prepara profesionales expertos en contabilidad, finanzas y auditoría.",
      duration: "8 semestres",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Curso propedéutico","Documentación oficial"],
      fieldOfStudy: "Contabilidad y Finanzas",
      professionalProfile: "Realiza auditorías, gestiona información financiera y asesora en temas fiscales y contables.",
      centerId: "cucea",
      website: "https://www.cucea.udg.mx/oferta-academica/licenciatura-en-contaduria-publica"
    },
    {
      id: "economia",
      name: "Licenciatura en Economía",
      description: "Formación en teoría y análisis económico para la toma de decisiones.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Economía",
      professionalProfile: "Análisis económico, investigación y diseño de políticas públicas.",
      centerId: "cucea",
      website: "https://www.cucea.udg.mx/oferta-academica/licenciatura-en-economia"
    },
    {
      id: "gestion-negocios-gastronomicos",
      name: "Licenciatura en Gestión de Negocios Gastronómicos",
      description: "Formación en administración y operación de empresas del sector gastronómico.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Gestión Gastronómica",
      professionalProfile: "Administración y desarrollo de negocios gastronómicos y de servicios.",
      centerId: "cucea",
      website: "https://www.cucea.udg.mx/oferta-academica/licenciatura-en-gestion-de-negocios-gastronomicos"
    },
    {
      id: "gestion-economia-ambiental",
      name: "Licenciatura en Gestión y Economía Ambiental",
      description: "Formación en gestión sostenible y economía aplicada al medio ambiente.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Economía Ambiental",
      professionalProfile: "Diseño de estrategias de gestión ambiental y evaluación económica de recursos.",
      centerId: "cucea",
      website: "https://www.cucea.udg.mx/oferta-academica/licenciatura-en-gestion-y-economia-ambiental"
    },
    {
      id: "ingenieria-en-negocios",
      name: "Licenciatura en Ingeniería en Negocios",
      description: "Combina fundamentos de ingeniería y gestión para optimizar procesos empresariales.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Negocios e Ingeniería",
      professionalProfile: "Integración de soluciones técnicas y administrativas para la gestión empresarial.",
      centerId: "cucea",
      website: "https://www.cucea.udg.mx/oferta-academica/licenciatura-en-ingenieria-en-negocios"
    },
    {
      id: "mercadotecnia",
      name: "Licenciatura en Mercadotecnia",
      description: "Forma estrategas de marketing capaces de crear valor para las marcas y los consumidores.",
      duration: "8 semestres",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Curso propedéutico","Documentación oficial"],
      fieldOfStudy: "Marketing y Publicidad",
      professionalProfile: "Desarrolla estrategias de marketing, gestiona marcas y analiza el comportamiento del consumidor.",
      centerId: "cucea",
      website: "https://www.cucea.udg.mx/oferta-academica/licenciatura-en-mercadotecnia"
    },
    {
      id: "mercadotecnia-digital",
      name: "Licenciatura en Mercadotecnia Digital",
      description: "Especialización en estrategias digitales, analítica y comercio electrónico.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Marketing Digital",
      professionalProfile: "Diseño y ejecución de campañas digitales y análisis de datos de mercado.",
      centerId: "cucea",
      website: "https://www.cucea.udg.mx/oferta-academica/licenciatura-en-mercadotecnia-digital"
    },
    {
      id: "negocios-internacionales",
      name: "Licenciatura en Negocios Internacionales",
      description: "Formación en comercio exterior, logística y relaciones económicas internacionales.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Comercio Internacional",
      professionalProfile: "Gestión de operaciones internacionales, comercio exterior y negociación internacional.",
      centerId: "cucea",
      website: "https://www.cucea.udg.mx/oferta-academica/licenciatura-en-negocios-internacionales"
    },
    {
      id: "recursos-humanos",
      name: "Licenciatura en Recursos Humanos",
      description: "Formación en gestión del talento, desarrollo organizacional y relaciones laborales.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Gestión Humana",
      professionalProfile: "Selección, capacitación y desarrollo del talento humano en organizaciones.",
      centerId: "cucea",
      website: "https://www.cucea.udg.mx/oferta-academica/licenciatura-en-recursos-humanos"
    },
    {
      id: "relaciones-publicas-comunicacion",
      name: "Licenciatura en Relaciones Públicas y Comunicación",
      description: "Formación en comunicación organizacional, imagen pública y gestión de medios.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Comunicación",
      professionalProfile: "Comunicación estratégica, relaciones públicas y manejo de crisis.",
      centerId: "cucea",
      website: "https://www.cucea.udg.mx/oferta-academica/licenciatura-en-relaciones-publicas-y-comunicacion"
    },
    {
      id: "tecnologias-informacion",
      name: "Licenciatura en Tecnologías de la Información",
      description: "Formación en desarrollo, administración y seguridad de sistemas de información.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Tecnologías de la Información",
      professionalProfile: "Desarrollo de software, administración de redes y servicios TI.",
      centerId: "cucea",
      website: "https://www.cucea.udg.mx/oferta-academica/licenciatura-en-tecnologias-de-la-informacion"
    },
    {
      id: "turismo",
      name: "Licenciatura en Turismo",
      description: "Formación en gestión turística, planificación de destinos y servicios turísticos.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Turismo",
      professionalProfile: "Desarrollo y gestión de productos y servicios turísticos.",
      centerId: "cucea",
      website: "https://www.cucea.udg.mx/oferta-academica/licenciatura-en-turismo"
    }
  ]
},
  {
  id: "cucsh",
  name: "Centro Universitario de Ciencias Sociales y Humanidades",
  acronym: "CUCSH",
  description: "El CUCSH se distingue por su compromiso con las ciencias sociales y humanidades, formando profesionales críticos y comprometidos con la sociedad.",
    admissionScoresPdf: {
  label: "Consultar puntajes mínimos de los ciclos escolares recientes",
  url: "https://escolar.udg.mx/sites/default/files/adjuntos/puntajes-minimos-nivel-superior-25b_0.docx"
},
  address: "Av. de los Maestros y Mariano Bárcena, Guadalajara, Jalisco",
  phone: "33 3819 3300",
  email: "contacto@cucsh.udg.mx",
  website: "https://www.cucsh.udg.mx/licenciaturas",
  interestingFacts: [
    "Más de 12,000 estudiantes",
    "Centro con mayor diversidad de programas",
    "Fuerte enfoque en investigación social",
    "Programas reconocidos a nivel nacional"
  ],
  coordinates: { lat: 20.6961, lng: -103.3485 },
  image: "/centers/cucsh.jpeg",
  careers: [
    {
      id: "derecho",
      name: "Licenciatura en Derecho",
      description: "Forma abogados con sólidos conocimientos jurídicos y compromiso con la justicia social.",
      duration: "10 semestres",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Curso propedéutico","Documentación oficial"],
      fieldOfStudy: "Derecho y Ciencias Jurídicas",
      professionalProfile: "Ejerce la abogacía, asesora jurídicamente y promueve la justicia y el estado de derecho.",
      centerId: "cucsh",
      website: "https://www.cucsh.udg.mx/licenciaturas/licenciatura-en-derecho"
    },
    {
      id: "derecho-semiescolarizado",
      name: "Carrera de Abogado Semiescolarizado",
      description: "Modalidad semiescolarizada de la carrera de Abogado.",
      duration: "Consultar plan de estudios",
      modality: "Semiescolarizado",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Derecho",
      professionalProfile: "Formación jurídica en modalidad semiescolarizada.",
      centerId: "cucsh",
      website: "https://www.cucsh.udg.mx/licenciaturas/carrera-de-abogado-semiescolarizado"
    },
    {
      id: "antropologia",
      name: "Licenciatura en Antropología",
      description: "Estudio de culturas, sociedades y procesos sociales.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Antropología",
      professionalProfile: "Investigación social, trabajo comunitario y análisis cultural.",
      centerId: "cucsh",
      website: "https://www.cucsh.udg.mx/licenciaturas/licenciatura-en-antropologia"
    },
    {
      id: "comunicacion-publica",
      name: "Licenciatura en Comunicación Pública",
      description: "Formación en comunicación, medios y gestión de información pública.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Comunicación",
      professionalProfile: "Gestión de medios, comunicación institucional y producción de contenidos.",
      centerId: "cucsh",
      website: "https://www.cucsh.udg.mx/licenciaturas/licenciatura-en-comunicacion-publica"
    },
    {
      id: "criminologia",
      name: "Licenciatura en Criminología",
      description: "Estudio del delito, la victimología y sistemas de justicia.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Criminología",
      professionalProfile: "Peritaje, investigación criminal y políticas de prevención.",
      centerId: "cucsh",
      website: "https://www.cucsh.udg.mx/licenciaturas/licenciatura-en-criminologia"
    },
    {
      id: "didactica-frances",
      name: "Licenciatura en Didáctica del Francés como Lengua Extranjera",
      description: "Formación en enseñanza del francés como lengua extranjera.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Enseñanza de Lenguas",
      professionalProfile: "Docencia del francés en distintos niveles educativos.",
      centerId: "cucsh",
      website: "https://www.cucsh.udg.mx/licenciaturas/Licenciatura%20en%20Did%C3%A1ctica%20del%20Franc%C3%A9s%20como%20Lengua%20Extranjera"
    },
    {
      id: "docencia-ingles",
      name: "Licenciatura en Docencia del Inglés como Lengua Extranjera",
      description: "Formación para la enseñanza del inglés en contextos educativos.",
      duration: "Consultar plan de estudios",
      modality: "Presencial/Semiescolarizado/Distancia",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Enseñanza de Lenguas",
      professionalProfile: "Docencia del inglés y diseño curricular.",
      centerId: "cucsh",
      website: "https://www.cucsh.udg.mx/licenciaturas/Licenciatura%20en%20Docencia%20del%20Ingl%C3%A9s%20%28Modalidad%20Semiescolarizada%20Abierta%20y%20a%20Distancia%29"
    },
    {
      id: "escritura-creativa",
      name: "Licenciatura en Escritura Creativa",
      description: "Formación en técnicas de creación literaria y escritura profesional.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Portafolio","Documentación oficial"],
      fieldOfStudy: "Literatura y Escritura",
      professionalProfile: "Creación literaria, edición y gestión cultural.",
      centerId: "cucsh",
      website: "https://www.cucsh.udg.mx/licenciaturas/licenciatura-en-escritura-creativa"
    },
    {
      id: "estudios-politicos",
      name: "Licenciatura en Estudios Políticos y Gobierno",
      description: "Análisis de sistemas políticos, políticas públicas y gobernanza.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Ciencias Políticas",
      professionalProfile: "Investigación política, consultoría y diseño de políticas públicas.",
      centerId: "cucsh",
      website: "https://www.cucsh.udg.mx/licenciaturas/licenciatura-en-estudios-politicos-y-gobierno"
    },
    {
      id: "filosofia",
      name: "Licenciatura en Filosofía",
      description: "Formación en pensamiento crítico, ética y teoría del conocimiento.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Filosofía",
      professionalProfile: "Docencia, investigación y análisis crítico.",
      centerId: "cucsh",
      website: "https://www.cucsh.udg.mx/licenciaturas/licenciatura-en-filosofia"
    },
    {
      id: "geografia",
      name: "Licenciatura en Geografía",
      description: "Estudio del espacio, territorio y procesos geográficos.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Geografía",
      professionalProfile: "Ordenamiento territorial, SIG y análisis ambiental.",
      centerId: "cucsh",
      website: "https://www.cucsh.udg.mx/licenciaturas/licenciatura-en-geografia"
    },
    {
      id: "historia",
      name: "Licenciatura en Historia",
      description: "Formación en investigación histórica y patrimonio cultural.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Historia",
      professionalProfile: "Investigación, docencia y gestión del patrimonio.",
      centerId: "cucsh",
      website: "https://www.cucsh.udg.mx/licenciaturas/licenciatura-en-historia"
    },
    {
      id: "letras-hispanicas",
      name: "Licenciatura en Letras Hispánicas",
      description: "Estudio de la lengua y literatura en español.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Literatura y Lengua",
      professionalProfile: "Docencia, edición y crítica literaria.",
      centerId: "cucsh",
      website: "https://www.cucsh.udg.mx/licenciaturas/licenciatura-en-letras-hispanicas"
    },
    {
      id: "relaciones-internacionales",
      name: "Licenciatura en Relaciones Internacionales",
      description: "Formación en relaciones exteriores, comercio y diplomacia.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Relaciones Internacionales",
      professionalProfile: "Diplomacia, comercio exterior y análisis internacional.",
      centerId: "cucsh",
      website: "https://www.cucsh.udg.mx/licenciaturas/licenciatura-en-relaciones-internacionales"
    },
    {
      id: "sociologia",
      name: "Licenciatura en Sociología",
      description: "Análisis de estructuras sociales, procesos y desigualdades.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Sociología",
      professionalProfile: "Investigación social, políticas públicas y consultoría.",
      centerId: "cucsh",
      website: "https://www.cucsh.udg.mx/licenciaturas/licenciatura-en-sociologia"
    },
    {
      id: "trabajo-social",
      name: "Licenciatura en Trabajo Social",
      description: "Forma profesionales comprometidos con el desarrollo social y el bienestar comunitario.",
      duration: "8 semestres",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Curso propedéutico","Documentación oficial"],
      fieldOfStudy: "Trabajo Social",
      professionalProfile: "Diseña e implementa programas sociales, promueve el desarrollo comunitario y gestiona políticas públicas.",
      centerId: "cucsh",
      website: "https://www.cucsh.udg.mx/licenciaturas/licenciatura-en-trabajo-social"
    },
    {
      id: "nilits",
      name: "Nivelación a la Licenciatura en Trabajo Social (NiLiTS)",
      description: "Programa de nivelación para ingreso a Trabajo Social.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Trabajo Social",
      professionalProfile: "Nivelación y preparación para la licenciatura en Trabajo Social.",
      centerId: "cucsh",
      website: "https://www.cucsh.udg.mx/licenciaturas/nivelacion-a-la-licenciatura-en-trabajo-social"
    }
  ]
},
  {
  id: "cucba",
  name: "Centro Universitario de Ciencias Biológicas y Agropecuarias",
  acronym: "CUCBA",
  description: "El CUCBA se dedica a la formación de profesionales en ciencias biológicas y agropecuarias, enfocado en la investigación y el desarrollo sustentable.",
    admissionScoresPdf: {
  label: "Consultar puntajes mínimos de los ciclos escolares recientes",
  url: "https://escolar.udg.mx/sites/default/files/adjuntos/puntajes-minimos-nivel-superior-25b_0.docx"
},
  address: "Camino Ramón Padilla Sánchez 2100, Zapopan, Jalisco",
  phone: "33 3777 1150",
  email: "contacto@cucba.udg.mx",
  website: "https://cucba.udg.mx",
  interestingFacts: [
    "Cuenta con más de 3,000 estudiantes",
    "Tiene granjas experimentales y áreas de producción",
    "Líder en investigación sobre biodiversidad",
    "Programas enfocados en sustentabilidad"
  ],
  coordinates: { lat: 20.7489, lng: -103.5120 },
  image: "/centers/cucba.jpeg",
  careers: [
    {
      id: "ing-agronomia",
      name: "Ingeniería Agronómica",
      description: "Forma profesionales capaces de desarrollar sistemas de producción agrícola sustentable.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Curso propedéutico","Documentación oficial"],
      fieldOfStudy: "Agronomía y Producción Agrícola",
      professionalProfile: "Diseña y gestiona sistemas de producción agrícola, aplica técnicas de cultivo sustentable y asesora en proyectos agropecuarios.",
      centerId: "cucba",
      website: "https://cucba.udg.mx/oferta-academica/licenciaturas/ingeniero-agronomo"
    },
    {
      id: "medicina-veterinaria-y-zootecnia",
      name: "Medicina Veterinaria y Zootecnia",
      description: "Prepara profesionales para el cuidado de la salud animal y la producción pecuaria.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Curso propedéutico","Documentación oficial"],
      fieldOfStudy: "Medicina Veterinaria",
      professionalProfile: "Diagnostica y trata enfermedades animales, gestiona producción pecuaria y promueve la salud pública veterinaria.",
      centerId: "cucba",
      website: "https://cucba.udg.mx/contenido/licenciatura-en-medicina-veterinaria-y-zootecnia-0"
    },
    {
      id: "lic-biologia",
      name: "Licenciatura en Biología",
      description: "Forma científicos dedicados al estudio de los seres vivos y su entorno.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Curso propedéutico","Documentación oficial"],
      fieldOfStudy: "Ciencias Biológicas",
      professionalProfile: "Realiza investigación científica, evalúa impacto ambiental y desarrolla proyectos de conservación.",
      centerId: "cucba",
      website: "https://cucba.udg.mx/oferta-academica/licenciaturas/licenciatura-en-biologia"
    },
    {
      id: "lic-ciencia-alimentos",
      name: "Licenciatura en Ciencia de los Alimentos",
      description: "Formación en procesos y control de calidad de alimentos.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Ciencia y Tecnología de Alimentos",
      professionalProfile: "Desarrollo, control y aseguramiento de la calidad en la industria alimentaria.",
      centerId: "cucba",
      website: "https://cucba.udg.mx/oferta-academica/licenciaturas/licenciatura-en-ciencias-de-los-alimentos"
    },
    {
      id: "lic-agronegocios",
      name: "Licenciatura en Agronegocios",
      description: "Formación en gestión y comercialización de productos agropecuarios.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Negocios Agropecuarios",
      professionalProfile: "Gestión comercial, logística y emprendimiento en el sector agroalimentario.",
      centerId: "cucba",
      website: "https://cucba.udg.mx/oferta-academica/licenciaturas/licenciatura-en-agronegocios"
    }
  ]
},
  {
  "id": "cuaad",
  "name": "Centro Universitario de Arte, Arquitectura y Diseño",
  "acronym": "CUAAD",
  "description": "El CUAAD es el centro especializado en la formación de profesionales creativos en las áreas de arte, arquitectura y diseño, destacando por su innovación y vanguardia.",
    admissionScoresPdf: {
  label: "Consultar puntajes mínimos de los ciclos escolares recientes",
  url: "https://escolar.udg.mx/sites/default/files/adjuntos/puntajes-minimos-nivel-superior-25b_0.docx"
},
  "address": "Calzada Independencia Norte 5075, Huentitán El Bajo, Guadalajara, Jalisco",
  "phone": "33 3202 3000",
  "email": "contacto@cuaad.udg.mx",
  "website": "http://www.cuaad.udg.mx",
  "interestingFacts": [
    "Único centro especializado en arte y diseño de la UdeG",
    "Cuenta con más de 4,500 estudiantes",
    "Instalaciones con talleres y estudios especializados",
    "Exposiciones y eventos culturales permanentes"
  ],
  "coordinates": { "lat": 20.7233, "lng": -103.3178 },
  image: "/centers/cuaad.jpg",
  "careers": [
    {
      "id": "arquitectura",
      "name": "Arquitectura",
      "description": "Forma arquitectos capaces de diseñar espacios funcionales, estéticos y sustentables.",
      "duration": "10 semestres",
      "modality": "Presencial",
      "admissionRequirements": [
        "Certificado de bachillerato",
        "Examen de admisión",
        "Examen de habilidades",
        "Documentación oficial"
      ],
      "fieldOfStudy": "Arquitectura y Urbanismo",
      "professionalProfile": "Diseña y supervisa proyectos arquitectónicos, planifica espacios urbanos y aplica criterios de sustentabilidad.",
      "centerId": "cuaad",
      "website": "https://cuaad.udg.mx/oferta/licenciaturas/la/presentacion"
    },
    {
      "id": "diseno-para-la-comunicacion-grafica",
      "name": "Diseño para la Comunicación Gráfica",
      "description": "Prepara diseñadores capaces de crear soluciones visuales efectivas para la comunicación.",
      "duration": "8 semestres",
      "modality": "Presencial",
      "admissionRequirements": [
        "Certificado de bachillerato",
        "Examen de admisión",
        "Examen de habilidades creativas",
        "Documentación oficial"
      ],
      "fieldOfStudy": "Diseño Gráfico",
      "professionalProfile": "Desarrolla identidades visuales, diseña campañas publicitarias y crea contenido visual para medios digitales.",
      "centerId": "cuaad",
      "website": "https://cuaad.udg.mx/oferta/licenciatura/ldcg/perfil-del-aspirante"
    },
    {
      "id": "artes-visuales-fotografia",
      "name": "Artes Visuales para la Expresión Fotográfica",
      "description": "Forma artistas especializados en fotografía y expresión visual contemporánea.",
      "duration": "8 semestres",
      "modality": "Presencial",
      "admissionRequirements": [
        "Certificado de bachillerato",
        "Examen de admisión",
        "Portafolio de trabajos",
        "Documentación oficial"
      ],
      "fieldOfStudy": "Artes Visuales y Fotografía",
      "professionalProfile": "Produce obra fotográfica artística, gestiona proyectos visuales y desarrolla propuestas creativas contemporáneas.",
      "centerId": "cuaad",
      "website": "https://cuaad.udg.mx/oferta/licenciatura/lavef/presentacion"
    },
    {
      "id": "artes-audiovisuales",
      "name": "Artes Audiovisuales",
      "description": "Formación en producción audiovisual, cine y medios digitales.",
      "duration": "Consultar plan de estudios",
      "modality": "Presencial",
      "admissionRequirements": [
        "Certificado de bachillerato",
        "Examen de admisión",
        "Portafolio",
        "Documentación oficial"
      ],
      "fieldOfStudy": "Artes Audiovisuales",
      "professionalProfile": "Producción, dirección y postproducción audiovisual.",
      "centerId": "cuaad",
      "website": "https://cuaad.udg.mx/oferta/licenciaturas/laa/presentacion"
    },
    {
      "id": "artes-escenicas-dancistica",
      "name": "Artes Escénicas para la Expresión Dancística",
      "description": "Formación en danza, técnica y creación escénica.",
      "duration": "Consultar plan de estudios",
      "modality": "Presencial",
      "admissionRequirements": [
        "Certificado de bachillerato",
        "Examen de admisión",
        "Audición/portafolio",
        "Documentación oficial"
      ],
      "fieldOfStudy": "Artes Escénicas",
      "professionalProfile": "Interpretación, coreografía y gestión escénica.",
      "centerId": "cuaad",
      "website": "https://cuaad.udg.mx/oferta/licenciatura/laeed/perfil-del-aspirante"
    },
    {
      "id": "artes-escenicas-teatral",
      "name": "Artes Escénicas para la Expresión Teatral",
      "description": "Formación en actuación, dirección y producción teatral.",
      "duration": "Consultar plan de estudios",
      "modality": "Presencial",
      "admissionRequirements": [
        "Certificado de bachillerato",
        "Examen de admisión",
        "Audición/portafolio",
        "Documentación oficial"
      ],
      "fieldOfStudy": "Artes Escénicas",
      "professionalProfile": "Actuación, dirección y producción teatral.",
      "centerId": "cuaad",
      "website": "https://cuaad.udg.mx/oferta/licenciaturas/laeet/presentacion"
    },
    {
      "id": "artes-visuales-plastica",
      "name": "Artes Visuales para la Expresión Plástica",
      "description": "Formación en prácticas plásticas, teoría y crítica del arte.",
      "duration": "Consultar plan de estudios",
      "modality": "Presencial",
      "admissionRequirements": [
        "Certificado de bachillerato",
        "Examen de admisión",
        "Portafolio",
        "Documentación oficial"
      ],
      "fieldOfStudy": "Artes Visuales",
      "professionalProfile": "Creación plástica, curaduría y gestión cultural.",
      "centerId": "cuaad",
      "website": "https://cuaad.udg.mx/oferta/licenciatura/lavep/presentacion"
    },
    {
      "id": "diseno-de-interiores",
      "name": "Diseño de Interiores y Ambientación",
      "description": "Diseño de espacios interiores funcionales y estéticos.",
      "duration": "Consultar plan de estudios",
      "modality": "Presencial",
      "admissionRequirements": [
        "Certificado de bachillerato",
        "Examen de admisión",
        "Portafolio",
        "Documentación oficial"
      ],
      "fieldOfStudy": "Diseño de Interiores",
      "professionalProfile": "Proyecto y ambientación de espacios interiores.",
      "centerId": "cuaad",
      "website": "https://cuaad.udg.mx/oferta/licenciatura/ldia/perfil-de-aspirante"
    },
    {
      "id": "diseno-de-modas",
      "name": "Diseño de Modas",
      "description": "Formación en diseño, producción y gestión de moda.",
      "duration": "Consultar plan de estudios",
      "modality": "Presencial",
      "admissionRequirements": [
        "Certificado de bachillerato",
        "Examen de admisión",
        "Portafolio",
        "Documentación oficial"
      ],
      "fieldOfStudy": "Diseño de Modas",
      "professionalProfile": "Diseño de colecciones, producción y gestión de moda.",
      "centerId": "cuaad",
      "website": "https://cuaad.udg.mx/oferta/licenciatura/ldm/presentacion"
    },
    {
      "id": "diseno-industrial",
      "name": "Diseño Industrial",
      "description": "Diseño de productos, procesos y sistemas de producción.",
      "duration": "Consultar plan de estudios",
      "modality": "Presencial",
      "admissionRequirements": [
        "Certificado de bachillerato",
        "Examen de admisión",
        "Portafolio",
        "Documentación oficial"
      ],
      "fieldOfStudy": "Diseño Industrial",
      "professionalProfile": "Diseño de producto, prototipado y producción.",
      "centerId": "cuaad",
      "website": "https://cuaad.udg.mx/oferta/licenciatura/ldi/presentacion"
    },
    {
      "id": "diseno-arte-tecnologias-interactivas",
      "name": "Diseño, Arte y Tecnologías Interactivas",
      "description": "Intersección entre diseño, arte y tecnologías interactivas.",
      "duration": "Consultar plan de estudios",
      "modality": "Presencial",
      "admissionRequirements": [
        "Certificado de bachillerato",
        "Examen de admisión",
        "Portafolio",
        "Documentación oficial"
      ],
      "fieldOfStudy": "Diseño y Tecnología",
      "professionalProfile": "Proyectos interactivos, instalaciones y experiencias digitales.",
      "centerId": "cuaad",
      "website": "https://cuaad.udg.mx/oferta/licenciatura/ldati/presentacion"
    },
    {
      "id": "musica",
      "name": "Música",
      "description": "Formación en interpretación, composición y gestión musical.",
      "duration": "Consultar plan de estudios",
      "modality": "Presencial",
      "admissionRequirements": [
        "Certificado de bachillerato",
        "Examen de admisión",
        "Audición",
        "Documentación oficial"
      ],
      "fieldOfStudy": "Música",
      "professionalProfile": "Interpretación, composición, producción y gestión musical.",
      "centerId": "cuaad",
      "website": "https://cuaad.udg.mx/oferta/licenciaturas/lm/presentacion"
    },
    {
      "id": "urbanistica-y-medio-ambiente",
      "name": "Urbanística y Medio Ambiente",
      "description": "Estudio de planificación urbana y sostenibilidad ambiental.",
      "duration": "Consultar plan de estudios",
      "modality": "Presencial",
      "admissionRequirements": [
        "Certificado de bachillerato",
        "Examen de admisión",
        "Documentación oficial"
      ],
      "fieldOfStudy": "Urbanismo y Medio Ambiente",
      "professionalProfile": "Planificación urbana sostenible y gestión ambiental.",
      "centerId": "cuaad",
      "website": "https://cuaad.udg.mx/oferta/licenciatura/luma/perfil-de-aspirante"
    },
    {
      "id": "nivelacion-a-licenciatura-artes",
      "name": "Nivelación a Licenciatura Artes",
      "description": "Programa de nivelación para ingreso a licenciaturas en artes.",
      "duration": "Consultar plan de estudios",
      "modality": "Presencial",
      "admissionRequirements": [
        "Certificado de bachillerato",
        "Examen de admisión",
        "Portafolio/Prueba",
        "Documentación oficial"
      ],
      "fieldOfStudy": "Artes",
      "professionalProfile": "Preparación y nivelación para estudios de licenciatura en artes.",
      "centerId": "cuaad",
      "website": "https://cuaad.udg.mx/oferta/licenciaturas/na/presentacion"
    }
  ]
},
  {
  id: "cucosta",
  name: "Centro Universitario de la Costa",
  acronym: "CUCOSTA",
  description: "El CUCosta ofrece formación universitaria orientada al desarrollo regional y turístico de la costa, con programas en ciencias sociales, empresariales, artes y tecnología.",
    admissionScoresPdf: {
  label: "Consultar puntajes mínimos de los ciclos escolares recientes",
  url: "https://escolar.udg.mx/sites/default/files/adjuntos/puntajes-minimos-nivel-superior-25b_0.docx"
},
  address: "Avenida Universidad s/n, Puerto Vallarta, Jalisco",
  phone: "33 1234 5678",
  email: "contacto@cucosta.udg.mx",
  website: "http://www.cuc.udg.mx",
  interestingFacts: [
    "Ofrece alrededor de 20 programas de licenciatura",
    "Enfoque regional y turístico",
    "Vinculación con el sector productivo local",
    "Programas con enfoque práctico"
  ],
  coordinates: { lat: 20.6534, lng: -105.2253 },
  image: "/centers/cucosta.jpeg",
  careers: [
    {
      id: "administracion",
      name: "Licenciatura en Administración",
      description: "Formación en gestión y dirección de organizaciones.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Administración y Gestión",
      professionalProfile: "Gestión empresarial y emprendimiento.",
      centerId: "cucosta",
      website: "https://www.cuc.udg.mx/oferta-academica/licenciatura/licenciatura-en-administracion"
    },
    {
      id: "contaduria-publica",
      name: "Licenciatura en Contaduría Pública",
      description: "Formación en contabilidad, auditoría y finanzas.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Contabilidad y Finanzas",
      professionalProfile: "Contabilidad, auditoría y asesoría fiscal.",
      centerId: "cucosta",
      website: "https://www.cuc.udg.mx/oferta-academica/licenciatura/contaduria-publica"
    },
    {
      id: "derecho",
      name: "Licenciatura en Derecho",
      description: "Formación jurídica orientada a la práctica y la investigación.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Derecho y Ciencias Jurídicas",
      professionalProfile: "Ejerce la abogacía y asesoría legal.",
      centerId: "cucosta",
      website: "https://www.cuc.udg.mx/oferta-academica/licenciatura/abogado"
    },
    {
      id: "psicologia",
      name: "Licenciatura en Psicología",
      description: "Formación en evaluación e intervención psicológica.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Psicología",
      professionalProfile: "Intervención clínica y comunitaria.",
      centerId: "cucosta",
      website: "https://www.cuc.udg.mx/oferta-academica/licenciatura/licenciatura-en-psicologia"
    },
    {
      id: "trabajo-social",
      name: "Licenciatura en Trabajo Social",
      description: "Formación para la intervención y desarrollo comunitario.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Trabajo Social",
      professionalProfile: "Diseño e implementación de programas sociales.",
      centerId: "cucosta",
      website: "https://www.cuc.udg.mx/es/licenciaturas/licenciatura-en-trabajo-social"
    },
    {
      id: "turismo",
      name: "Licenciatura en Turismo",
      description: "Gestión turística y desarrollo de destinos.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Turismo",
      professionalProfile: "Gestión de productos y servicios turísticos.",
      centerId: "cucosta",
      website: "https://www.cuc.udg.mx/oferta-academica/licenciatura/turismo"
    },
    {
      id: "gestion-negocios-gastronomicos",
      name: "Licenciatura en Gestión de Negocios Gastronómicos",
      description: "Administración de empresas del sector gastronómico.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Gestión Gastronómica",
      professionalProfile: "Dirección y operación de negocios gastronómicos.",
      centerId: "cucosta",
      website: "https://www.cuc.udg.mx/es/licenciaturas/licenciatura-en-gestion-de-negocios-gastronomicos"
    },
    {
      id: "arquitectura",
      name: "Licenciatura en Arquitectura",
      description: "Diseño y construcción arquitectónica.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Arquitectura",
      professionalProfile: "Diseño arquitectónico y urbanismo.",
      centerId: "cucosta",
      website: "https://www.cuc.udg.mx/oferta-academica/licenciatura/arquitectura"
    },
    {
      id: "artes-visuales",
      name: "Licenciatura en Artes Visuales",
      description: "Prácticas artísticas y teoría del arte.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Portafolio","Documentación oficial"],
      fieldOfStudy: "Artes",
      professionalProfile: "Creación artística y gestión cultural.",
      centerId: "cucosta",
      website: "https://www.cuc.udg.mx/oferta-academica/licenciatura/artes-visuales-para-la-expresion-fotografica"
    },
    {
      id: "ingenieria-sistemas-computacionales",
      name: "Ingeniería en Sistemas Computacionales",
      description: "Desarrollo de software y sistemas.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Tecnologías de la Información",
      professionalProfile: "Desarrollo de aplicaciones y administración de sistemas.",
      centerId: "cucosta",
      website: "https://www.cuc.udg.mx/oferta-academica/licenciatura/ingenieria-en-computacion"
    },
    {
      id: "mercadotecnia",
      name: "Licenciatura en Mercadotecnia",
      description: "Estrategias de mercado y gestión de marcas.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Marketing",
      professionalProfile: "Desarrollo de estrategias comerciales y de marca.",
      centerId: "cucosta",
      website: "https://www.cuc.udg.mx/es/licenciaturas/licenciatura-en-mercadotecnia"
    },
    {
      id: "negocios-internacionales",
      name: "Licenciatura en Negocios Internacionales",
      description: "Comercio exterior y relaciones económicas internacionales.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Comercio Internacional",
      professionalProfile: "Gestión de operaciones internacionales y comercio exterior.",
      centerId: "cucosta",
      website: "https://www.cuc.udg.mx/es/licenciaturas/licenciatura-en-negocios-internacionales"
    },
    {
      id: "ciencias-de-la-comunicacion",
      name: "Licenciatura en Ciencias de la Comunicación",
      description: "Medios, comunicación y producción de contenidos.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Comunicación",
      professionalProfile: "Producción de contenidos, medios y comunicación organizacional.",
      centerId: "cucosta",
      website: "https://www.cuc.udg.mx/es/licenciaturas/licenciatura-en-ciencias-de-la-comunicacion"
    },
    {
      id: "gestion-cultural",
      name: "Licenciatura en Gestión Cultural",
      description: "Gestión de proyectos culturales y patrimonio.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Cultura",
      professionalProfile: "Gestión y promoción de actividades culturales.",
      centerId: "cucosta",
      website: "https://www.cuc.udg.mx/es/licenciaturas/licenciatura-en-gestion-cultural"
    },
    {
      id: "diseno-grafico",
      name: "Licenciatura en Diseño Gráfico",
      description: "Diseño visual y comunicación gráfica.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Portafolio","Documentación oficial"],
      fieldOfStudy: "Diseño",
      professionalProfile: "Diseño editorial, digital e identidad visual.",
      centerId: "cucosta",
      website: "https://www.cuc.udg.mx/es/licenciaturas/licenciatura-en-diseno-grafico"
    },
    {
      id: "educacion",
      name: "Licenciatura en Educación",
      description: "Formación docente y pedagogía.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Educación",
      professionalProfile: "Docencia y diseño curricular.",
      centerId: "cucosta",
      website: "https://www.cuc.udg.mx/es/licenciaturas/licenciatura-en-educacion"
    },
    {
      id: "enfermeria",
      name: "Licenciatura en Enfermería",
      description: "Formación en cuidados de salud y atención clínica.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Salud",
      professionalProfile: "Atención clínica y comunitaria en enfermería.",
      centerId: "cucosta",
      website: "https://www.cuc.udg.mx/oferta-academica/licenciatura/enfermeria"
    },
    {
      id: "ciencias-ambientales",
      name: "Licenciatura en Ciencias Ambientales",
      description: "Estudio y gestión del medio ambiente y recursos naturales.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Medio Ambiente",
      professionalProfile: "Gestión ambiental y evaluación de impacto.",
      centerId: "cucosta",
      website: "https://www.cuc.udg.mx/es/licenciaturas/licenciatura-en-ciencias-ambientales"
    },
    {
      id: "tecnologias-de-la-informacion",
      name: "Licenciatura en Tecnologías de la Información",
      description: "Desarrollo y administración de sistemas y servicios TI.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Tecnologías de la Información",
      professionalProfile: "Administración de redes, seguridad y desarrollo de software.",
      centerId: "cucosta",
      website: "https://www.cuc.udg.mx/es/licenciaturas/licenciatura-en-tecnologias-de-la-informacion"
    },
    {
      id: "desarrollo-sistemas-web",
      name: "Licenciatura en Desarrollo de Sistemas Web",
      description: "Desarrollo y mantenimiento de aplicaciones web.",
      duration: "Consultar plan de estudios",
      modality: "Presencial",
      admissionRequirements: ["Certificado de bachillerato","Examen de admisión","Documentación oficial"],
      fieldOfStudy: "Tecnologías de la Información",
      professionalProfile: "Desarrollo front-end y back-end, despliegue y mantenimiento de aplicaciones web.",
      centerId: "cucosta",
      website: "https://www.cuc.udg.mx/es/licenciaturas/licenciatura-en-desarrollo-de-sistemas-web"
    }
  ]
}
];
