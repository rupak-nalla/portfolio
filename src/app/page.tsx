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
        words: ["Software Developer", "MERN Stack Developer"],
        loop: true,
    });

    return (
        <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
            <NavBar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-5">
                {/* Hero Section */}
                <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 relative">
                    <div className={`space-y-6 transition-all duration-1000 ${
                        visible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                    }`}>
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
                    
                    <div className={`transition-all duration-1000 ${
                        visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                    }`}>
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