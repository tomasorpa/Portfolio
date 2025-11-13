export const everyProjectItems = [
  {
    imgSrc: "/images/expensetracker.png",
    title: "Expense Tracker",
    tags: ["MongoDb", "Express", "React", "Node.js"],
    idSlug:"expense-tracker",
    description:
      "Developed a full-featured Expense Tracker application with an intuitive user interface and robust backend integration. Implemented real-time expense management, user authentication, and reliable data persistence.",
    projectLink: "https://expense-tracker-backend-kohl-ten.vercel.app/login",
  },
  {
    imgSrc: "/images/journalmock.png",
    title: "Journal App",
    tags: ["React", "Material UI", "Firebase", "JavaScript"],
    idSlug:"journal-app",
    description:
      "Implemented a comprehensive CRUD functionality within a Journal app. Integrated Firebase for real-time data management and Cloudinary for media handling, ensuring a seamless experience. ",
    projectLink: "https://journalapp-tomasorpa.vercel.app/",
  },
  {
    imgSrc: "/images/calendarmock.png",
    title: "Calendar App",
    tags: ["MongoDb", "Express", "React", "Node.js"],
    idSlug:"calendar-app",
    description:
      "A MERN stack calendar app designed to help teams coordinate events. It provides users with efficient event management through real-time updates. Ideal for small businesses.",
    projectLink: "https://04-calendar-backend.vercel.app/",
  },
  {
    imgSrc: "/images/quickblogmock.png",
    title: "Quick Blog",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    idSlug:"quick-blog",
    description:
      "Modern blogging app where admins can log in, create and publish posts, and generate content using AI, offering a streamlined platform for fast, smart, and user-friendly blogging. ",
    projectLink: "https://quick-blog-frontend-xi.vercel.app/",
  },
  {
    imgSrc: "/images/translatormock.png",
    title: "Google Translator Clone",
    tags: ["React", "TypeScript", "Node.js", "Express"],
    idSlug:"google-translator",
    description:
      "A Google Translator clone using an AI-powered API that detects any language and translates it to Spanish, English, or French. This project enhanced my ability to work with AI APIs, providing me with valuable insights into modern technological advancements. ",
    projectLink: "https://03-translator-backend.vercel.app/",
  },
  {
    imgSrc: "/images/petwebsitemock.png",
    title: "Pet Adoption Center",
    tags: ["JavaScript", "Node.js", "Netlify", "Mongo.Db"],
    idSlug:"pet-adoption",
    description:
      "A dynamic pet adoption website built to reinforce core web development principles using vanilla JavaScript. This project helped solidify my understanding of DOM manipulation and asynchronous operations without relying on frameworks. ",
    projectLink: "https://tomasorpa-petadoption.netlify.app/",
  },
];

export const filteredProjectItems = (limit, page) => {
   if (isNaN(limit)) {
     limit = 6;
   }
   if (isNaN(page)) {
     page = 1;
   }
  const id = +page * +limit;
  const filteredItems = everyProjectItems.slice((+page - 1) * +limit, id);
  const projectItems =
    filteredItems.length === 0 ? everyProjectItems.slice(0, 2) : filteredItems;
  return {
    projectItems,
    totalProjectItems: projectItems.length,
    totalPages: projectItems / limit,
  };
};
