import { UniversityCenter } from "@/types";

export const universityCenters: UniversityCenter[] = [
  {
    id: "cucei",
    name: "Centro Universitario de Ciencias Exactas e Ingenierías",
    acronym: "CUCEI",
    description: "El CUCEI es el centro líder en la formación de profesionales en ciencias exactas e ingenierías, destacando por su infraestructura moderna y programas educativos de excelencia.",
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
    careers: [
      {
        id: "ing-computacion",
        name: "Ingeniería en Computación",
        description: "Forma profesionales capaces de diseñar, desarrollar e implementar sistemas computacionales innovadores.",
        duration: "9 semestres",
        modality: "Presencial",
        admissionRequirements: [
          "Certificado de bachillerato",
          "Examen de admisión",
          "Curso propedéutico",
          "Documentación oficial"
        ],
        fieldOfStudy: "Ciencias de la Computación",
        professionalProfile: "El egresado será capaz de desarrollar software, administrar redes, diseñar sistemas inteligentes y gestionar proyectos tecnológicos.",
        centerId: "cucei"
      },
      {
        id: "ing-civil",
        name: "Ingeniería Civil",
        description: "Prepara profesionales para el diseño, construcción y mantenimiento de obras de infraestructura.",
        duration: "10 semestres",
        modality: "Presencial",
        admissionRequirements: [
          "Certificado de bachillerato",
          "Examen de admisión",
          "Curso propedéutico",
          "Documentación oficial"
        ],
        fieldOfStudy: "Ingeniería y Construcción",
        professionalProfile: "Diseña y supervisa obras civiles, gestiona proyectos de construcción y aplica tecnologías sustentables.",
        centerId: "cucei"
      },
      {
        id: "fisica",
        name: "Licenciatura en Física",
        description: "Forma investigadores y profesionales en física teórica y aplicada.",
        duration: "8 semestres",
        modality: "Presencial",
        admissionRequirements: [
          "Certificado de bachillerato",
          "Examen de admisión",
          "Curso propedéutico",
          "Documentación oficial"
        ],
        fieldOfStudy: "Ciencias Exactas",
        professionalProfile: "Desarrolla investigación científica, aplica métodos experimentales y resuelve problemas complejos usando la física.",
        centerId: "cucei"
      }
    ]
  },
  {
    id: "cucs",
    name: "Centro Universitario de Ciencias de la Salud",
    acronym: "CUCS",
    description: "El CUCS es reconocido por formar profesionales de la salud con excelencia académica y compromiso social, contando con hospitales escuela de primer nivel.",
    address: "Sierra Mojada 950, Guadalajara, Jalisco",
    phone: "33 1058 5200",
    email: "contacto@cucs.udg.mx",
    website: "http://www.cucs.udg.mx",
    interestingFacts: [
      "Primer centro de salud de la UdeG",
      "Cuenta con 4 hospitales escuela",
      "Más de 8,000 estudiantes",
      "Programas reconocidos internacionalmente"
    ],
    coordinates: { lat: 20.6739, lng: -103.3478 },
    careers: [
      {
        id: "medicina",
        name: "Médico Cirujano y Partero",
        description: "Forma médicos competentes para prevenir, diagnosticar y tratar enfermedades con un enfoque humanista.",
        duration: "13 semestres",
        modality: "Presencial",
        admissionRequirements: [
          "Certificado de bachillerato",
          "Examen de admisión CENEVAL",
          "Entrevista",
          "Documentación oficial"
        ],
        fieldOfStudy: "Medicina",
        professionalProfile: "Diagnostica y trata enfermedades, realiza procedimientos quirúrgicos y promueve la salud comunitaria.",
        centerId: "cucs"
      },
      {
        id: "enfermeria",
        name: "Licenciatura en Enfermería",
        description: "Prepara profesionales del cuidado de la salud con enfoque integral y humanista.",
        duration: "8 semestres",
        modality: "Presencial",
        admissionRequirements: [
          "Certificado de bachillerato",
          "Examen de admisión",
          "Curso propedéutico",
          "Documentación oficial"
        ],
        fieldOfStudy: "Enfermería y Cuidados de la Salud",
        professionalProfile: "Brinda cuidados de enfermería, gestiona servicios de salud y promueve estilos de vida saludables.",
        centerId: "cucs"
      },
      {
        id: "nutricion",
        name: "Licenciatura en Nutrición",
        description: "Forma especialistas en nutrición humana y salud alimentaria.",
        duration: "8 semestres",
        modality: "Presencial",
        admissionRequirements: [
          "Certificado de bachillerato",
          "Examen de admisión",
          "Curso propedéutico",
          "Documentación oficial"
        ],
        fieldOfStudy: "Nutrición y Dietética",
        professionalProfile: "Diseña planes nutricionales, promueve hábitos saludables y gestiona programas de nutrición comunitaria.",
        centerId: "cucs"
      }
    ]
  },
  {
    id: "cucea",
    name: "Centro Universitario de Ciencias Económico Administrativas",
    acronym: "CUCEA",
    description: "El CUCEA es líder en la formación de profesionales en áreas económicas y administrativas, con programas innovadores y vinculación con el sector empresarial.",
    address: "Periférico Norte 799, Zapopan, Jalisco",
    phone: "33 3770 3300",
    email: "contacto@cucea.udg.mx",
    website: "http://www.cucea.udg.mx",
    interestingFacts: [
      "Más de 18,000 estudiantes",
      "Centro acreditado internacionalmente",
      "Programas con triple acreditación",
      "Red de más de 200 empresas colaboradoras"
    ],
    coordinates: { lat: 20.7411, lng: -103.3801 },
    careers: [
      {
        id: "administracion",
        name: "Licenciatura en Administración",
        description: "Forma líderes empresariales capaces de gestionar organizaciones de manera eficiente y estratégica.",
        duration: "8 semestres",
        modality: "Presencial",
        admissionRequirements: [
          "Certificado de bachillerato",
          "Examen de admisión",
          "Curso propedéutico",
          "Documentación oficial"
        ],
        fieldOfStudy: "Administración y Gestión",
        professionalProfile: "Gestiona empresas, desarrolla estrategias organizacionales y lidera equipos de trabajo.",
        centerId: "cucea"
      },
      {
        id: "contaduria",
        name: "Licenciatura en Contaduría Pública",
        description: "Prepara profesionales expertos en contabilidad, finanzas y auditoría.",
        duration: "8 semestres",
        modality: "Presencial",
        admissionRequirements: [
          "Certificado de bachillerato",
          "Examen de admisión",
          "Curso propedéutico",
          "Documentación oficial"
        ],
        fieldOfStudy: "Contabilidad y Finanzas",
        professionalProfile: "Realiza auditorías, gestiona información financiera y asesora en temas fiscales y contables.",
        centerId: "cucea"
      },
      {
        id: "mercadotecnia",
        name: "Licenciatura en Mercadotecnia",
        description: "Forma estrategas de marketing capaces de crear valor para las marcas y los consumidores.",
        duration: "8 semestres",
        modality: "Presencial",
        admissionRequirements: [
          "Certificado de bachillerato",
          "Examen de admisión",
          "Curso propedéutico",
          "Documentación oficial"
        ],
        fieldOfStudy: "Marketing y Publicidad",
        professionalProfile: "Desarrolla estrategias de marketing, gestiona marcas y analiza el comportamiento del consumidor.",
        centerId: "cucea"
      }
    ]
  },
  {
    id: "cucsh",
    name: "Centro Universitario de Ciencias Sociales y Humanidades",
    acronym: "CUCSH",
    description: "El CUCSH se distingue por su compromiso con las ciencias sociales y humanidades, formando profesionales críticos y comprometidos con la sociedad.",
    address: "Av. de los Maestros y Mariano Bárcena, Guadalajara, Jalisco",
    phone: "33 3819 3300",
    email: "contacto@cucsh.udg.mx",
    website: "http://www.cucsh.udg.mx",
    interestingFacts: [
      "Más de 12,000 estudiantes",
      "Centro con mayor diversidad de programas",
      "Fuerte enfoque en investigación social",
      "Programas reconocidos a nivel nacional"
    ],
    coordinates: { lat: 20.6961, lng: -103.3485 },
    careers: [
      {
        id: "derecho",
        name: "Licenciatura en Derecho",
        description: "Forma abogados con sólidos conocimientos jurídicos y compromiso con la justicia social.",
        duration: "10 semestres",
        modality: "Presencial",
        admissionRequirements: [
          "Certificado de bachillerato",
          "Examen de admisión",
          "Curso propedéutico",
          "Documentación oficial"
        ],
        fieldOfStudy: "Derecho y Ciencias Jurídicas",
        professionalProfile: "Ejerce la abogacía, asesora jurídicamente y promueve la justicia y el estado de derecho.",
        centerId: "cucsh"
      },
      {
        id: "psicologia",
        name: "Licenciatura en Psicología",
        description: "Prepara profesionales de la salud mental con enfoque científico y humanista.",
        duration: "9 semestres",
        modality: "Presencial",
        admissionRequirements: [
          "Certificado de bachillerato",
          "Examen de admisión",
          "Curso propedéutico",
          "Documentación oficial"
        ],
        fieldOfStudy: "Psicología",
        professionalProfile: "Evalúa y trata problemas psicológicos, investiga el comportamiento humano y promueve la salud mental.",
        centerId: "cucsh"
      },
      {
        id: "trabajo-social",
        name: "Licenciatura en Trabajo Social",
        description: "Forma profesionales comprometidos con el desarrollo social y el bienestar comunitario.",
        duration: "8 semestres",
        modality: "Presencial",
        admissionRequirements: [
          "Certificado de bachillerato",
          "Examen de admisión",
          "Curso propedéutico",
          "Documentación oficial"
        ],
        fieldOfStudy: "Trabajo Social",
        professionalProfile: "Diseña e implementa programas sociales, promueve el desarrollo comunitario y gestiona políticas públicas.",
        centerId: "cucsh"
      }
    ]
  },
  {
    id: "cucba",
    name: "Centro Universitario de Ciencias Biológicas y Agropecuarias",
    acronym: "CUCBA",
    description: "El CUCBA se dedica a la formación de profesionales en ciencias biológicas y agropecuarias, enfocado en la investigación y el desarrollo sustentable.",
    address: "Camino Ramón Padilla Sánchez 2100, Zapopan, Jalisco",
    phone: "33 3777 1150",
    email: "contacto@cucba.udg.mx",
    website: "http://www.cucba.udg.mx",
    interestingFacts: [
      "Cuenta con más de 3,000 estudiantes",
      "Tiene granjas experimentales y áreas de producción",
      "Líder en investigación sobre biodiversidad",
      "Programas enfocados en sustentabilidad"
    ],
    coordinates: { lat: 20.7489, lng: -103.5120 },
    careers: [
      {
        id: "agronomia",
        name: "Ingeniería Agronómica",
        description: "Forma profesionales capaces de desarrollar sistemas de producción agrícola sustentable.",
        duration: "9 semestres",
        modality: "Presencial",
        admissionRequirements: [
          "Certificado de bachillerato",
          "Examen de admisión",
          "Curso propedéutico",
          "Documentación oficial"
        ],
        fieldOfStudy: "Agronomía y Producción Agrícola",
        professionalProfile: "Diseña y gestiona sistemas de producción agrícola, aplica técnicas de cultivo sustentable y asesora en proyectos agropecuarios.",
        centerId: "cucba"
      },
      {
        id: "medicina-veterinaria",
        name: "Medicina Veterinaria y Zootecnia",
        description: "Prepara profesionales para el cuidado de la salud animal y la producción pecuaria.",
        duration: "10 semestres",
        modality: "Presencial",
        admissionRequirements: [
          "Certificado de bachillerato",
          "Examen de admisión",
          "Curso propedéutico",
          "Documentación oficial"
        ],
        fieldOfStudy: "Medicina Veterinaria",
        professionalProfile: "Diagnostica y trata enfermedades animales, gestiona producción pecuaria y promueve la salud pública veterinaria.",
        centerId: "cucba"
      },
      {
        id: "biologia",
        name: "Licenciatura en Biología",
        description: "Forma científicos dedicados al estudio de los seres vivos y su entorno.",
        duration: "8 semestres",
        modality: "Presencial",
        admissionRequirements: [
          "Certificado de bachillerato",
          "Examen de admisión",
          "Curso propedéutico",
          "Documentación oficial"
        ],
        fieldOfStudy: "Ciencias Biológicas",
        professionalProfile: "Realiza investigación científica, evalúa impacto ambiental y desarrolla proyectos de conservación.",
        centerId: "cucba"
      }
    ]
  },
  {
    id: "cuaad",
    name: "Centro Universitario de Arte, Arquitectura y Diseño",
    acronym: "CUAAD",
    description: "El CUAAD es el centro especializado en la formación de profesionales creativos en las áreas de arte, arquitectura y diseño, destacando por su innovación y vanguardia.",
    address: "Calzada Independencia Norte 5075, Huentitán El Bajo, Guadalajara, Jalisco",
    phone: "33 3202 3000",
    email: "contacto@cuaad.udg.mx",
    website: "http://www.cuaad.udg.mx",
    interestingFacts: [
      "Único centro especializado en arte y diseño de la UdeG",
      "Cuenta con más de 4,500 estudiantes",
      "Instalaciones con talleres y estudios especializados",
      "Exposiciones y eventos culturales permanentes"
    ],
    coordinates: { lat: 20.7233, lng: -103.3178 },
    careers: [
      {
        id: "arquitectura",
        name: "Arquitectura",
        description: "Forma arquitectos capaces de diseñar espacios funcionales, estéticos y sustentables.",
        duration: "10 semestres",
        modality: "Presencial",
        admissionRequirements: [
          "Certificado de bachillerato",
          "Examen de admisión",
          "Examen de habilidades",
          "Documentación oficial"
        ],
        fieldOfStudy: "Arquitectura y Urbanismo",
        professionalProfile: "Diseña y supervisa proyectos arquitectónicos, planifica espacios urbanos y aplica criterios de sustentabilidad.",
        centerId: "cuaad"
      },
      {
        id: "diseno-grafico",
        name: "Diseño para la Comunicación Gráfica",
        description: "Prepara diseñadores capaces de crear soluciones visuales efectivas para la comunicación.",
        duration: "8 semestres",
        modality: "Presencial",
        admissionRequirements: [
          "Certificado de bachillerato",
          "Examen de admisión",
          "Examen de habilidades creativas",
          "Documentación oficial"
        ],
        fieldOfStudy: "Diseño Gráfico",
        professionalProfile: "Desarrolla identidades visuales, diseña campañas publicitarias y crea contenido visual para medios digitales.",
        centerId: "cuaad"
      },
      {
        id: "artes-visuales",
        name: "Artes Visuales para la Expresión Fotográfica",
        description: "Forma artistas especializados en fotografía y expresión visual contemporánea.",
        duration: "8 semestres",
        modality: "Presencial",
        admissionRequirements: [
          "Certificado de bachillerato",
          "Examen de admisión",
          "Portafolio de trabajos",
          "Documentación oficial"
        ],
        fieldOfStudy: "Artes Visuales y Fotografía",
        professionalProfile: "Produce obra fotográfica artística, gestiona proyectos visuales y desarrolla propuestas creativas contemporáneas.",
        centerId: "cuaad"
      }
    ]
  },
  {
    id: "cucosta",
    name: "Centro Universitario de la Costa",
    acronym: "CUCosta",
    description: "El CUCosta ofrece educación superior de calidad en la región costera de Jalisco, con programas innovadores y vinculación regional.",
    address: "Av. Universidad 203, Delegación Ixtapa, Puerto Vallarta, Jalisco",
    phone: "322 226 2200",
    email: "contacto@cuc.udg.mx",
    website: "http://www.cuc.udg.mx",
    interestingFacts: [
      "Ubicado en Puerto Vallarta",
      "Más de 3,500 estudiantes",
      "Enfoque en turismo y desarrollo sustentable",
      "Convenios con sector hotelero y turístico"
    ],
    coordinates: { lat: 20.6534, lng: -105.2253 },
    careers: [
      {
        id: "turismo",
        name: "Licenciatura en Gestión y Desarrollo Turístico",
        description: "Forma profesionales especializados en la gestión y desarrollo del sector turístico.",
        duration: "8 semestres",
        modality: "Presencial",
        admissionRequirements: [
          "Certificado de bachillerato",
          "Examen de admisión",
          "Curso propedéutico",
          "Documentación oficial"
        ],
        fieldOfStudy: "Turismo y Hospitalidad",
        professionalProfile: "Gestiona empresas turísticas, desarrolla proyectos de turismo sustentable y promueve destinos turísticos.",
        centerId: "cucosta"
      },
      {
        id: "sistemas-informacion",
        name: "Ingeniería en Sistemas de Información",
        description: "Prepara ingenieros capaces de desarrollar e implementar sistemas de información.",
        duration: "9 semestres",
        modality: "Presencial",
        admissionRequirements: [
          "Certificado de bachillerato",
          "Examen de admisión",
          "Curso propedéutico",
          "Documentación oficial"
        ],
        fieldOfStudy: "Sistemas de Información",
        professionalProfile: "Desarrolla sistemas de información, gestiona bases de datos y administra infraestructura tecnológica.",
        centerId: "cucosta"
      },
      {
        id: "contaduria-publica-costa",
        name: "Licenciatura en Contaduría Pública",
        description: "Forma contadores públicos con enfoque en la gestión financiera regional.",
        duration: "8 semestres",
        modality: "Presencial",
        admissionRequirements: [
          "Certificado de bachillerato",
          "Examen de admisión",
          "Curso propedéutico",
          "Documentación oficial"
        ],
        fieldOfStudy: "Contabilidad y Finanzas",
        professionalProfile: "Gestiona información contable, realiza auditorías y asesora en materia fiscal y financiera.",
        centerId: "cucosta"
      }
    ]
  }
];
