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
  username: "DevByHimani",
  title: "Hi all, I'm Himani",
  subTitle: emoji(
    "A creative developer who loves building sleek web apps 🛠️, solving problems with code, and constantly learning new tech like AI & ML 🤖."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1OYoUUiEBAgv5BU6FTP6BFxuKqK1QF8e-/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Himanizambare",
  linkedin: "https://www.linkedin.com/in/himani-zambare-723b05241/",
  gmail: "himani.zambare@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER | CLOUD & AI ENTHUSIAST EXPLORING THE TECH UNIVERSE",
  skills: [
    emoji("⚡ Develop responsive and dynamic websites using HTML, CSS, JavaScript, and Bootstrap"),
    emoji("⚡ Build and maintain frontend applications using React.js"),
    emoji("⚡ Design RESTful APIs and backend systems with Node.js and Express"),
    emoji("⚡ Integrate cloud services such as Firebase and Google Cloud"),
    emoji("⚡ Train and experiment with machine learning models using Python and Jupyter Notebook"),
    emoji("⚡ Use Git and GitHub for version control and project collaboration")
  ],



  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Google Cloud",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Jupyter Notebook",
      fontAwesomeClassname: "fas fa-book"
    },
    {
      skillName: "Machine Learning", fontAwesomeClassname: "fas fa-robot"

    }, // representing ML
    {
      skillName: "Data Analysis", fontAwesomeClassname: "fas fa-chart-line"

    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Vellore Institute of Technology, Bhopal",
      logo: require("./assets/images/vitbhopal.png"), // Make sure this image exists in your project
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "September 2022 – May 2026",
      desc: "Currently pursuing B.Tech in Computer Science with a CGPA of 8.9.",
      descBullets: [
        "Presented a research paper titled 'Designing A VPN Using Open Network Infrastructure With Enhanced Security And Performance' at the International Conference on Engineering & Technology (ICET-24), Chandigarh.",
        "The paper proposed a VPN design with enhanced encryption, multi-factor authentication, and IDS/IPS using WireGuard, HMAC, IPv4/IPv6, and UDP protocols.",
        "Actively involved in AI/ML workshops and cloud-based project work under IBM and Google-led programs.",
        "Completed certified training in DevOps, Blockchain, Machine Learning, and Geodata Processing using Python."
      ]
    }


  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Student Intern",
      company: "Madhya Pradesh Police",
      companylogo: require("./assets/images/mppolice_logo.jpeg"), // Add this logo to your images folder
      date: "October 2024 – Present",
      desc: "Ongoing Internship under the Student Internship Program (SIP) with MP Police.",
      descBullets: [
        "Visited Dial 100 and multiple police stations to observe real-time field operations.",
        "Conducted data analysis on survey datasets to support community-focused improvements.",
        "Suggested usability and design improvements for the MP Police website.",
        "Developed skills in cybercrime awareness, case management, and communication handling."
      ]
    },

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/NoteForge.png"), // Make sure this image exists in the assets folder
      projectName: "NoteForge.ai",
      projectDesc: "NoteForge.ai is an AI-powered note-taking app that helps users capture, organize, and enhance their thoughts with smart suggestions. Built using Next.js, Clerk, Convex, and Google AI, it offers a seamless and secure productivity experience.",
      footerLink: [
        {
          name: "View Project on GitHub",
          url: "https://github.com/Himanizambare/NoteForge.ai-main"
        }
      ]
    },
    {
      image: require("./assets/images/number-plate-recognition.png"), // Add this image to src/assets/images/
      projectName: "Number Plate Recognition",
      projectDesc: "A computer vision project using OpenCV and Python to detect and extract vehicle number plates from images. It includes preprocessing, edge detection, contour filtering, and OCR for accurate recognition.",
      footerLink: [
        {
          name: "View Project on GitHub",
          url: "https://github.com/Himanizambare/number-plate-recognition-code"
        }
      ]
    },

    {
      image: require("./assets/images/Geo-India.png"), // Add your custom project image here
      projectName: "Geo-India",
      projectDesc: "A geographic data visualization project that displays Indian states and districts using interactive map layers. Built with Leaflet.js and real-time geoJSON data integration.",
      footerLink: [
        {
          name: "View Project on GitHub",
          url: "https://github.com/Himanizambare/geo-india"
        }
      ]
    },

    {
      image: require("./assets/images/virtualStock.png"), // Make sure this image exists in the assets folder
      projectName: "Virtual-Stock-Trading-Platform",
      projectDesc: "his application lets users virtually invest money in the stock market using real-time stock prices. Users can track their investments, monitor their balance, and manage their stock portfolio.",
      footerLink: [
        {
          name: "View Project on GitHub",
          url: "https://github.com/Himanizambare/Virtual-Stock-Trading-Platform"
        }
      ]
    },
    



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
      title: "Machine Learning Specialization",
      subtitle:
        "Completed all three courses in the Machine Learning Specialization, covering supervised and unsupervised learning, neural networks, recommender systems, and reinforcement learning.",
      image: require("./assets/images/standford.png"), // Replace with actual image if available
      imageAlt: "Machine Learning Specialization Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1kNJ6rod00fN8h-zv_sjLRpYTS81InpVe/view?usp=sharing"
        }
      ]
    },

    {
      title: "Blockchain Developer Certificate",
      subtitle:
        "Successfully completed and received a passing grade in the Blockchain Developer course by IBM Career Education Program, powered by IBM Developer Skills Network.",
      image: require("./assets/images/IBM.webp"), // Replace with your own logo if available
      imageAlt: "IBM Blockchain Developer Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://courses.ibmcep.cognitiveclass.ai/certificates/ac61e09b4218471db1a7a6f3ace23239"
        }
      ]
    }
    ,
    {
      title: "DevOps Fundamentals Certificate",
      subtitle:
        "Successfully completed and received a passing grade in the DevOps Fundamentals course by IBM Career Education Program, powered by IBM Developer Skills Network.",
      image: require("./assets/images/IBM.webp"), // Replace with your own logo if available
      imageAlt: "IBM DevOps Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://courses.ibmcep.cognitiveclass.ai/certificates/a36731e35a9948ae8ab72c672791a878"
        }
      ]
    },
    {
      title: "Tools of the Trade: Linux and SQL",
      subtitle:
        "Successfully completed this non-credit course offered by Google on Coursera. Covered Linux basics, shell commands, and SQL for database management.",
      image: require("./assets/images/coursera.png"), // Replace with your own logo if available
      imageAlt: "Google Coursera Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/verify/HHVF54V2GSE3"
        }
      ]
    },
    {
      title: "Geodata Processing using Python",
      subtitle:
        "Successfully completed the 7.5-hour online course organized by IIRS (ISRO) from January 15–19, 2024 via VIT Bhopal University. Covered fundamental concepts and hands-on techniques for geospatial data processing using Python.",
      image: require("./assets/images/isro.png"), // Replace with your course/certificate logo
      imageAlt: "IIRS ISRO Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/170qh2jCCPpBib8WX_S4epkzjfRsmjkmU/view?usp=sharing"
        }
      ]
    },
    {
      title: "Research Paper Presentation at ICET-24",
      subtitle:
        "Presented a research paper titled 'Designing A VPN Using Open Network Infrastructure With Enhanced Security And Performance' at the International Conference on Engineering & Technology (ICET-24), held on 16th June 2024 in Chandigarh, India.",
      image: require("./assets/images/ICET.png"), // Replace with the conference logo if available
      imageAlt: "ICET-24 Conference Logo",
      footerLink: [
        {
          name: "Conference Details",
          url: "https://ijercse.com/designing-a-vpn-using-open-network.php" // Replace with actual event URL if available
        }
      ]
    },
    {
      title: "Devops, Agile & Design Thinking",
      subtitle:
        "Successfully completed and received a passing grade in the Devops, Agile & Design Thinking course by IBM Career Education Program, powered by IBM Developer Skills Network.",
      image: require("./assets/images/IBM.webp"), // Replace with your own logo if available
      imageAlt: "IBM Blockchain Developer Certificate",
      footerLink: [
        {
          name: "Certification",
          url: " https://courses.ibmcep.cognitiveclass.ai/certificates/472c47aa770e49e4b37ebe0815a568d1"
        }
      ]
    }




  ],
  display: true // Set false to hide this section, defaults to true
};

// Google Cloud  Section

const blogSection = {
  title: "Google Cloud",
  subtitle:
    "I enjoy sharing my learning journey and writing about hands-on experiences with Google Cloud Skills Badges and real-world cloud projects.",

  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.cloudskillsboost.google/public_profiles/e7884614-52e1-47ab-a617-e66b97bc2116",
      title: "Google Cloud Arcade Program",
      description:
        "Explore how I earned Google Cloud Skills Badges by completing hands-on labs and real-world challenges in cloud infrastructure, data, and AI/ML. A guide for beginners to get started with Google Cloud and showcase their skills."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I believe in learning by doing — and sharing by speaking 🧠🎤"),

  talks: [
    {
      title: "Tech & Data for Smart Policing",
      subtitle: "Insights from my Student Internship with Madhya Pradesh Police",
      slides_url: "https://drive.google.com/file/d/1LNdFT8NkSTVa-JfvQYzQy_J34-R2d4fg/view?usp=sharing",
      event_url: "https://www.linkedin.com/posts/himani-zambare-723b05241_internship-bhopal-policing-activity-7249811786852433920-QSBr"
    }
  ],
  display: true
};


// Podcast Section


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
  number: "+91 8956193620",
  email_address: "himanizambare3@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
