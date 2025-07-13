import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const navLinks = [
  {
    name: "Projects",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
  {
  imgPath: "/images/seo.png",
  title: "Creative Problem Solving",
  desc: "Finding smart, efficient solutions tailored to your unique challenges.",
},
{
  imgPath: "/images/seo.png",
  title: "Client-First Mindset",
  desc: "Understanding your goals and delivering solutions that truly align with your vision.",
},
{
  imgPath: "/images/code.png",
  title: "Technical Mastery",
  desc: "Bringing deep knowledge of modern tools and technologies to every project.",
},
];

const techStackImgs = [
  {
    name: "ReactJS Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "NodeJS Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Version Control",
    imgPath: "/images/logos/git.svg",
  },
   {
    name: "HTML",
    imgPath: "/images/logos/html.png",
  },
   {
    name: "CSS",
    imgPath: "/images/logos/css.png",
  },
   {
    name: "Tailwind CSS",
    imgPath: "/images/logos/tailwind-css.png",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },

  // {
  //   name: "HTML",
  //   modelPath: "/models/html-transformed.glb",
  //   scale: 1,
  //   rotation: [0, 0, 0],
  // },
 
];

const expCards = [
  {
    id: 1,
    review: "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/logo1.png",
    sidename: "ReactJS",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    // date: "January 2023 - Present",
    responsibilities: [
      "Built responsive and dynamic user interfaces using React.js and modern JavaScript (ES6+).",
      "Fetching API to frontend.",
      "Implemented performance optimizations including code-splitting and lazy loading.",
      "Utilized React Router for client-side routing and managed state using Redux or Context API.",
    ],
  },
  {
    id : 2,
    review: "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/logo2.png",
    sidename: "NodeJS",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Built full-stack features integrating MongoDB databases with frontend in React.",
      "Implemented authentication and authorization using JWT and OAuth.",
      "Led the development of Docker's web applications, focusing on scalability.",
    ],
  },
  {
    id : 3,
    review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/logo3.png",
    sidename: "Windows and Linux server",
    logoPath: "/images/logo3.png",
    title: "System Administrator",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Managed Linux and Windows servers, including configuration, updates, and patching for stability and security.",
      "Configured and maintained Apache and IIS web servers for hosting scalable web applications.",
      "Handled domain and DNS configuration, including setup of A, CNAME, MX, and TXT records.",
      "Performed security hardening, firewall configuration, and SSL/TLS certificate management using Cloudflare and native tools.",

    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    // imgPath: "/images/insta.png",
    icon: InstagramIcon ,
    pathlink:"https://www.instagram.com/pramodjangra_/"
  },
  {
    name: "mail",
    // imgPath: "/images/mail.png",
    icon: AlternateEmailIcon ,
    pathlink:"mailto:pramodjangra144@gmail.com"
  },
  // {
  //   name: "x",
  //   imgPath: "/images/x.png",
  //   pathlink:
  // },
  {
    name: "linkedin",
    // imgPath: "/images/linkedin.png",
    icon: LinkedInIcon,
    pathlink:"https://www.linkedin.com/in/pramod-jangra"
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
