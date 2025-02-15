"use client"
import { useState, useEffect } from "react";
import { Home, Code, FileText, Menu, X } from 'lucide-react';
import AOS from "aos";
import 'aos/dist/aos.css';

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        setVisible(true);
        AOS.init({ once: true });
    }, []);
    
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        handleScroll(); // Check initial scroll position
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: "/", label: "Home", icon: Home },
        { href: "/projects", label: "Projects", icon: Code },
        { href: "/resume", label: "Resume", icon: FileText },
    ];

    return (
        <>
            <nav data-aos="slide-down" className="fixed top-0 left-0 w-screen z-50 border-gray-800">
                <div className={`w-full transition-colors duration-300 ${
                    isScrolled || isMobileMenuOpen ? 'bg-gray-900/75 backdrop-blur-md' : 'bg-transparent'
                }`}>
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                            <a 
                                href="/" 
                                className="flex items-center space-x-2 text-xl font-semibold text-white hover:text-blue-400 transition-colors"
                            >
                                <span>Rupak Nalla</span>
                            </a>

                            <div className="hidden md:flex items-center space-x-4">
                                {navItems.map(({ href, label, icon: Icon }) => (
                                    <a
                                        key={href}
                                        href={href}
                                        className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-white/10 transition-colors"
                                    >
                                        <Icon size={18} />
                                        <span>{label}</span>
                                    </a>
                                ))}
                            </div>

                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>

                        {/* Mobile menu */}
                        <div className={`md:hidden transition-all duration-300 ease-in-out ${
                            isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                        }`}>
                            <div className="px-4 pt-2 pb-3 space-y-1">
                                {navItems.map(({ href, label, icon: Icon }) => (
                                    <a
                                        key={href}
                                        href={href}
                                        className="flex items-center space-x-2 px-3 py-2 rounded-lg text-base font-medium text-white hover:bg-white/10 transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <Icon className="w-5 h-5" />
                                        <span>{label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Spacer div to prevent content from going under navbar */}
            
        </>
    );
}