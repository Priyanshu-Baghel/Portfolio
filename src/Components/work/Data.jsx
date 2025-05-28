import Work1 from '../../assets/work1.jpg';
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
import Work4 from "../../assets/work4.jpg";
import Work5 from "../../assets/work5.jpg";
import Paper from "../../assets/paper1.pdf";
import Cp from "../../assets/cp.png";
import CsScoreCard from "../../assets/csscore.pdf";
import DaScoreCard from "../../assets/dascore.pdf";
import Gate1 from "../../assets/gate1.png";
import Gate2 from "../../assets/gate2.png";
import SQL from "../../assets/Sql.png";
import Wireless from "../../assets/wirelessEssentials.png"
import Python from "../../assets/python.png"
import Network from "../../assets/networks.png";
import Devops from "../../assets/Devops.png";
import Deeplearning from "../../assets/deeplearning.png";
import DataVisualiztion from "../../assets/datavisualiztion.png";
import Cyber from "../../assets/Cybersecurity.png";
import CyberEssential from "../../assets/CyberEssentials.png";
import Automation from "../../assets/Automation.png";
import Web from "../../assets/web.png";
import Cert1 from "../../assets/cert1.pdf";
import Cert2 from "../../assets/cert2.pdf";
import Cert3 from "../../assets/cert3.pdf";
import Cert4 from "../../assets/cert4.pdf";
import Cert5 from "../../assets/cert5.pdf";
import Cert6 from "../../assets/cert6.pdf";
import Cert7 from "../../assets/cert7.pdf";
import Cert8 from "../../assets/cert8.pdf";
import Cert9 from "../../assets/cert9.pdf";
import Cert10 from "../../assets/cert10.pdf";
import Cert11 from "../../assets/cert11.pdf";
import Hack1 from "../../assets/Hack1.png";
import Hack2 from "../../assets/Hack2.jpg";
import Hack3 from "../../assets/Hack3.png";
import Proj1 from "../../assets/projects/proj1.png";
import Proj2 from "../../assets/projects/proj2.png"
import Proj3 from "../../assets/projects/proj3.png";
import Proj4 from "../../assets/projects/proj4.png";
import Proj5 from "../../assets/projects/proj5.png";
import Proj6 from "../../assets/projects/proj6.png";
import Proj7 from "../../assets/projects/proj7.png";
import Proj8 from "../../assets/projects/proj8.png";
import Github from "../../assets/github.png";
import SIH from "../../assets/Sih.jpg"


export const projectsNav = [
  {
    name: "All",
  },
  {
    name: "Projects",
  },
  {
    name: "Hackathons",
  },
  {
    name: "Certificates",
  },
  {
    name: "GATE",
  },
  {
    name: "Research Papers",
  },
  {
    name: "Problem Solving",
  }
];

// Projects Data
export const projectsData = [
  {
    id: 1,
    image: Proj1,
    title: "Bhasha.ai",
    category: "projects",
    description:
      "AI-powered platform for regional language learning using NLP and speech recognition",
    githubLink: "https://github.com/Priyanshu-Baghel/Bhasha-ai",
    deploymentLink: "https://bhasha-ai-ten.vercel.app",
  },
  {
    id: 2,
    image: Proj2,
    title: "AgriSense",
    category: "projects",
    description:
      "IoT-based smart agriculture system with soil monitoring and crop prediction",
    githubLink: "https://github.com/Priyanshu-Baghel/AgriSense",
    deploymentLink: "",
  },
  {
    id: 3,
    image: Proj3,
    title: "Sahayata-Setu",
    category: "projects",
    description:
      "Disaster management portal connecting volunteers with relief organizations",
    githubLink: "https://github.com/Priyanshu-Baghel/Prayatana-2.0",
    deploymentLink: "https://sahayata-setu.vercel.app",
  },
  {
    id: 4,
    image: Proj4,
    title: "HexaD",
    category: "projects",
    description:
      "Online integrated platform for projects taken up by the students of various universities/colleges",
    githubLink: "https://github.com/Priyanshu-Baghel/eduProject",
    deploymentLink: "",
  },
  {
    id: 5,
    image: Proj5,
    title: "Vehicle Tracking System",
    category: "projects",
    description: "Real-time GPS tracking solution with route optimization",
    githubLink: "https://github.com/Priyanshu-Baghel/Internship",
    deploymentLink: "",
  },
  {
    id: 6,
    image: Proj6,
    title: "HealthHub",
    category: "projects",
    description: "Telemedicine platform with AI symptom checker",
    githubLink: "https://github.com/Priyanshu-Baghel/Health-Care-Project",
    deploymentLink: "",
  },
  {
    id: 7,
    image: Proj7,
    title: "Code-Sync",
    category: "projects",
    description: "Real-time collaborative code editor with video chat",
    githubLink: "",
    deploymentLink: "",
  },
  {
    id: 8,
    image:
      "data:image/png;base64,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",
    title: "Spam Detection",
    category: "projects",
    description: "ML model for SMS spam classification with 98.2% accuracy",
    githubLink: "https://github.com/Priyanshu-Baghel/SMS-Spam-Classifier",
    deploymentLink: "",
  },
  {
    id: 9,
    image: Work3,
    title: "Plant Leaf Disease Detection",
    category: "projects",
    description: "CNN model identifying 38 plant diseases from leaf images",
    githubLink:
      "https://github.com/Priyanshu-Baghel/Plant-Disease-Classification",
    deploymentLink: "",
  },
  {
    id: 10,
    image: Proj8,
    title: "Recipe Generator from Image",
    category: "projects",
    description: "Computer vision system suggesting recipes from food photos",
    githubLink: "https://github.com/Priyanshu-Baghel/Recipe-Generator",
    deploymentLink: "",
  },
];

// Hackathons Data
export const hackathonsData = [
  {
    id: 1,
    image:
      SIH,
    category: "hackathons",
    description:
      "Developed Hexa-D - Online integrated platform for projects taken up by the students of various universities/colleges",
    position: " 1st Prize (National Level)",
    keyLearning:
      " End-to-end Web Application & system design, Jharkhand Government problem statements",
  },
  {
    id: 4,
    image: Hack2,
    title: "Prayatana 2.0 Runner Up",
    category: "hackathons",
    description:
      "A unified platform to streamline public service complaints and ensure effective routing for quick resolutions.",
    position: "2nd Prize",
    keyLearning: "Leadership, Communication, UI/UX, Unsupervised Learning",
  },
  {
    id: 2,
    image: Hack1,
    title: "Internal Hackathon (IIST Finalist)",
    category: "hackathons",
    description:
      "Developing ED-Tech Platform for Rural Student's for adaptive Learning",
    position: "Top 5 Teams",
    keyLearning: "Team leadership, Full Stack Development",
  },
  {
    id: 5,
    image: Work1,
    title: "Codekshetra 2.0 Finalist",
    category: "hackathons",
    description: "Algorithmic trading bot competition",
    position: "Top 3 Teams",
    keyLearning: "Machine Learning, Communication, Backtesting strategies",
  },
  {
    id: 3,
    image:
      "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/gallery/65bb6e4fdd1b4_poster.jpg?d=1200x700",
    title: "Kriyeta 2.0",
    category: "hackathons",
    description: "Blockchain-based Web application with IOT device",
    position: "Finalist",
    keyLearning: "Smart contract development, IOT Development ",
  },
  {
    id: 6,
    image: Hack3,
    title: "SIH 2022",
    category: "hackathons",
    description: "AI-powered E-waste Recycle Mobile Application",
    position: "Participant",
    keyLearning: "Figma, UI/UX, System Design, Team coordination",
  },
];

// Certificates Data
export const certificatesData = [
  {
    id: 1,
    image: Web,
    title: "CAD101EN Introduction to Web Development",
    category: "certificates",
    description:
      "A course of study offered by IBM, an online learning initiative of IBM.",
    keyLearning: "HTML5, CSS3, JavaScript",
    pdfLink: Cert1,
  },
  {
    id: 2,
    image: Python,
    title: "PCAP - Programming Essentials in Python",
    category: "certificates",
    description: "Through the Cisco Networking Academy program.",
    keyLearning: "Python programming, problem solving",
    pdfLink: Cert2,
  },
  {
    id: 3,
    image: DataVisualiztion,
    title: "PH125.2x: Data Science: Visualization",
    category: "certificates",
    description:
      "A course of study offered by HarvardX, an online learning initiative of Harvard University.",
    keyLearning: "Data visualization with R, ggplot2",
    pdfLink: Cert3,
  },
  {
    id: 4,
    image: Deeplearning,
    title: "DL0101EN Deep Learning Fundamentals with Keras",
    category: "certificates",
    description:
      "A course of study offered by IBM, an online learning initiative of IBM.",
    keyLearning: "Keras, Neural networks",
    pdfLink: Cert4,
  },
  {
    id: 5,
    image: SQL,
    title: "SQL and Relational Databases 101",
    category: "certificates",
    description:
      "A course on cognitiveclass.ai powered by IBM Developer Skills Network.",
    keyLearning: "SQL queries, relational models",
    pdfLink: Cert5,
  },
  {
    id: 6,
    image: Devops,
    title: "CAD201EN Introduction to Cloud Native, DevOps, Agile, and NoSQL",
    category: "certificates",
    description:
      "A course of study offered by IBM, an online learning initiative of IBM.",
    keyLearning: "DevOps, Cloud-native, Agile, NoSQL",
    pdfLink: Cert6,
  },
  {
    id: 7,
    image: Cyber,
    title: "Introduction to Cybersecurity",
    category: "certificates",
    description: "Through the Cisco Networking Academy program.",
    keyLearning: "Cyber threats, security principles",
    pdfLink: Cert7,
  },
  {
    id: 8,
    image: Network,
    title: "Introduction to Networks",
    category: "certificates",
    description: "Through the Cisco Networking Academy program.",
    keyLearning: "Network fundamentals, IP addressing",
    pdfLink: Cert8,
  },
  {
    id: 9,
    image: Automation,
    title: "CCNAv7: Enterprise Networking, Security, and Automation",
    category: "certificates",
    description: "Through the Cisco Networking Academy program.",
    keyLearning: "Enterprise infrastructure, automation",
    pdfLink: Cert9,
  },
  {
    id: 10,
    image: Wireless,
    title: "CCNAv7: Switching, Routing, and Wireless Essentials",
    category: "certificates",
    description: "Through the Cisco Networking Academy program.",
    keyLearning: "Routing, switching, wireless tech",
    pdfLink: Cert10,
  },
  {
    id: 11,
    image: CyberEssential,
    title: "Cybersecurity Essentials",
    category: "certificates",
    description: "Through the Cisco Networking Academy program.",
    keyLearning: "Security technologies and operations",
    pdfLink: Cert11,
  },
];

// GATE Data
export const gateData = [
  {
    id: 1,
    image: Gate1,
    title: "GATE CSE 2025",
    category: "gate",
    description: "Graduate Aptitude Test in Engineering - Computer Science",
    experience: "Focused preparation on algorithms, TOC, CD, CN, OS, and DBMS",
    scorecardLink: CsScoreCard,
    score: "AIR 10574",
    percentile: "443",
  },
  {
    id: 2,
    image: Gate2,
    title: "GATE DA 2025",
    category: "gate",
    description:
      "Graduate Aptitude Test in Engineering - Data Science and  Data Science and Artificial Intelligence ",
    experience: "Focused preparation on Machine Learning, Deep Learning and AI",
    scorecardLink: DaScoreCard,
    score: "AIR 8014",
    percentile: "354",
  },
];

// Research Papers Data
export const researchData = [
  {
    id: 1,
    image: Work3,
    title: "Utilization of Solid Waste to Energy in India",
    category: "research paper",
    description:
      "Converting India's solid waste into sustainable energy solutions.",
    keyResearch: "Find the Best Method of Solid Waste to Energy",
    paperLink:
      "https://www.ijraset.com/best-journal/utilization-of-solid-waste-to-energy-in-india",
    publishedIn: "IJRASET Access 2023",
  },
  {
    id: 2,
    image:
      "data:image/png;base64,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",
    title: "Machine Learning Techniques on Mobile SMS Spam Detection",
    category: "research paper",
    description:
      "Mobile SMS Spam Detection by Machine Learning Pre-existing Algorithm.",
    keyResearch:
      "Proposed novel aggregation algorithm reducing communication overhead by 37%",
    paperLink: Paper,
    publishedIn: "Springer Access",
  },
];

// Problem Solving Data
export const problemSolvingData = [
  {
    id: 1,
    image: Cp,
    title: "Competitive Programming Profiles",
    category: "problem solving",
    description: "Regular practice on DSA platforms",
    platformLinks: {
      leetcode: "https://leetcode.com/u/baghelpriyanshu2003/",
      gfg: "https://geeksforgeeks.org",
    },
    stats: {
      leetcodeSolved: "350+",
      gfgScore: "100+",
    },
  },
  {
    id: 2,
    image: Github, // Replace with your actual image import for GitHub icon or logo
    title: "GitHub Profile",
    category: "open source",
    description:
      "Contributions to open source projects and personal repositories",
    platformLinks: {
      github: "https://github.com/Priyanshu-Baghel",
    },
    stats: {
      repos: "35+",
      contributions: "1000+",
    },
  },
];
