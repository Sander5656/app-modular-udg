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
  }
];
