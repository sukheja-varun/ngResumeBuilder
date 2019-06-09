import { User } from "./user-info.model";

export const dummyUser: User = {
    personalInfo: {
        name: 'Varun Sukheja',
        title: 'Tech Lead | Full Stack | Scrum Master ',
        address: 'Mumbai, Maharashtra',
        mobile: '8719911999',
        email: 'sukheja.varun@gmail.com',
        website: 'http://logic24by7.com',
        linkedIn: 'https://www.linkedin.com/in/varunsukheja/'
    },
    experiences: [
        {
            institute: 'LNCT, Bhopal',
            startDate: '2011',
            endDate: '2015',
            shortDescription: 'Completed Honors Degree in Bachelors Of Computer Science with a score of 79.1%'
        }, {
            institute: 'Amdocs',
            startDate: '2015',
            endDate: '2016',
            shortDescription: 'Worked as a Java Backend Developer in Java R&D Team as a Level3 developer.'
        },
        {
            institute: 'ShoppinPal',
            startDate: '2016',
            endDate: '2018',
            shortDescription: 'Handled 2 major roles that are being a Full Stack Developer and Scrum Master. Received the award "All Rounder of The Year" for contributions in various fields.'
        },
        {
            institute: 'LeagueAdda',
            startDate: '2018',
            endDate: '2019',
            shortDescription: 'Got new experience to work in the Gaming Domain as a Full Stack Developer and to learn new framework Ionic4'
        }],
    skills: [
        { name: 'Javascript', score: 8 },
        { name: 'AngularJS', score: 8 },
        { name: 'Angular 2+', score: 7 },
        { name: 'Ionic4', score: 8 },
        { name: 'Node', score: 6 },
        { name: 'HTML', score: 7 },
        { name: 'CSS/SCSS', score: 6 },
        { name: 'Typescript', score: 7 }
    ],
    languages: [{
        name: 'English', score: 8
    }],
    hobbies: [{
        name: 'Dancing'
    },
    {
        name: 'Blogging'
    }]
};