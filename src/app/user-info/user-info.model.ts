export interface User {
    personalInfo: PersonalInfo;
    experiences: Experience[];
    educations: Experience[];
    skills: Skill[];
    hobbies: Hobby[];
    languages: Language[];
    certificates: Achievement[];
    awards: Achievement[];
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
    mobile: string;
    email: string;
    website?: string;
    fb?: string;
    linkedIn?: string;
    twitter?: string;
}

export interface Experience {
    institute: string;
    startDate: string;
    endDate: string;
    shortDescription: string;
}

export interface Skill {
    name: string;
    score: number;
    color?: string;
}

export interface Achievement {
    title: string;
    issuedBy: string;
    issueDate: string;
    shortDescription?: string;
}

export type Hobby = string;