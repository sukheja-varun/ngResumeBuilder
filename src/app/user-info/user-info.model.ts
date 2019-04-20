export interface User {
    personalInfo: PersonalInfo;
    education: Experience[];
    work: Experience[];
    skills: Skill[];
    hobbies: Hobby[];
    languages: Language[];
}

export interface Language {
    name: string;
    score: number;
    color?: string;
}

export interface PersonalInfo {
    name: string;
    title: string;
    address: string;
    mobile: number;
    email: string;
    website: string;
    fb: string;
    linkedIn: string;
    twitter: string;
}

export interface Experience {
    institue: string;
    startDate: string;
    endDate: string;
    shortDescription: string;
}

export interface Skill {
    name: string;
    score: number;
    color?: string;
}

export interface Hobby {
    name: string;
}