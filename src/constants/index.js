import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  naxy,
  knbs,
  ksco,
  naxy1,
  naxy2,
  doba1,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Graphic Designer",
    icon: mobile,
  },
  {
    title: "Product Desinger",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Naxy Brands",
    icon: naxy,
    iconBg: "#E6DEDD",
    date: "May 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "System Administrator",
    company_name: "Kenya seed company",
    icon: ksco,
    iconBg: "#E6DEDD",
    date: "May 2021 - May 2022",
    points: [
      "Ensuring that all hardware, software, and system requirements are met.",
      "Updating and maintaining the company website and softwares.",
      "Administering the 2019 national census.",
      "Reporting to the Head of IT department.",
    ],
  },
  {
    title: "Tech support",
    company_name: "Kenya National Bureau of Statistics",
    icon: knbs,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - Sep 2019",
    points: [
      "Ensuring that all hardware, software, and system requirements are met.",
      "Updating and maintaining the company website and softwares.",
      "Administering the 2019 national census.",
      "Reporting to the Head of IT department.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Suter proved me wrong.",
    name: "Dennis Muthomi",
    designation: "CEO",
    company: "Naxy brands",
    image: "",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Suter does.",
    name: "Joshua Nyabok",
    designation: "Producer",
    company: "Fortune Records",
    image: "",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Clinton Kibui",
    designation: "Marketing manager",
    company: "Naxy brands",
    image: "",
  },
];

const projects = [
  {
    name: "Naxy Ecomm ",
    description:
      "Web-based platform that allows users to view,search , and purchase produsts from the Naxy brands like Tshirts,Csaps and other products. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: naxy2,
    source_code_link:
      "https://github.com/Hsuter/EcommerceSIte-reactJs-and-nodeJs-",
    website_link: "https://naxybrands.vercel.app/",
  },
  {
    name: "Doba",
    description:
      "This is a website that allows users to stream music and videos from the internet from all over the globe powered by shazam API. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: doba1,
    source_code_link: "https://github.com/Hsuter/doba",
    website_link: "https://doba.vercel.app/",
  },
  {
    name: "Naxy 1.0",
    description:
      "Web-based platform that allows users to view,search , and purchase produsts from the Naxy brands like Tshirts,Csaps and other products.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: naxy1,
    source_code_link:
      "https://github.com/Hsuter/naxybrands_ecommerce_sanity_stripe",
  },
];

export { services, technologies, experiences, testimonials, projects };
