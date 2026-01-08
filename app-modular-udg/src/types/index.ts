export interface Career {
  id: string;
  name: string;
  description: string;
  duration: string;
  modality: string;
  admissionRequirements: string[];
  fieldOfStudy: string;
  professionalProfile: string;
  centerId: string;
  website: string;
}

export interface UniversityCenter {
  id: string;
  name: string;
  acronym: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  website: string;

  // 👇 NUEVO CAMPO (OPCIONAL)
  admissionScoresPdf?: {
    label: string;
    url: string;
  };

  interestingFacts: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  careers: Career[];
  image?: string;
}

