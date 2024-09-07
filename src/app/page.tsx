"use client"
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import { useTypewriter,Cursor } from "react-simple-typewriter";
import myImage from "../../public/images/undraw_Programming_re_kg9v-removebg-preview.png"
import profile from "../../public/images/profile.jpeg"
import { Krona_One } from "next/font/google";
import 'aos/dist/aos.css';
import AOS from "aos";
import NavBar from "./components/nav-bar";
const krona_one=Krona_One({
  subsets:['latin'],
  weight:['400']
})
export default function Home() {
    const [firstVisible, setFirstVisible] = useState(false);
    const [secondVisible, setSecondVisible] = useState(false);
    const [isAtTop, setIsAtTop] = useState(true);

    const handleScroll = () => {
      // Check if the scroll position is at the top
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY === 0);
    };

    useEffect(() => {
      // Add scroll event listener
      window.addEventListener('scroll', handleScroll);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    useEffect(() => {
        const firstTimer = setTimeout(() => {
            setFirstVisible(true);
        }, 100); // Delay for the first text

        const secondTimer = setTimeout(() => {
            setSecondVisible(true);
        }, 100); // Delay for the second text

        
    }, []);

    useEffect(() => {
      AOS.init({once: true});
    }, []);  
    const jobTitle=useTypewriter({
      words:["Software Developer","MERN Stack developer"],
      loop:{},
    })
    
  return (
    <main className="bg-[url('../../public/images/cool-background.png')]  .blend-hard-light h-screen bg-cover bg-no-repeat">
      
      <div className={krona_one.className}>
        <div className="bg-gradient-to-b from-slate-900 via-transparent to-slate-900 h-screen md:flex ">
          
          <NavBar/>
          {/* hero section */}
          <div>

            <div className={`absolute top-1/2 left-0 transform -translate-y-1/2 p-4 shadow-md transition-transform duration-700 ease-in-out ${firstVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0' }`}>
                <div className={`transition-transform duration-700 delay-200 ${firstVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                    <h1 className="text-4xl px-5 ">Hello there,</h1>
                </div>
                <div className={`transition-transform duration-700 delay-300 ${firstVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                    <h1 className="text-4xl px-5">I'm Rupak Nalla</h1>
                </div>
                <div className={`transition-transform duration-700 ease-in-out delay-200 ${secondVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                  <h1 className="text-2xl px-5 text-[#1400FF]">{jobTitle[0]}<Cursor/></h1>
                </div>
            </div>
            <div className="rounded-custom absolute top-1/2 right-0 transform -translate-y-1/2 p-10 shadow-md">
              <div
                className={`transition-transform duration-700 delay-200 ${
                  firstVisible ? 'translate-x-0 opacity-100' : 'translate-x-[200%] opacity-0'
                }`}
              >
                <Image src={myImage} alt=""></Image>
              </div>
            </div>
          </div>
        </div>
        {/* intro section */}
        <div className="flex bg-slate-900">

          <div className=" h-screen py-10 w-[60%] flex justify-start items-center" >
                <div data-aos="fade-right" className="mx-10 ">
                  <h3 className="text-3xl py-3 text-center">LET ME <span className="text-[#1400FF]">INTRODUCE</span> MYSELF</h3>
                  <h6 className="my-3 text-center">My coding journey began with my first HTML tag at an early age,<br></br>and it blossomed into a passion for crafting <br /><span className="text-[#1400FF]">full-stack applications.</span></h6>
                  <h6 className="my-3 text-center">I'm fluent in frontend technologies <span className="text-[#1400FF]">JavaScript, Vue.js and React.js.</span></h6>
                  <h6 className="my-3 text-center">I'm also fluent in backend technologies<span className="text-[#1400FF]"> Flask and Express.js</span></h6>
                  <h6 className="my-3 text-center">I cherish the art of transforming ideas into vibrant digital experiences,bringing visions to life with every line of code.</h6>
                </div>
          </div>
          <div className="h-screen w-[40%] flex justify-end items-center">
                <div data-aos="fade-left" className="mx-10">
                  
                  <Image src={profile} alt=".." width={300} height={600} ></Image>
                </div>
          </div>
        </div>
        {/* footer */}
        <div className="py-5 flex bg-slate-900 justify-center">
          <div className="text-center">
            <h3 className="text-3xl text-[#1400FF]">FIND ME ON</h3>
            
            <div className="flex justify-center py-5">
                <a href="http://www.github.com/rupak-nalla" className="border-2 border-slate-800 rounded-3xl p-2 m-2 hover:border-slate-600">
                  <svg fill="#ffff"  xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32"><path d="M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z"></path></svg>
                </a>
                <a href="https://www.linkedin.com/in/rupaknalla/" className="border-2 border-slate-800 rounded-3xl p-2 m-2 hover:border-slate-600">
                  <svg fill="#ffff" className="hover:fill-blue-500 " xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32"><path d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fill-rule="evenodd"></path></svg>
                </a>
            </div>
            <h6>feel free to <span className="text-[#1400FF]">connect</span></h6>
          </div>
        </div>

        <footer className="bg-slate-950 p-3 flex justify-between items-center">
          <div className="">Designed and developed by Rupak Nalla</div>
          <div className="flex">
                <a href="http://www.github.com/rupak-nalla" className="border-2 border-slate-800 rounded-3xl p-2 m-2 hover:border-slate-600">
                  <svg fill="#ffff"  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path d="M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z"></path></svg>
                </a>
                <a href="https://www.linkedin.com/in/rupaknalla/" className="border-2 border-slate-800 rounded-3xl p-2 m-2 hover:border-slate-600">
                  <svg fill="#ffff" className="hover:fill-blue-500 " xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fill-rule="evenodd"></path></svg>
                </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
