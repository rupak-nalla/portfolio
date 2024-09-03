"use client"
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import { useTypewriter,Cursor } from "react-simple-typewriter";
import myImage from "../../public/images/undraw_Programming_re_kg9v-removebg-preview.png"
import { Krona_One } from "next/font/google";
const krona_one=Krona_One({
  subsets:['latin'],
  weight:['400']
})
export default function Home() {
    const [firstVisible, setFirstVisible] = useState(false);
    const [secondVisible, setSecondVisible] = useState(false);
    
    
    useEffect(() => {
        const firstTimer = setTimeout(() => {
            setFirstVisible(true);
        }, 100); // Delay for the first text

        const secondTimer = setTimeout(() => {
            setSecondVisible(true);
        }, 100); // Delay for the second text

        // return () => {
        //     clearTimeout(firstTimer);
        //     clearTimeout(secondTimer);
        // };
    }, []);

    
    const jobTitle=useTypewriter({
      words:["Software Developer","MERN Stack developer"],
      loop:{},
    })
    
  return (
    <main className="bg-[url('../../public/images/cool-background.png')]  .blend-hard-light h-screen bg-cover bg-no-repeat">
      
      <div className={krona_one.className}>
        <div className="bg-gradient-to-b from-black via-transparent to-black h-screen md:flex ">
          <nav className={`fixed transform w-screen -translate-y-1/2 p-4 shadow-md transition-transform duration-700 ease-in-out ${firstVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0' }`}>
            <div className="flex justify-center">

              <ul className="flex p-5 text-center">
                <li className="px-2 text-xl font-bold">Rupak Nalla</li>
                <li className="px-2 text-xl">Projects</li>
                <li className="px-2 text-xl">Contact me</li>
              </ul>
            </div>
          </nav>
          <div className={`fixed top-1/2 left-0 transform -translate-y-1/2 p-4 shadow-md transition-transform duration-700 ease-in-out ${firstVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0' }`}>
              <div className={`transition-transform duration-700 delay-200 ${firstVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                  <h1 className="text-4xl px-5">Hello there,</h1>
              </div>
              <div className={`transition-transform duration-700 delay-300 ${firstVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                  <h1 className="text-4xl px-5">Im Rupak Nalla</h1>
              </div>
              <div className={`transition-transform duration-700 ease-in-out delay-200 ${secondVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                <h1 className="text-2xl px-5 text-[#1400FF]">{jobTitle[0]}<Cursor/></h1>
              </div>
          </div>
          <div className="rounded-custom fixed top-1/2 right-0 transform -translate-y-1/2 p-10 shadow-md">
            <div
              className={`transition-transform duration-700 delay-200 ${
                firstVisible ? 'translate-x-0 opacity-100' : 'translate-x-[200%] opacity-0'
              }`}
            >
              <Image src={myImage} alt=""></Image>
            </div>
          </div>
          <div></div>
        </div>
        
      </div>
    </main>
  );
}
