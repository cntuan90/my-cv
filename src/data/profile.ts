import moment from 'moment';

const profile = {
  name: 'Cao Ngoc Tuan',
  career: 'Software Engineer (2 years experience)',

  // avatar: '/cntuan.jpg',

  about: `My career path is to become an exellent Fullstack Developer, who can create high quality, secure and friendly products which can satify the expectation of customers.

I look forward to working with a professional team, where i can enjoy learning and sharing to help each other growth, practicing my skills so I can adapt well to the needs and flexible changes of the market.

It would be great if I had the opportunity to work in an environment where English is the key point because I want to focus training my ability to communicate and work in English.`,

  personals: [
    {
      image: 'today',
      content: moment('1990/12/18').format('LL'),
    },
    {
      image: 'face',
      content: 'Male',
    },
    {
      image: 'location_on',
      content: 'District 12, HCMC',
    },
    {
      image: 'school',
      content: 'UniverSity of Science - VNUHCM',
      subContent: 'Information Technology (2.5y)',
    },
  ],

  contacts: [
    {
      image: 'phone_iphone',
      content: '0989275753',
      type: 'text',
    },
    {
      image: 'email',
      content: 'cntuan90@gmail.com',
      type: 'text',
    },
    {
      image: 'message',
      content: 'live:cntuan90',
      type: 'text',
    },
    {
      image: 'facebook',
      content: 'www.facebook.com/cntuan90',
      type: 'url',
    },
    {
      image: 'work',
      content: 'https://www.linkedin.com/in/tuan-ngoc-68b586a4/',
      type: 'url',
    },
    {
      image: 'integration_instructions',
      content: 'www.github.com/cntuan90',
      type: 'url',
    },
  ],

  skills: [
    {
      category: 'Languages',
      image: 'g_translate',
      list: ['English (TOEIC 695)', 'Japanese (JLPT N2)'],
    },
    {
      category: 'Programming Languages',
      image: 'code',
      list: ['Javascript (Typescript)'],
    },
    {
      category: 'Back-end',
      image: 'storage',
      list: ['Node.js, Express.js', 'MySQL, MongoDB'],
    },
    {
      category: 'Front-end',
      image: 'devices_other',
      list: ['HTML5, CSS3, Bootstrap 4', 'React.js, React-native, redux', 'Material-UI, React-hook-form'],
    },
    // {
    //   category: 'Automation test',
    //   image: 'build_circle',
    //   list: ['Mocha, Chai', 'Jest, Enzyme', 'Puppeteer'],
    // },
    {
      category: 'AWS Cloud (researching)',
      image: 'cloud',
      list: ['EC2, ASG, VPC', 'S3, Cloudfront'],
    },
    {
      category: 'Other',
      image: 'settings',
      list: [
        'Docker',
        'Git, Git flow',
        'RESTful API',
        'Github/Gitlab CI/CD',
      ],
    },
  ],

  certificates: [
    // {
    //   name: 'AWS Certified Solutions Architect – Associate',
    //   link: 'https://www.credly.com/badges/b36874f3-2255-43c7-830e-33f6a7859c72?source=linked_in_profile',
    // },
    // {
    //   name: 'Whizlabs certificates',
    //   isPopup: true,
    //   images: [
    //     { name: 'Docker Certified', path: '/certificates/docker.jpg' },
    //     { name: 'Github Training', path: '/certificates/github.jpg' },
    //     { name: 'Apache Kafka', path: '/certificates/kafka.jpg' },
    //   ],
    // },
  ],

  experiences: [
    {
      period: 'Apr 2022 - Now',
      title: 'Sharering Vietnam',
      position: 'Frontend Developer',
      descriptions: [
        'Providing IT solutions to adapt customer needs by utilising blockchain technology',
        'Working as Frontend developer on web and mobile',
        'Communicating in English with international teams',
      ],
      projects: [
        {
          name: 'Sharering Application (Mobile & Web)',
          position: 'Frontend Developer',
          descriptions: [
            'An app that customer can use to access events, booking hotel, eKYC, share NFT',
            'Technologies : Reactjs, Typescript, Microservices, Big deeper for explorer v...v...',
            'Resource : more than 20 members',
          ],
        },
      ],
    },
    {
      period: 'Apr 2021 - Apr 2022',
      title: 'MOR SOFTWARE VIETNAM',
      position: 'Frontend Developer',
      descriptions: [
        'Providing IT solutions for Spa system, Hospital system in Japan',
        'Handling UI and UX, web app',
        'communicating in Japan with co-workers and clients',
      ],
      projects: [
        {
          name: 'Spa Management System',
          position: 'Frontend Developer',
          descriptions: [
            'Employee management, spa course booking, calendar arrangement, admin panel management',
            'Web Application',
            'Technologies : Reactjs, typescript, redux, material-ui...',
            'Resource : 10 members',
            'Period : 9 months',
          ],
        },
        {
          name: "Shift Management at Hospital",
          position: 'Team Leader',
          descriptions: [
            "Create application for doctor to register shift online, easy to follow the shift",
            'Web Application',
            'Technologies : React.js, typescript, redux, material-ui, ...',
            'Resource : 4 members',
            'Period : 3 months',
          ],
        },
      ],
    },
    // {
    //   period: 'Sep 2018 - Jan 2020',
    //   title: 'CAPGEMINI VIETNAM',
    //   position: 'Software Engineer',
    //   descriptions: [
    //     'Providing IT solutions for AXA Insurance corporation in France',
    //     'Working with backend systems based on COBOL language',
    //     'Communicating in French with co-workers and clients',
    //   ],
    //   projects: [
    //     {
    //       name: 'AXAPAC',
    //       position: 'Developer',
    //       descriptions: [
    //         "Customer data processing, Contract's fee calculation",
    //         'Technologies : Cobol, IMS mainframe',
    //         'Resource : more than 50 members',
    //       ],
    //     },
    //   ],
    // },
    // {
    //   period: 'Jun 2017 – Sep 2017',
    //   title: 'REETECH INDUSTRY SUMMER INTERSHIP',
    //   position: 'Mechanical/Electrical Engineer',
    //   descriptions: [
    //     'Learned how to build and fix switchboards',
    //     'Learned how to use some automatic machines like QUADA AE2510 NT',
    //     'Learned some knowledge of some type of air-conditioner products',
    //   ],
    // },
  ],

  projects: [
    // {
    //   period: 'Mar 2021 - Jul 2021',
    //   title: 'COLEAD network',
    //   type: 'Freelance project',
    //   descriptions: [
    //     'A social platform aims to connect people in business & startup fields',
    //     'Using React Native for Mobile platform',
    //     'Using Express.js (Typescript) for server',
    //     'Using PostgesSQL server for database',
    //     'Deploy in AWS cloud server',
    //   ],
    // },
    {
      period: 'Oct 2020 - May 2021',
      title: 'To-Do-List, Dressing Room, User Management',
      type: 'Personal project',
      descriptions: [
        'Adding task to list, apply CRUD to control data',
        'Using vanilla javascript and boottrap',
      ],
    },
    // {
    //   period: 'Jun 2020 - Feb 2021',
    //   title: 'SMARTVIETSOLUTION',
    //   type: 'Freelance project',
    //   descriptions: [
    //     'An e-commercial web app which provides website templates for customers with many kinds of business aspect such as food, clothes, electronic and enterprises.',
    //     'Based on PHP language with Laravel MVC framework',
    //     'Using Bootstrap to build Web platform',
    //     'Using MySQL for database',
    //   ],
    // },
    {
      period: 'Jun 2021 – Present',
      title: 'Live Chat App, Music-Player, My-Cv',
      type: 'Personal project',
      descriptions: [
        'Application features: real chat app, listen music, add music, CV online',
        'Using React.js (Typescript) for Web platform',
        'Using Nodejs, Express.js (Typescript) for server',
        'Using MySQL, firebase server for database',
      ],
    },
    // {
    //   period: 'Sep 2017 – Jun 2018',
    //   title: 'BUILD A GAS LEAKED MONITORING SYSTEM BASED ON WIRELESS NETWORKS',
    //   type: 'Graduation project',
    //   descriptions: [
    //     'Using Arduino for processor and Lora network',
    //     'Studying C/C++ language as well as HTML, CSS, Javascript for Web platform',
    //     'Learning the knowledge of wireless sensor networks',
    //   ],
    // },
  ],
};

export type ProfileType = typeof profile;
export type PersonalType = typeof profile.personals[0];
export type ContactType = typeof profile.contacts[0];
export type SkillType = typeof profile.skills[0];
export type ProjectType = typeof profile.projects[0];
export type CertificateImage = { name: string; path: string };

export default profile;
