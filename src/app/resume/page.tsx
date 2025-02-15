
"use client"
import NavBar from "../components/nav-bar";
import PdfViewer from "../components/pdfviewer";
import { Github, Linkedin, Download } from 'lucide-react';

export default function Resume() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
            <NavBar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="py-20 space-y-8">
                    {/* Header Section */}
                    <div className="text-center space-y-4">
                        <h1 className="text-3xl md:text-4xl font-bold">
                            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Resume</span>
                        </h1>
                        <p className="text-gray-400">Check out my experience and qualifications</p>
                    </div>

                    {/* Download Button */}
                    <div className="flex justify-center">
                        <a
                            href="/images/Rupak-Nalla.pdf"
                            download="Rupak_Nalla_Resume"
                            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                        >
                            <Download size={20} />
                            Download Resume
                        </a>
                    </div>

                    {/* PDF Viewer Container */}
                    <div className="relative">
                        <div 
                            className="w-full bg-white rounded-xl shadow-2xl overflow-hidden"
                            style={{
                                height: 'calc(100vh - 400px)',
                                minHeight: '500px'
                            }}
                        >
                            <PdfViewer fileUrl="/images/Rupak-Nalla.pdf" />
                        </div>
                        
                        {/* Overlay gradient for better visibility */}
                        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none" />
                    </div>
                </div>

                {/* Footer */}
                <footer className="border-t border-gray-800/50 py-8 mt-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400">
                            Designed and developed by Rupak Nalla
                        </p>
                        <div className="flex gap-4">
                            <a 
                                href="http://www.github.com/rupak-nalla"
                                className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700 transition-all transform hover:scale-110 border border-gray-700"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="text-white" size={20} />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/rupaknalla/"
                                className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700 transition-all transform hover:scale-110 border border-gray-700"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin className="text-white" size={20} />
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </main>
    );
}