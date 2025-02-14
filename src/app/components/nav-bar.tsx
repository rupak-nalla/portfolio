// "use client"
// import Image from "next/image";
// import { useEffect } from "react";
// import { useState } from "react";
// import { useTypewriter,Cursor } from "react-simple-typewriter";
// import myImage from "../../public/images/undraw_Programming_re_kg9v-removebg-preview.png"
// import profile from "../../public/images/profile.jpeg"
// import { Krona_One } from "next/font/google";
// import 'aos/dist/aos.css';
// import AOS from "aos";



// export default function NavBar(){
//     const [isAtTop, setIsAtTop] = useState(true);
//     const [firstVisible, setFirstVisible] = useState(false);
//     const [secondVisible, setSecondVisible] = useState(false);
//     const handleScroll = () => {
//         // Check if the scroll position is at the top
//         const currentScrollY = window.scrollY;
//         setIsAtTop(currentScrollY === 0);
//     };
//     useEffect(() => {
//         const firstTimer = setTimeout(() => {
//             setFirstVisible(true);
//         }, 100); // Delay for the first text

//         const secondTimer = setTimeout(() => {
//             setSecondVisible(true);
//         }, 100); // Delay for the second text

        
//     }, []);
//     useEffect(() => {
//         // Add scroll event listener
//         window.addEventListener('scroll', handleScroll);
    
//         // Clean up the event listener on component unmount
//         return () => {
//           window.removeEventListener('scroll', handleScroll);
//         };
//       }, []);
//     return(
//         <nav className={`fixed   z-10 transform w-screen -translate-y-1/2 p-4 shadow-md transition-transform duration-700 ease-in-out ${firstVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0' }`}>
//             <div  className={`flex justify-center ${isAtTop ? '':'backdrop-blur-md bg-slate-500  bg-opacity-15 rounded-3xl' }`}> 

//               <ul className="flex p-5 text-center ">
//                 <a href="/" className="p-2 text-xl font-mono font-semibold flex hover:bg-slate-100 hover:rounded hover:bg-opacity-10">
//                   <svg className="mx-1" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
//                   Rupak Nalla
//                 </a>
//                 <a href="/projects" className="p-2 text-xl font-mono font-semibold flex hover:bg-slate-100 hover:rounded hover:bg-opacity-10">
                  
//                   <svg className="mx-1" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
//                     <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm140-40-56-56 103-104-104-104 57-56 160 160-160 160Zm180 0v-80h240v80H480Z"/>
//                   </svg>
//                   Projects
//                 </a>
//                 <a href="/resume" className="p-2 text-xl font-mono font-semibold flex hover:bg-slate-100 hover:rounded hover:bg-opacity-10">
//                   <svg className="mx-1" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>
//                   Resume
//                 </a>
                
//               </ul>
//             </div>
//           </nav>
//     );
// }
"use client"
import { useState, useEffect } from "react";
import { Home, Code, FileText, Menu, X } from 'lucide-react';

export default function NavBar() {
    const [isAtTop, setIsAtTop] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setIsAtTop(currentScrollY === 0);
    };

    useEffect(() => {
        setIsVisible(true);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: "/", label: "Home", icon: Home },
        { href: "/projects", label: "Projects", icon: Code },
        { href: "/resume", label: "Resume", icon: FileText },
    ];

    return (
        <nav 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
            }`}
        >
            <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${
                isAtTop ? '' : 'backdrop-blur-md bg-gray-900/75 shadow-lg'
            }`}>
                <div className="flex items-center justify-between h-16">
                    {/* Logo/Brand */}
                    <a 
                        href="/" 
                        className="flex items-center space-x-2 text-xl font-semibold hover:text-blue-400 transition-colors"
                    >
                        <span className="hidden sm:block">Rupak Nalla</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        {navItems.map(({ href, label, icon: Icon }) => (
                            <a
                                key={href}
                                href={href}
                                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700/50 transition-colors"
                            >
                                <Icon size={18} />
                                <span>{label}</span>
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
                    >
                        {isMobileMenuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden transition-all duration-300 ${
                    isMobileMenuOpen 
                        ? 'max-h-64 opacity-100' 
                        : 'max-h-0 opacity-0 pointer-events-none'
                }`}>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navItems.map(({ href, label, icon: Icon }) => (
                            <a
                                key={href}
                                href={href}
                                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-base font-medium hover:bg-gray-700/50 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <Icon size={18} />
                                <span>{label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}