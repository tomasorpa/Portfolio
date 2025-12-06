export const everyProjectItems = [
  {
    imgSrc: "/images/expensetracker.png",
    title: "Expense Tracker",
    tags: ["MongoDb", "Express", "React", "Node.js"],
    idSlug: "expense-tracker",
    description:
      "Developed a full-featured Expense Tracker application with an intuitive user interface and robust backend integration. Implemented real-time expense management, user authentication, and reliable data persistence.",
    githubLink: "https://github.com/tomasorpa/expense-tracker-backend",
    projectLink: "https://expense-tracker-backend-kohl-ten.vercel.app/login",
    timeline: "July 2025 – Aug 2025",
    status: "Completed",
    category: "Full-Stack Web Application (MERN)",
    role: "Full-Stack Developer",
    keyFeatures: [
      "Secure user authentication with persistent sessions",
      "Real-time expense tracking with dynamic data updates",
      "Data storage and filtering for financial history management",
    ],
    technicalChallenges:
      "The main challenge was implementing secure authentication and ensuring that user data remained persistent and isolated across sessions. Additionally, handling real-time data operations while maintaining a smooth user experience required efficient API design and clean state management.",
  },
  {
    imgSrc: "/images/journalmock.png",
    title: "Journal App",
    tags: ["React", "Material UI", "Firebase", "JavaScript"],
    idSlug: "journal-app",
    description:
      "Implemented a comprehensive CRUD functionality within a Journal app. Integrated Firebase for real-time data management and Cloudinary for media handling, ensuring a seamless experience. ",
    githubLink: "https://github.com/tomasorpa/JournalApp.git",
    projectLink: "https://journalapp-tomasorpa.vercel.app/",
    timeline: "Sep 2024 – Oct 2024",
    status: "Completed",
    category: "Frontend Web Application",
    role: "Frontend Developer",
    keyFeatures: [
      "Full CRUD functionality for personal journal entries",
      "Real-time data syncing using Firebase services",
      "Media upload support for enhanced entry content",
    ],
    technicalChallenges:
      "The main challenge was integrating real-time data synchronization while maintaining a responsive and intuitive UI. Managing authentication flows and handling media uploads required careful coordination between the frontend and external services to ensure a seamless user experience.",
  },
  {
    imgSrc: "/images/calendarmock.png",
    title: "Calendar App",
    tags: ["MongoDb", "Express", "React", "Node.js"],
    idSlug: "calendar-app",
    description:
      "A MERN stack calendar app designed to help teams coordinate events. It provides users with efficient event management through real-time updates. Ideal for small businesses.",
    githubLink: "https://github.com/tomasorpa/calendar-app-backend.git",
    projectLink: "https://04-calendar-backend.vercel.app/",
    timeline: "Nov 2024 – Dec 2024",
    status: "Completed",
    category: "Full-Stack Web Application (MERN)",
    role: "Full-Stack Developer",
    keyFeatures: [
      "Event creation, editing, and deletion with real-time updates",
      "Multi-user support with secure authentication",
      "Interactive calendar UI for organized event management",
    ],
    technicalChallenges:
      "The biggest challenge was designing a backend capable of handling multi-user event data while keeping it isolated and secure. Implementing authentication and ensuring that event updates were accurately reflected on the client required careful API structuring and state management.",
  },
  {
    imgSrc: "/images/quickblogmock.png",
    title: "Quick Blog",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    idSlug: "quick-blog",
    description:
      "Modern blogging app where admins can log in, create and publish posts, and generate content using AI, offering a streamlined platform for fast, smart, and user-friendly blogging. ",
    githubLink: "https://github.com/tomasorpa/quick-blog.git",
    projectLink: "https://quick-blog-frontend-xi.vercel.app/",
    timeline: "Aug 2025 – Sep 2025",
    status: "Completed",
    category: "Full-Stack Blogging Platform (MERN + AI)",
    role: "Full-Stack Developer",
    keyFeatures: [
      "Admin dashboard for creating, editing, and publishing posts",
      "AI-powered content generation to assist with writing",
      "Secure login system with role-based access",
    ],
    technicalChallenges:
      "The main challenge was integrating AI-generated content into the workflow while keeping the platform responsive and secure. Managing authenticated admin actions, handling rich text content, and ensuring smooth communication between frontend and backend required careful architectural planning.",
  },
  {
    imgSrc: "/images/translatormock.png",
    title: "Google Translator Clone",
    tags: ["React", "TypeScript", "Node.js", "Express"],
    idSlug: "google-translator",
    description:
      "A Google Translator clone using an AI-powered API that detects any language and translates it to Spanish, English, or French. This project enhanced my ability to work with AI APIs, providing me with valuable insights into modern technological advancements. ",
    githubLink: "https://github.com/tomasorpa/Translator-clone.git",
    projectLink: "https://03-translator-backend.vercel.app/",
    timeline: "Dec 2024 - Jan 2025",
    status: "Completed",
    category: "AI-Powered Web Application",
    role: "Full-Stack Developer",
    keyFeatures: [
      "Automatic language detection for user input",
      "AI-powered translation to English, Spanish, and French",
      "Clean and fast UI focused on real-time responses",
    ],
    technicalChallenges:
      "The main challenge was integrating an AI translation API capable of detecting multiple languages and returning accurate results with low latency. Ensuring smooth communication between the backend and the client while handling asynchronous requests required efficient API routing and error handling.",
  },
  {
    imgSrc: "/images/petwebsitemock.png",
    title: "Pet Adoption Center",
    tags: ["JavaScript", "Node.js", "Netlify", "Mongo.Db"],
    idSlug: "pet-adoption",
    description:
      "A dynamic pet adoption website built to reinforce core web development principles using vanilla JavaScript. This project helped solidify my understanding of DOM manipulation and asynchronous operations without relying on frameworks. ",
    githubLink: "https://github.com/tomasorpa/pet-adoption.git",
    projectLink: "https://tomasorpa-petadoption.netlify.app/",
    timeline: "May 2025 - June 2025",
    status: "Completed",
    category: "Frontend Web Application",
    role: "Frontend Developer",
    keyFeatures: [
      "Dynamic pet listings with detailed information for each animal",
      "Search and filtering system to improve user navigation",
      "Adoption inquiry flow to simulate real user engagement",
    ],
    technicalChallenges:
      "The main challenge was building a fully interactive experience using only vanilla JavaScript, without relying on frameworks. Implementing DOM manipulation, asynchronous data handling, and dynamic rendering manually required a strong understanding of core web fundamentals.",
  },
];

export const filteredProjectItems = (limit, page) => {
  if (isNaN(limit)) {
    limit = 4;
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
