"use client"
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import { useTypewriter,Cursor } from "react-simple-typewriter";
import myImage from "../../../public/images/undraw_Programming_re_kg9v-removebg-preview.png"
import profile from "../../../public/images/profile.jpeg"
import lib from "../../../public/images/lib-man-dp.png"
import taskman from "../../../public/images/task-man.png"
import apt from "../../../public/images/apt.png"
import ai_bot from "../../../public/images/ai-bot.png"
import music from "../../../public/images/music-web.png"
import { Krona_One } from "next/font/google";
import 'aos/dist/aos.css';
import AOS from "aos";
import NavBar from "../components/nav-bar";
const krona_one=Krona_One({
  subsets:['latin'],
  weight:['400']
})

export default function Projects(){
    useEffect(() => {
        AOS.init({once: true});
      }, []);  
    return (
        <main className="h-screen .blend-hard-light bg-[url(../../public/images/grid-pattern-2.png)] bg-center bg-no-repeat bg-cover">
            <div className="bg-gradient-to-b from-black via-transparent to-black h-screen">
                <NavBar/>
                <div className={krona_one.className}>
                    <div className="flex justify-center items-center h-screen">
                        <h3 data-aos="flip-up" className="text-3xl">MY PROJECTS</h3>
                    </div>
                    
                </div>
                <div className="min-h-screen p-3">
                    <div className="grid grid-cols-3 gap-3 p-5 ">
                        
                        {/* LIBRARY MANAGEMENT SYSTEM */}
                        <div data-aos="zoom-in-up" className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <Image className="rounded-t-lg" src={lib} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="https://github.com/rupak-nalla/Library-management-system">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Library Management System</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                A comprehensive platform that allows users to request, read, and rate books with JWT authentication. Users receive daily reminders, while administrators access monthly reports and manage books through CRUD operations. Admins can approve or reject book requests and revoke user access, all supported by caching for enhanced performance.
<br></br><strong>Technologies</strong>:Flask, SQLAlchemy, Vue.js, JWT, Celery, Redis, SQLite
                                </p>
                                <div className="absolute bottom-4 left-4">
                                    <a href="https://github.com/rupak-nalla/Library-management-system" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <svg className="mx-2" fill="#ffff"  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path d="M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z"></path></svg>
                                        GITHUB
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* TASK MANAGER */}
                        <div data-aos="zoom-in-up" className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="https://github.com/rupak-nalla921/task-manager-v2">
                                <Image className="rounded-t-lg" src={taskman} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="https://github.com/rupak-nalla921/task-manager-v2">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Task Manager</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Developed a task manager application utilizing Next.js for the frontend and Express.js for the backend, ensuring a responsive user experience. Implemented Supersend for efficient notification management, enabling users to receive timely reminders for task deadlines. Users can easily add tasks and mark them as complete, enhancing productivity and organization.
                                    <br /><strong>Technologies</strong>: Next.js, Express.js, Supersend, Tailwind.
                                </p>
                                <div className="bottom-4 left-4">
                                    <a href="https://github.com/rupak-nalla921/task-manager-v2" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <svg className="mx-2" fill="#ffff"  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path d="M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z"></path></svg>
                                        GITHUB
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* APTITUDE TEST WEB SITE */}
                        <div  data-aos="zoom-in-up" className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="https://github.com/rupak-nalla/aptitue-test-ui">
                                <Image className="rounded-t-lg" src={apt} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="https://github.com/rupak-nalla/aptitue-test-ui">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Aptitude Test Website</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">It’s an aptitude test website developed for AVINYA 2K24, featuring color-coded indicators for response statuses to enhance user experience. A Flask-RESTful API was built to ensure seamless integration between the Next.js frontend and Flask backend. The strengths of both frameworks were leveraged to deliver an efficient and user-friendly testing experience.<br></br><strong>Technologies</strong>: Python, Flask, Next.js,Tailwind CSS.</p>
                                <div className="flex absolute bottom-4 left-4 items-center">

                                    <a href="https://github.com/rupak-nalla/aptitue-test-ui" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <svg className="mx-2" fill="#ffff"  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path d="M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z"></path></svg>
                                        GITHUB
                                    </a>
                                    <a href="https://aptitude-test-avinya.vercel.app/" className="mx-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* AI CHAT BOT card */}
                        <div data-aos="zoom-in-up" className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="https://github.com/rupak-nalla/chatbot">
                                <Image className="rounded-t-lg" src={ai_bot} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="https://github.com/rupak-nalla/chatbot">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">AI Chat Bot</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">It’s a sophisticated ChatBot application developed for a project expo using LEMMA AI. The application seamlessly incorporates the Vue.js framework to enable efficient and responsive rendering of the chatbot interface. A highly user-friendly and intuitive design facilitates seamless interaction between users and the chatbot, enhancing the overall user experience. <br /> <strong> Technologies</strong>: Vue.js, Bootstrap,LEMMA AI.</p>
                                <div className="absolute bottom-4 left-4">
                                    <a href="https://github.com/rupak-nalla/chatbot" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <svg className="mx-2" fill="#ffff"  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path d="M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z"></path></svg>
                                        GITHUB
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* MUSIC WEB APP */}
                        <div data-aos="zoom-in-up" className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="https://github.com/rupak-nalla/Music-app">
                                <Image className="rounded-t-lg" src={music} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="https://github.com/rupak-nalla/Music-app">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Music Web application</h5>
                                </a>
                                <p className="mb-3  font-normal text-gray-700 dark:text-gray-400">t’s a feature-rich music streaming web app developed for the IIT Madras MAD1 Project. This multi-user platform allows users to listen to songs and enjoy their leisure time. Users can register as creators, upload songs, create albums, and monitor performance through a comprehensive dashboard. Additionally, users can rate songs and create their own playlists, further enhancing their engagement with the platform.<br /><strong>Technologies</strong>: Python, Flask, SQLAlchemy, HTML, CSS, JS, SQLite.</p>
                                <div className="bottom-4 left-4">
                                    <a href="https://github.com/rupak-nalla/Music-app" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <svg className="mx-2" fill="#ffff"  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path d="M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z"></path></svg>
                                        GITHUB
                                    </a>
                                </div>
                            </div>
                        </div>
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