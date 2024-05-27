import profilePic from './assets/profile.jpg'
import iraThumbnail from './assets/ira2.png';
import imbesideyou from './assets/imbesideyou2.png';
import oppia from './assets/oppia.png';
import angularMigration from './assets/angular_migration2.png'
import therawin from './assets/therawin2.png';
import chatterbox from './assets/chatterbox2.png';
import sec from './assets/sec2.png';
import llama from './assets/llama.png';

export const metadata = {
  title: "Ashutosh Chauhan",
  description: "Personal portfolio of Ashutosh Chauhan"
};

export const profile = {
  name: 'Ashutosh Chauhan',
  resume: 'https://drive.google.com/file/d/1UwEnsZnekN9LmpNwV-wdPU6LkfBuCWeU/preview',
  profile_picture: profilePic,
  socials: {
    github: 'https://github.com/ashutoshc8101',
    linkedin: 'https://www.linkedin.com/in/ashutosh-chauhan-3866aa69/',
    twitter: 'https://twitter.com/ashutoshc8101',
    instagram: 'https://www.instagram.com/ashutoshchauhan91',
    email: 'ashutoshc8101@gmail.com'
  }
};

export const experiences = [
  {
    title: 'I\'m besideyou Inc',
    designation: 'Software Engineer Intern',
    description: 'Developed the therapist and patient dashboards for the Therawin application.',
    // thumbnail: 'https://static.wixstatic.com/media/b0335f_b8826810859741b89cecd2f3f5fcf25c~mv2.png/v1/fill/w_338,h_247,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%20633682.png'
    thumbnail: imbesideyou,
    url: '/experience/imbesideyou'
  },
  {
    title: 'IRA, IIT Jammu',
    designation: 'Full Developer Intern',
    description: 'Developed core modules as hostel, mess, medical, gate pass and team using Flutter.',
    thumbnail: iraThumbnail,
    url: '/experience/ira'
  },
  {
    title: 'Oppia Foundation',
    designation: 'Google Summer of Code 2021 Student',
    description: 'Migrated core pages to Angular and introduced router to reduce loading time.',
    thumbnail: oppia,
    url: '/experience/gsoc'
  }
];

export const projects = [
    {
      title: 'Angular Migration @ Oppia',
      skills: ['Angular', 'Javascript'],
      description: 'Developed the therapist and patient dashboards for the Therawin application.',
      thumbnail: angularMigration,
      url: '/project/angular-migration'
    },
    {
      title: 'IRA App @ IIT Jammu',
      skills: ['Flutter', 'Django', 'AWS'],
      description: 'Developed the therapist and patient dashboards for the Therawin application.',
      thumbnail: 'https://static.wixstatic.com/media/b0335f_b8649dec8e19490dab93539b0793b665~mv2.jpg/v1/fill/w_518,h_389,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/cover%20imae.jpg',
      url: '/project/ira-app'
    },
    {
      title: 'Therawin @ I\'m beside you',
      skills: ['React', 'Python', 'AWS Lambda', 'AWS RDS'],
      description: 'Developed the therapist and patient dashboards for the Therawin application.',
      thumbnail: therawin,
      url: '/project/therawin'
    },
    {
      title: 'Flipkart Grid 5.0',
      skills: ['React', 'Django', 'LangChain'],
      description: 'Developed the therapist and patient dashboards for the Therawin application.',
      thumbnail: llama,
      url: '/project/flipkart-grid'
    },
    {
      title: 'SEC Filings Analyzer',
      skills: ['Angular', 'Django', 'PostgreSQL'],
      description: 'Developed the therapist and patient dashboards for the Therawin application.',
      thumbnail: sec,
      url: '/project/sec-filings-analyzer'
    },
    {
      title: 'ChatterBox',
      skills: ['React', 'Node.js', 'Socket.io'],
      description: 'Developed the therapist and patient dashboards for the Therawin application.',
      thumbnail: chatterbox,
      url: '/project/chatterbox'
    }
  ];

export const author = {
  name: 'Ashutosh Chauhan',
  year: '2024'
};