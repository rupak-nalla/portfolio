"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Github, Linkedin } from 'lucide-react';
import AOS from "aos";
import 'aos/dist/aos.css';
import NavBar from "./components/nav-bar";

export default function Home() {
    const [visible, setVisible] = useState(false);
    const [isAtTop, setIsAtTop] = useState(true);

    const handleScroll = () => {
        setIsAtTop(window.scrollY === 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setVisible(true);
        AOS.init({ once: true });
    }, []);

    const [text] = useTypewriter({
        words: ["Software Developer", "MERN Stack Developer","AI Enthusiast"],
        loop: true,
    });

    return (
        <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-x-hidden">
            <NavBar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-5">
                {/* Hero Section */}
                <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 relative">
                    <div data-aos="fade-right" className="transition-all duration-1000">
                        <div className="space-y-2">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                                Hello there,
                            </h1>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                                I&apos;m <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                    Rupak Nalla
                                </span>
                            </h1>
                        </div>
                        <h2 className="text-xl md:text-2xl text-blue-400">
                            {text}<Cursor />
                        </h2>
                    </div>
                    
                    <div data-aos="fade-left" className="transition-all duration-1000">
                        <div className="relative w-64 h-64 md:w-[30rem] md:h-[30rem] animate-float">
                            <Image 
                                src="/images/971.png"
                                alt="Hero image"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className="min-h-screen py-20" id="about">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div data-aos="fade-right" className="w-full md:w-3/5 space-y-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-center">
                                LET ME <span className="text-blue-400">INTRODUCE</span> MYSELF
                            </h3>
                            <div className="space-y-4 text-lg text-center">
                                <p>
                                    My coding journey began with my first HTML tag at an early age, evolving into a passion for
                                    <span className="text-blue-400"> full-stack applications</span> and <span className="text-blue-400">AI</span>
                                </p>
                                <p>
                                    I&apos;m fluent in frontend technologies like
                                    <span className="text-blue-400"> JavaScript, Next.js, Vue.js, and React.js</span>
                                </p>
                                <p>
                                    I&apos;m also proficient in backend technologies like
                                    <span className="text-blue-400"> Flask and Express.js</span>
                                </p>
                                <p>
                                    I&apos;m currently pursuing a <span className="text-blue-400">B.Tech in CSE from JNTUH Manthani</span> and a
                                    <span className="text-blue-400"> BS in Data Science from IIT Madras</span> with experience in 
                                    <span className="text-blue-400"> Machine Learning, Deep Learning, and Natural Language Processing</span>.
                                </p>
                                <p>
                                    I cherish the art of transforming ideas into vibrant digital experiences,
                                    bringing visions to life with every line of code.
                                </p>
                            </div>
                        </div>
                        
                        <div data-aos="fade-left" className="w-full md:w-2/5 flex justify-center">
                            <div className="relative w-64 h-64 md:w-80 md:h-80">
                                <Image 
                                    src="/images/profile.jpeg"
                                    alt="Profile"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Education Section */}
                <section className="py-20" id="education">
                    <div className="text-center space-y-8" data-aos="fade-up">
                        <h3 className="text-2xl md:text-3xl font-bold">
                            MY <span className="text-blue-400">EDUCATION</span>
                        </h3>
                        
                        <div className="max-w-3xl mx-auto relative flex">
                            {/* Vertical line */}
                            <div className="absolute mx-3 transform -translate-x-1/2 h-full w-0.5 bg-blue-400/50"></div>
                            <div>
                                {/* Timeline Entry 1 */}
                                <div className="relative z-10 flex">
                                    <div className="relative z-10 flex items-center justify-center  mb-8">
                                        <div className="bg-blue-400 w-6 h-6 rounded-full"></div>
                                    </div>
                                    
                                    <div className="bg-gray-800/50 mx-6  p-6 rounded-lg border border-gray-700 transition-all  hover:scale-[1.02] hover:shadow-blue-500/10 hover:shadow-lg mb-16">
                                        <div className="text-center mb-3">
                                            <span className="inline-block px-4 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm font-medium mb-2">
                                                2022 - 2026
                                            </span>
                                        </div>
                                        <h4 className="text-xl font-semibold text-blue-400 mb-2">BS in Data Science</h4>
                                        <p className="text-lg font-medium mb-3">IIT Madras</p>
                                        <p className="text-sm text-gray-300">
                                            Focusing on data analysis, machine learning, statistical modeling, and AI applications. 
                                            The program covers advanced mathematics, programming, and data visualization techniques 
                                            to solve complex real-world problems.
                                        </p>
                                    </div>
                                </div>
                            
                                {/* Timeline Entry 2 */}
                                <div className="relative z-10 flex">
                                    <div className="relative z-10 flex items-center justify-center  mb-8 ">
                                        <div className="bg-blue-400  w-6 h-6 rounded-full"></div>
                                    </div>
                                    
                                    <div className="bg-gray-800/50 mx-6 p-6 rounded-lg border border-gray-700 transition-all hover:scale-[1.02] hover:shadow-blue-500/10 hover:shadow-lg mb-16">
                                        <div className="text-center mb-3">
                                            <span className="inline-block px-4 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm font-medium mb-2">
                                                2021 - 2025
                                            </span>
                                        </div>
                                        <h4 className="text-xl font-semibold text-blue-400 mb-2">B.Tech in Computer Science</h4>
                                        <p className="text-lg font-medium mb-3">JNTUH Manthani</p>
                                        <p className="text-sm text-gray-300">
                                            Specializing in core computer science fundamentals, software engineering, and system design.
                                            Coursework includes data structures, algorithms, operating systems, and software development methodologies.
                                        </p>
                                    </div>
                                </div>
                            
                            {/* Timeline Entry 3 - High School */}
                                <div className="relative z-10 flex">
                                    <div className="relative z-10 flex items-center justify-center   mb-8 ">
                                        <div className="bg-blue-400 w-6 h-6 rounded-full"></div>
                                    </div>
                                    
                                    <div className="bg-gray-800/50 mx-6 p-6 rounded-lg border border-gray-700 transition-all hover:scale-[1.02] hover:shadow-blue-500/10 hover:shadow-lg">
                                        <div className="text-center mb-3">
                                            <span className="inline-block px-4 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm font-medium mb-2">
                                                2019 - 2021
                                            </span>
                                        </div>
                                        <h4 className="text-xl font-semibold text-blue-400 mb-2">Intermidiate Education</h4>
                                        <p className="text-lg font-medium mb-3">Shree Vardhan Jr College</p>
                                        <p className="text-sm text-gray-300">
                                            Completed intermidiate education with a focus on Mathematics, Physics.
                                            Developed a strong foundation in analytical thinking and problem-solving skills.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </section>

                {/* Tech Stack Section */}
                <section className="py-20 bg-gray-900/30" id="skills">
                    <div className="text-center space-y-10" data-aos="fade-up">
                        <h3 className="text-2xl md:text-3xl font-bold">
                            MY <span className="text-blue-400">TECH STACK</span>
                        </h3>
                        
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {/* Frontend Card */}
                            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10">
                                <h4 className="text-xl font-semibold text-blue-400 mb-4">Frontend</h4>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS'].map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-gray-700/50 rounded-md text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Backend Card */}
                            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10">
                                <h4 className="text-xl font-semibold text-blue-400 mb-4">Backend</h4>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {['Node.js', 'Express.js', 'Flask', 'MongoDB', 'MySQL', 'Redis','PostgreSQL', 'Firebase', 'RESTful APIs'].map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-gray-700/50 rounded-md text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            {/* AI & Data Science Card */}
                            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10">
                                <h4 className="text-xl font-semibold text-blue-400 mb-4">AI & Data Science</h4>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'NLP', 'Computer Vision', 'Machine Learning'].map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-gray-700/50 rounded-md text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Tools & Others Card */}
                            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10">
                                <h4 className="text-xl font-semibold text-blue-400 mb-4">Tools & Others</h4>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {['Git', 'GitHub', 'Postman', 'Vercel','Google Cloud', 'Netlify', 'Figma', 'VS Code'].map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-gray-700/50 rounded-md text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-20" id="contact">
                    <div className="text-center space-y-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-blue-400">
                            FIND ME ON
                        </h3>
                        <div className="flex justify-center gap-4">
                            <a 
                                href="http://www.github.com/rupak-nalla"
                                className="p-4 rounded-full bg-gray-800/50 hover:bg-gray-700 transition-all transform hover:scale-110 border border-gray-700"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github size={32} />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/rupaknalla/"
                                className="p-4 rounded-full bg-gray-800/50 hover:bg-gray-700 transition-all transform hover:scale-110 border border-gray-700"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin size={32} />
                            </a>
                        </div>
                        <p className="text-lg">
                            Feel free to <span className="text-blue-400">connect</span>
                        </p>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-gray-800/50 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400">
                            Designed and developed by Rupak Nalla
                        </p>
                        <div className="flex gap-4">
                            <a 
                                href="http://www.github.com/rupak-nalla"
                                className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700 transition-colors border border-gray-700"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github size={20} />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/rupaknalla/"
                                className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700 transition-colors border border-gray-700"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </footer>
            </div>

            {/* Global Styles */}
            <style jsx global>{`
                @keyframes float {
                    0% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                    100% {
                        transform: translateY(0px);
                    }
                }

                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                
            `}</style>
        </main>
    );
}