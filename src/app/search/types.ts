export interface Advocate {
    firstName: string;
    lastName: string;
    city: string;
    degree: string;
    specialties: string[];
    yearsOfExperience: number;
    phoneNumber: number;
}

export interface SearchParams {
    specialty1: string;
    optionalSpecialty?: string;
    city: string;
}