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
            institute: 'LeagueAdda',
            startDate: '2018-10-01 ',
            endDate: '2019-6-01 ',
            shortDescription: 'Got new experience to work in the Gaming Domain as a Full Stack Developer and to learn new framework Ionic4'
        },
        {
            institute: 'ShoppinPal',
            startDate: '2016-12-19',
            endDate: '2018-08-01',
            shortDescription: 'Handled 2 major roles that are being a Full Stack Developer and Scrum Master. Received the award "All Rounder of The Year" for contributions in various fields.'
        },
        {
            institute: 'Amdocs',
            startDate: '2015-06-22',
            endDate: '2016-12-09',
            shortDescription: 'Worked as a Java Backend Developer in Java R&D Team as a Level3 developer.'
        },
        {
            institute: 'LNCT, Bhopal',
            startDate: '2011-06-01',
            endDate: '2015-05-01',
            shortDescription: 'Completed Honors Degree in Bachelors Of Computer Science with a score of 79.1%'
        },
    ],
    skills: [
        { name: 'JS', score: 83 },
        { name: 'Ng', score: 38 },
        { name: 'Ionic', score: 89 },
        { name: 'Node', score: 61 },
        { name: 'HTML', score: 27 },
        { name: 'SCSS', score: 16 },
        { name: 'TS', score: 57 }
    ],
    languages: [
        { name: 'English', score: 8 },
        { name: 'Spanish', score: 6, color: 'darkblue' },
        { name: 'French', score: 4, color: 'lime' }
    ],
    hobbies: ['dancing', 'writing', 'music']
};