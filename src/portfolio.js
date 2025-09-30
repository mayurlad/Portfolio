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
  username: "Mayur Lad",
  title: "Hi all, I'm Mayur Lad",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 with hands-on experience in building scalable Web applications using MERN stack, developing RESTful APIs, integrating real-time features with Socket.io, and exploring Machine Learning solutions."
  ),

  resumeLink:
    "https://drive.google.com/file/d/19P0MNrC8UCUqJWJpMUHHnQcs1IRHbdS-/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mayurlad/",
  linkedin: "https://www.linkedin.com/in/mayur-lad-813303211/",
  gmail: "mayursanjaylad@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL-STACK DEVELOPER SPECIALIZING IN MERN & AI/ML INTEGRATIONS",
  skills: [
    emoji(
      "⚡ Build scalable and responsive full-stack web applications using MERN stack (MongoDB, Express, React, Node.js)"
    ),
    emoji(
      "⚡ Design and implement RESTful APIs with secure authentication and efficient database operations"
    ),
    emoji(
      "⚡ Develop real-time applications with Socket.io and chatbot integrations"
    ),
    emoji(
      "⚡ Apply Machine Learning algorithms for predictive analytics, classification, and NLP tasks"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Express.js",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Socket.io",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Google Cloud",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "Heroku",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "Netlify",
      fontAwesomeClassname: "fas fa-globe"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "RMD Sinhgad Technical Institute Campus, Pune",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "B.E. Computer Engineering",
      duration: "September 2021 - june 2025",
      desc: "CGPA : 7.16",

    },
    {
      schoolName: "MES Bal Shikshan Mandir Higher Secondary School",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Computer Science",
      duration: "September 2019 - April 2021",
      desc: "Percentage : 80.83 %",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend (React, HTML, CSS, JavaScript)",
      progressPercentage: "85%"
    },
    {
      Stack: "Backend (Node.js, Express.js, REST APIs)",
      progressPercentage: "80%"
    },
    {
      Stack: "Databases (MongoDB, MySQL, PostgreSQL)",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming (Python, C++, Java)",
      progressPercentage: "70%"
    },
    {
      Stack: "Machine Learning (Scikit-learn, Pandas, NumPy)",
      progressPercentage: "65%"
    },
    {
      Stack: "Cloud & Deployment (Render, Heroku, Netlify, GCP)",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section, change username in skillProgress.js if enabled
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "MERN Stack Intern",
      company: "EY GDS",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Dec 2024 – Jan 2025 (6 week)",
      desc: "Worked on full-stack development using MERN stack and assisted in deployment/testing.",
      descBullets: [
        "Developed full-stack features with React, Node.js, Express, and MongoDB",
        "Built and integrated REST APIs for scalable performance",
        "Implemented secure authentication and database operations"
      ]
    },
    {
      role: "MERN Stack Intern",
      company: "Infosys Springboard",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "Mar 2024 – Jun 2024 (4 months)",
      desc: "Built a stock market simulation platform using MERN stack as part of internship.",
      descBullets: [
        "Implemented authentication, session persistence, and backend APIs",
        "Developed user portfolios and real-time trading simulation",
        "Deployed the app and presented the final deliverable"
      ]
    },
    {
      role: "Machine Learning Intern",
      company: "SureTrust",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Mar 2025 – Sep 2025 (6 months)",
      desc: "Worked on ML projects involving supervised and unsupervised algorithms.",
      descBullets: [
        "Built projects like House Price Prediction and Fake News Detection",
        "Performed data preprocessing and feature engineering",
        "Evaluated models with metrics like accuracy, precision, recall, and F1-score"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects */
const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Major Projects",
  subtitle: "FULL-STACK & ML PROJECTS I HAVE BUILT AND DEPLOYED",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.png"),
      projectName: "Virtual Stock Market Simulation",
      projectDesc:
        "A full-featured stock trading simulation web app with authentication, real-time stock updates, and persistent portfolios built using MERN stack.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/mayurlad/virtual-stock-market" // replace with actual repo
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.png"),
      projectName: "Fake News Classifier",
      projectDesc:
        "A machine learning model using NLP techniques to classify news articles as real or fake with high accuracy.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/mayurlad/fake-news-classifier" // replace with actual repo
        }
      ]
    },
    {
      image: require("./assets/images/realtimechat.png"),
      projectName: "Real Time Chat Application",
      projectDesc:
        "built a real-time chat application using React, Node.js, and Socket.io, integrating SuprSend for live notifications. The app supports private and public chat rooms, typing indicators",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/mayurlad/Real-Time-Chat-Application" // replace with actual repo
        }
      ]
    },
    {
      image: require("./assets/images/movies.png"),
      projectName: "Movies App",
      projectDesc:
        "built a movie website using the MERN stack, where users can browse, search, and view movie details with a seamless and responsive interface powered by dynamic data handling.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/mayurlad/movies-app" // replace with actual repo
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle: "Certifications that I have done!",

  achievementsCards: [
    {
      title: "Generative AI Professional",
      subtitle: "Completed certification from Oracle in Generative AI.",
      image: require("./assets/images/codeInLogo.png"),
      imageAlt: "Oracle Generative AI Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1o0Gndo2JDVqPboLLOwNM_ZRyeyv8q0do/view?usp=sharing"
        }
      ]
    },
    {
      title: "Young Java Professional",
      subtitle: "Completed certification from Infosys Springboard for Java.",
      image: require("./assets/images/springboard-logo.png"),
      imageAlt: "Infosys Java Certification Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1AFzyg2rYaqIEYRstLgnB-wYqQoM5PGG7/view?usp=sharing"
        }
      ]
    },
    {
      title: "SQL (Intermediate)",
      subtitle: "Completed SQL certification from HackerRank.",
      image: require("./assets/images/hackerrank.png"),
      imageAlt: "HackerRank SQL Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1oP0_tzHJX2tzNTrKQRGv21GFV7oPmzGI/view?usp=sharing"
        }
      ]
    },
    {
      title: "Python (Basic)",
      subtitle: "Completed Python (Basic) certification from HackerRank.",
      image: require("./assets/images/hackerrank.png"),
      imageAlt: "HackerRank Python (Basic) Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1HKWM5n46769NMkHTwTKFTtDbK79v-gMp/view?usp=sharing"
        }
      ]
    },
    {
      title: "Responsive Web Design",
      subtitle:
        "Completed certification from freeCodeCamp in Responsive Web Design.",
      image: require("./assets/images/fcc.png"),
      imageAlt: "freeCodeCamp Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1CcTHBje_pejPlRW6oiTlx_egw8edz6EG/view?usp=sharing"
        }
      ]
    },
    {
      title: "Applied Data Science Lab",
      subtitle:
        "Completed certification from World Quant University in Applied Data Science Lab.",
      image: require("./assets/images/wqu.png"),
      imageAlt: "wqu Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1qptbdvVfs1MCzTwLY47bZesRfkG0JeU0/view?usp=sharing"
        }
      ]
    },
    {
      title: "Data Visualization with Python",
      subtitle:
        "Completed certification from Cognitive Class in Data Visualization with Python.",
      image: require("./assets/images/cc.png"),
      imageAlt: "wqu Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1PjZZ_8OtflRrgwKOT3Ywf7v-NNbwPQ1i/view?usp=sharing"
        }
      ]
    },
    {
      title: "Statistics 101",
      subtitle:
        "Completed certification from Cognitive Class in Statistics 101",
      image: require("./assets/images/cc.png"),
      imageAlt: "wqu Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1yyneshIoUjkoFDjOq6tnm0DZXN7Bw7jk/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
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

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8262816029",
  email_address: "mayursanjaylad@gmail.com",
  whatsapp: "https://wa.me/918262816029?text=Hi%20Mayur" // ← Added WhatsApp link
};


// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable,
  resumeSection
};
