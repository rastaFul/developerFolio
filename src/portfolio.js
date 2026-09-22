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
  username: "Rodrigo",
  title: "Olá, eu sou o Rodrigo",
  subTitle: emoji(
    "Engenheiro de software com perfil híbrido entre backend e infraestrutura — hoje à frente de DevOps/Platform Engineering, depois de anos migrando produtos para Kubernetes e construindo observabilidade de verdade. Gosto de inovação, automatizo o que dá pra automatizar e pratico autoanálise como parte do meu desenvolvimento profissional."
  ),
  resumeLink: "https://rastaful.dev/curriculo-rodrigo-barbosa.pdf", // Set to empty to hide the button
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
  subTitle: "ENGENHEIRO DE SOFTWARE COM FOCO EM PLATFORM ENGINEERING E DEVOPS",
  skills: [
    emoji(
      "⚡ Platform Engineer / DevOps Sênior | Kubernetes, Terraform, AWS, GitOps, Observabilidade"
    ),
    emoji(
      "⚡ Perfil híbrido: atuo tanto no código do produto (Node.js/TypeScript) quanto na infraestrutura"
    ),
    emoji(
      "⚡ Construo ferramentas próprias de automação de infraestrutura assistida por IA"
    )
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
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "fas fa-cubes"
    },
    {
      skillName: "GitOps",
      fontAwesomeClassname: "fas fa-code-branch"
    },
    {
      skillName: "Observabilidade",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    }
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
        "Atividades e grupos: Grande foco em paradigmas de programação, estrutura e banco de dados, engenharia de software, gestão de projetos e equipes e conceitos de empreendedorismo.",
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
      progressPercentage: "75%"
    },
    {
      Stack: "Automação & IA",
      progressPercentage: "60%"
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
      role: "Desenvolvedor Backend Sênior → DevOps / Platform Engineer",
      company: "Pontaltech",
      companylogo: require("./assets/images/pontaltechLogo.webp"),
      date: "Junho 2022 – Presente",
      desc: "Platform Engineer | Kubernetes, Terraform, AWS, Observabilidade, FinOps",
      descBullets: [
        "Iniciei como desenvolvedor backend (Node.js/TypeScript) na squad core de um produto de disparo de SMS (~15M msgs/dia). Ao longo de ~2 anos venho assumindo responsabilidades crescentes de infraestrutura, migrando oficialmente para o time de DevOps/Platform Engineering e assumindo sozinho essa frente desde abril de 2026.",
        "Modernização de plataforma: padronizei e executei migrações de EC2 para Kubernetes (EKS), com Helm, GitOps via ArgoCD e autoscaling (HPA/KEDA) — de deploy manual via SSH para deploy contínuo com auto-healing, em ambiente com múltiplas contas AWS, dezenas de microsserviços e centenas de pods em produção.",
        "Observabilidade: reestruturei stack de métricas e alertas (VictoriaMetrics, Grafana, Alertmanager), reduzindo o tempo de detecção de incidentes de horas/dias para minutos, com 15+ dashboards operacionais.",
        "FinOps: implementei visibilidade de custos por namespace/pod (Kubecost), dando suporte a decisões de right-sizing.",
        "Segurança: liderei enforcement de TLS 1.2+ em produção e eliminação de credenciais hardcoded via IRSA."
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
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projetos",
  subtitle: "Produtos que coloquei no ar, do zero ao deploy",
  projects: [
    {
      image: require("./assets/images/projects/vetcare.png"),
      projectName: "VetCare",
      projectDesc:
        "Sistema de gestão para clínicas veterinárias — prontuário eletrônico, agendamento, prescrições e cuidados preventivos, com integração à Google Calendar.",
      footerLink: [
        {
          name: "Visitar site",
          url: "https://vetcare.rastaful.dev"
        }
      ]
    },
    {
      image: require("./assets/images/projects/artists-booking.png"),
      projectName: "Artists Booking",
      projectDesc:
        "Marketplace para contratação de artistas, com busca geolocalizada e fluxo de reserva guiado.",
      footerLink: [
        {
          name: "Visitar site",
          url: "https://artists.rastaful.dev"
        }
      ]
    },
    {
      image: require("./assets/images/projects/rastafinancas.png"),
      projectName: "RastaFinanças",
      projectDesc:
        "App pessoal de controle financeiro, com importação de extrato bancário, alertas e notificações automatizadas.",
      footerLink: [
        {
          name: "Visitar site",
          url: "https://financas.rastaful.dev"
        },
        {
          name: "Ver código",
          url: "https://github.com/rastaFul/rasfaful-finances"
        }
      ]
    },
    {
      image: require("./assets/images/projects/microgrow.png"),
      projectName: "MicroGrow",
      projectDesc:
        "Sistema de monitoramento e automação de cultivo indoor — sensores simulados, MQTT, InfluxDB e dashboards em tempo real.",
      footerLink: [
        {
          name: "Visitar site",
          url: "https://grow.rastaful.dev"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
        {name: "Certification", url: ""},
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
    "Discutir um projeto ou apenas dar um 'oi'? Meus contatos estão abertos para todos.",
  number: "+55 11939393283",
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
