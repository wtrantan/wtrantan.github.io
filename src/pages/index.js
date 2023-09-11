import Head from 'next/head'
import {BsFillMoonStarsFill, BsTextCenter} from 'react-icons/bs';
import {AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useState } from "react";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { RSC_MODULE_TYPES } from 'next/dist/shared/lib/constants';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  
  //background

   /*
    let stars = document.getElementById('stars');
    let mountains_front = document.getElementById('mountains_front')
 
    window.addEventListener('scroll', function()){
    
    }
*/
  return (
    <div>
      <Head>
        <title>William Trantan Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main  className=" bg-gradient-to-r from-indigo-900 to-gray-900 " >
           
        <section className="home scroll-smooth min-h-screen bg-stars1 bg-fixed items-center bg-no-repeat bg-cover bg-size ">
       <div className="bg-mount2 bg-fixed bg-bottom"> 
        
          <div className=" min-h-screen bg-mount1 items-center bg-no-repeat bg-cover ">
          <nav className=" py-10 p-10 pl-10 mb-12 flex justify-between text-white">
            <h1 className="font-burtons text-xl">My Portfolio Website</h1>
            <ul className=" px-10 flex items-center top-0 right-0 fixed m-10">

            <li className=" group"><Link to="home" spy={true} smooth={true} offset={0} duration={700} className="transition ease-in-out
               group-hover:scale-110 delay-75 bg-gray-800
               text-white px-6 py-2 border-none rounded-2xl ml-8">Home</Link></li>
             
                <li className="group "><Link to="about" spy={true} smooth={true} offset={0} duration={700} className="transition ease-in-out
               group-hover:scale-110 delay-75 bg-gray-800
               text-white px-6 py-2 border-none rounded-2xl ml-6">About</Link></li>
              <li className="group"><Link to="projects" spy={true} smooth={true} offset={0} duration={700} className=" transition ease-in-out
               group-hover:scale-110 delay-75 bg-gray-800
               text-white px-6 py-2 border-none rounded-2xl ml-8">Projects</Link></li>
             
             
            </ul>
          </nav>

          <div className="text-center py-10">
          
            <h2 className=" transition ease-in-out duration-300 sm:text-2xl text-2xl py-2 font-medium text-purple-300 md:text-5xl">
              William Trantan
            </h2>
            
           
            <h3 className=" py-2 sm:text-lg text-lg text-white md:text-3xl">
              University of California, Merced Student
            </h3>
            
           
            <p className="text-sm sm:text-sm py-5 leading-8 text-gray-200 max-w-xl mx-auto md:text-xl">
            Welcome to my portfolio website! This site is where I will showcase my projects and everything about me. I built this website using react!
            </p>
            
              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-400">
                <div className="relative group">
                  <div className="absolute transition ease-in-out delay-75  group-hover:bg-gradient-to-r from-orange-300 to-purple-400 group-hover:scale-110 inset-0 rounded-3xl blur"></div>
                  <a href="https://github.com/wtrantan" target="_blank"><AiFillGithub className="relative transition ease-in-out delay-75  group-hover:scale-110 group-hover:text-gray-200"/></a>
                </div>
                <div className="relative group">
                  <div className="absolute transition ease-in-out delay-75 group-hover:bg-gradient-to-r from-blue-600 to-purple-400 inset-0 rounded-md blur"></div>
                    <a href="https://www.linkedin.com/in/wtrantan/" target="_blank"><AiFillLinkedin className="relative transition ease-in-out delay-75 group-hover:scale-110 group-hover:text-gray-200"/></a>
                </div>
                <div className="relative group">
                  <div className="absolute transition ease-in-out delay-75 group-hover:bg-gradient-to-r from-pink-300 to-purple-400 group-hover:scale-110 inset-0 rounded-md blur"></div>
                  <a href="https://www.instagram.com/w_trantan/" target="_blank"><AiFillInstagram className="relative transition ease-in-out delay-75  group-hover:scale-110  group-hover:text-gray-200"/></a>
                  </div>
              </div>
            
            
            <div className="mx-auto bg-gradient-to-r from-orange-500 to-purple-400 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <img src="mirror-rm.png" layout="fill" objectFit="cover" className="relative"/>
            
            </div>
  
          </div>
          </div>
          </div>
          </section>

          <section className="about">
          <div className="min-h-screen bg-gradient-to-t from-[#1e1431] to-black bg-blend-lighten bg-fixed items-center bg-no-repeat bg-cover bg-size">
         
          <div className="mx-10 lg:flex gap-10 ">
            <div className=" mx-20  text-center shadow-2xl p-10 rounded-xl my-20 bg-gradient-to-r  from-pink-500 to-gray-800 delay-75  flex-1">
            
              <h3 className=" text-purple-300 md:text-4xl text-3xl font-medium pt-8 pb-2  ">
              About Me
              </h3>
              <p className="py-2  md:text-lg text-xl text-gray-200">
              I was born in Minnesota, and I moved to San Jose! I am a Junior pursuing a Bachelor’s in Computer Science & Engineering at the University of California, Merced. I was always interested in learning to code and make fun projects ever since I was young. I have experience in C++, C, SQL, Java, Python, HTML/CSS, JavaScript, Tailwind, and React. Apart from Computer Science I&apos;m interested in Hockey, Water polo, Swimming, and Video Games.
              </p>
              <div className="mx-auto  w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96 rounded-3xl ">
              <img src="santacruz.jpg" layout="fill" objectFit="cover" className="relative"/>
              </div>
              <div className="relative group  pt-10">
              <a className="  transition ease-in-out group-hover:scale-110 delay-75 group-hover:bg-gray-200 text-white bg-gray-800 group-hover:text-gray-700 px-4 py-2 border-none rounded-md "
                  href="resume.pdf" target="_blank">Resume</a>
              </div>
              
            </div>
            </div>
          </div>
          </section>
          <section className="projects">
          <div className="min-h-screen bg-mount3 bg-center bg-cover bg-blend-lighten bg-fixed items-center bg-no-repeat ">
          
          <div className="mx-10 lg:flex gap-">
            <div className=" mx-20 text-center shadow-2xl p-10 rounded-xl my-20 bg-gradient-to-r  from-pink-500 to-gray-800 delay-75  flex-1">
            
              <h3 className=" text-purple-300 md:text-4xl text-3xl font-medium pt-8 pb-2  ">
              Projects
              </h3>
              <p className="py-2 md:text-lg text-xl text-gray-200">
              I have compiled all my projects I have worked on here. <a>You can also check my Github!</a>
              
              </p>
              
              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-400">
                <div className="relative group">
                  <div className="absolute transition ease-in-out delay-75  group-hover:bg-gradient-to-r from-orange-300 to-purple-400 group-hover:scale-110 inset-0 rounded-3xl blur"></div>
                  <a href="https://github.com/wtrantan" target="_blank"><AiFillGithub className="relative transition ease-in-out delay-75  group-hover:scale-110 group-hover:text-gray-200"/></a>
                </div>
                </div>
              
            </div>
            </div>
          </div>
          </section>
        
             
      </main>
    </div>
  );
}
