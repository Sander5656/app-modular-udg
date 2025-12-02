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
  interestingFacts: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  careers: Career[];
}
