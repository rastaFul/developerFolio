/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rodrigo Nascimento",
  title: "Olá, eu sou o Rodrigo",
  subTitle: emoji(
    "Gosto de inovação e atuar com estudos de novas tecnologias e metodologias é o que me motiva. Pratico a autoanálise como um caminho essencial para o desenvolvimento pessoal e profissional."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Qtt7BY-l0FKWmkmcQ1iI-0GTMz88qKjX/view?usp=share_link://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rastaful",
  linkedin: "https://www.linkedin.com/in/rastaful/",
  gmail: "rodrigob.dev@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "O que eu faço",
  subTitle: "DESENVOLVEDOR BACKEND QUE AMA EXPLORAR CADA STACK DE TECNOLOGIA",
  skills: [
    emoji(
      "⚡ Desenvolvedor Sênior | DevOps, Kubernetes, AWS"
    ),
    emoji("⚡ Apaixonado por compartilhar conhecimento, promovo boas práticas de DevOps e dissemino aprendizado."),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Windows",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "DevOps",
      fontAwesomeClassname: "fas fa-cloud"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  title: "Formação",
  schools: [
    {
      schoolName: "FATEC Zona Sul",
      logo: require("./assets/images/fatecLogo.png"),
      subHeader: "Análise e desenvolvimento de sistemas",
      duration: "2013 - 2018",
      desc: "",
      descBullets: [
        "Atividades e grupos: Grande foco em paradigmas de programação, estrutura e banco de dados, engenharia de softwarte, gestão de projetos e equipes e conceitos de empreendedorismo.",
        "Projeto de graduação desenvolvido com Ionic 3, servidor em PHP e banco de dados MySQL."
      ]
    },
    {
      schoolName: "ETEC JK",
      logo: require("./assets/images/etecLogo.jpg"),
      subHeader: "Técnico em computação",
      duration: "Junho 2011 - Junho 2012",
      desc: "",
      descBullets: [
        "Adquiri conhecimentos de lógica de programação, arquitetura de sistemas, documentação e banco de dados.",
        "O projeto foi desenvolvido com a linguagem de programação Visual Basic e banco de dados MySQL"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  title: "Proeficiência",
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "DevOps",
      progressPercentage: "40%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  title: "Experiências",
  experience: [
    {
      role: "Desenvolvedor de software sênior",
      company: "Pontaltech",
      companylogo: require("./assets/images/pontaltechLogo.webp"),
      date: "Junho 2022 – Present",
      desc: "Desenvolvedor Sênior | DevOps, Kubernetes, AWS",
      descBullets: [
        "Responsável por projetos de DevOps, integro desenvolvimento e operações para otimizar sistemas. Com foco em Kubernetes, AWS e melhores práticas de entrega.",
        "Proficiente em Bitbucket Pipelines, Kubernetes (Amazon EKS) e infraestrutura AWS. Utilizo Terraform, Prometheus + Grafana e Helm para garantir consistência e segurança em implantações.",
        "Crio documentação, conduzo code reviews e facilito comunicação entre equipes, embasando decisões técnicas."
      ]
    },
    {
      role: "Desenvolvedor de software",
      company: "Gorila",
      companylogo: require("./assets/images/gorilaLogo.webp"),
      date: "Março 2021 – Junho 2022",
      desc: "Na Gorila, mergulhei na linguagem de programação TypeScript, com foco especial na biblioteca NestJS.",
      descBullets: [
        "Atuei na equipe de plataforma, colaborando na criação de soluções de pagamento, incluindo integrações com gateways como Google Store, através de Lambda Functions."
      ]
    },
    {
      role: "Analista de sistema",
      company: "Conquest One",
      companylogo: require("./assets/images/conquestOneLogo.jpeg"),
      date: "Julho 2020 – Março 2021",
      desc: "Desenvolvedor NodeJS | PHP | AWS",
      descBullets: [
        "Desenvolvi e aprimorei o produto CarClick na Disal Tecnologia, com foco em manutenção do sistema e criação de novas funcionalidades. Também gerenciei infraestrutura, otimizando custos e confiabilidade dos produtos",
        "Fui a ponte entre desenvolvimento e negócios, contribuindo ativamente."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contato ☎️"),
  subtitle:
    "Discutir um projeto ou apenas dar um 'oi'? Meus contatos estão aberto para todos.",
  number: "+55 11982294023",
  email_address: "rodrigob.dev@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
