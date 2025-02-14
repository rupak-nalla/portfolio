"use client"
import Image from "next/image";
import myImage from "../../../public/images/undraw_Programming_re_kg9v-removebg-preview.png"
import profile from "../../../public/images/profile.jpeg"
import lib from "../../../public/images/lib-man-dp.png"
import taskman from "../../../public/images/task-man.png"
import apt from "../../../public/images/apt.png"
import ai_bot from "../../../public/images/ai-bot.png"
import music from "../../../public/images/music-web.png"
import kitchen from "../../../public/images/KitechenGenie.png"
import Loan from "../../../public/images/LoanDefault.png"
import BitcoinPrice from "../../../public/images/BitcoinPrice.png"
import 'aos/dist/aos.css';
import AOS from "aos";
import NavBar from "../components/nav-bar";
import { Github, Linkedin, ExternalLink } from 'lucide-react';
interface Project {
  title: string;
  description: string;
  technologies: string;
  githubLink: string;
  demoLink?: string;
  imageVar: any;
}


const WebProjectCard: React.FC<Project> = ({ title, description, githubLink, demoLink, technologies, imageVar }) => (
  <div className="group relative rounded-xl overflow-hidden border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 flex flex-col h-full">
    <div className="relative h-48 overflow-hidden">
      <Image 
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" 
        src={imageVar}
        alt={title}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
    </div>
    
    <div className="p-6 relative z-10 flex flex-col flex-grow">
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{description}</p>
        
        <div className="mb-6">
          <h4 className="text-blue-400 text-sm font-semibold mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.split(',').map((tech, index) => (
              <span key={index} className="px-2 py-1 text-xs bg-gray-800/50 backdrop-blur-sm text-blue-300 rounded-full border border-gray-700">
                {tech.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-auto">
        <a
          href={githubLink}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          <Github size={16} />
          GitHub
        </a>
        {demoLink && (
          <a
            href={demoLink}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600/80 backdrop-blur-sm text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);
const MLProjectCard: React.FC<Project> = ({ title, description, githubLink, demoLink, technologies, imageVar }) => (
  <div className="group relative rounded-xl overflow-hidden border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-yellow-500/20 flex flex-col h-full">
    <div className="relative h-48 overflow-hidden">
      <Image 
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" 
        src={imageVar}
        alt={title}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
    </div>
    
    <div className="p-6 relative z-10 flex flex-col flex-grow">
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-white  mb-3 group-hover:text-yellow-300 transition-colors">{title}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{description}</p>
        
        <div className="mb-6">
          <h4 className="text-yellow-300 text-sm font-semibold mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.split(',').map((tech, index) => (
              <span key={index} className="px-2 py-1 text-xs bg-yellow-800/50 backdrop-blur-sm text-yellow-300 rounded-full border border-yellow-700">
                {tech.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>

      
      <div className="flex gap-4 mt-auto">
        <a
          href={githubLink}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          <Github size={16} />
          GitHub
        </a>
        {demoLink && (
          <a
            href={demoLink}
            className="flex items-center gap-2 px-4 py-2 bg-yellow-600/80 backdrop-blur-sm text-yellow-100 rounded-lg hover:bg-yellow-700 transition-colors"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

const ProjectsPage = () => {
  const projects = [
    {
      title: "Library Management System",
      description: "A comprehensive platform that allows users to request, read, and rate books with JWT authentication. Users receive daily reminders, while administrators access monthly reports and manage books through CRUD operations.",
      technologies: "Flask, SQLAlchemy, Vue.js, JWT, Celery, Redis, SQLite",
      githubLink: "https://github.com/rupak-nalla/Library-management-system",
      imageVar: lib
    },
    {
      title: "Task Manager",
      description: "Developed a task manager application utilizing Next.js for the frontend and Express.js for the backend, ensuring a responsive user experience. Implemented Supersend for efficient notification management.",
      technologies: "Next.js, Express.js, Supersend, Tailwind",
      githubLink: "https://github.com/rupak-nalla921/task-manager-v2",
      imageVar: taskman
    },
    {
      title: "Aptitude Test Website",
      description: "An aptitude test website developed for AVINYA 2K24, featuring color-coded indicators for response statuses to enhance user experience. Built with Flask-RESTful API and Next.js frontend.",
      technologies: "Python, Flask, Next.js, Tailwind CSS",
      githubLink: "https://github.com/rupak-nalla/aptitue-test-ui",
      demoLink: "https://aptitude-test-avinya.vercel.app/",
      imageVar: apt
    },
    {
      title: "Kitchen Genie",
      description: "Kitchen Genie is a React-based recipe discovery app that fetches meal data from TheMealDB API, allowing users to explore random featured meals or search recipes by ingredients with a modern UI and dynamic backgrounds.",
      technologies: "React.js,MealDB API,Tailwind CSS",
      githubLink: "https://github.com/rupak-nalla/recipe-ideas",
      demoLink: "https://kitchengenie.vercel.app/",
      imageVar: kitchen
    },
    {
      title: "AI Chat Bot",
      description: "A sophisticated ChatBot application developed using LEMMA AI. The application seamlessly incorporates the Vue.js framework to enable efficient and responsive rendering of the chatbot interface.",
      technologies: "Vue.js, Bootstrap, LEMMA AI",
      githubLink: "https://github.com/rupak-nalla/chatbot",
      imageVar: ai_bot
    },
    {
      title: "Music Web Application",
      description: "A feature-rich music streaming web app developed for the IIT Madras MAD1 Project. Multi-user platform allows users to listen to songs, create playlists, and monitor performance through a comprehensive dashboard.",
      technologies: "Python, Flask, SQLAlchemy, HTML, Bootstrap, JS, SQLite",
      githubLink: "https://github.com/rupak-nalla/Music-app",
      imageVar: music
    }
    
  ];
  const MLprojects = [
    {
      title: "Loan Default Prediction Model",
      description: "A machine learning model that predicts the likelihood of a loan being approved based on various factors. The model is trained on a dataset containing information about loan applicants.",
      technologies: "KNN, Logistic Regression, Random Forest,Decision Tree",
      githubLink: "https://github.com/rupak-nalla/Loan-Default-Prediction-Model",
      imageVar: Loan
    },
    {
      title: "Bitcoin price prediction Model",
      description: "A deep learning model that predicts the price of Bitcoin using historical data and social media factors. The model is trained on a dataset containing information about the price of Bitcoin over time.",
      technologies: "XGBoost, LSTM, ARIMA , Attention-LSTM",
      githubLink: "https://github.com/rupak-nalla/Bitcoin-price-prediction",
      imageVar: BitcoinPrice
    }
  ];

  return (
    <main className="min-h-screen bg-[url('../../public/images/grid-pattern-2.png')] bg-center bg-fixed bg-cover">
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900/90 to-black backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <NavBar />
          
          <div className="py-20 text-center min-h-screen flex flex-col justify-center relative" >
            <div className="absolute inset-0 bg-blue-500/10 animate-pulse blur-3xl" />
            <div className="relative z-10" >
              <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500" data-aos="flip-up">
                  MY PROJECTS
                </span>
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                A showcase of my technical journey and creative solutions
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center my-5 py-10 text-3xl font-bold text-white">
            Web Development projects
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20 px-4">
            {projects.map((project, index) => (
              <WebProjectCard key={index} {...project} />
            ))}
          </div>
          <div className="flex justify-center items-center my-5 py-10 text-3xl font-bold text-white">
            Machine learning projects
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20 px-4">
            {MLprojects.map((project, index) => (
              <MLProjectCard key={index} {...project} />
            ))}
          </div>

          <footer className="border-t border-gray-800/50 backdrop-blur-sm py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400">Designed and developed by Rupak Nalla</p>
              <div className="flex gap-4">
                <a 
                  href="http://www.github.com/rupak-nalla" 
                  className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700 transition-colors border border-gray-700"
                >
                  <Github className="text-white" size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/rupaknalla/" 
                  className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700 transition-colors border border-gray-700"
                >
                  <Linkedin className="text-white" size={20} />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;