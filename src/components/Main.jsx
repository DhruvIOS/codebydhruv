import React, { useRef, useState, useEffect } from 'react'
import { motion } from "framer-motion"
import pdf from '../assets/pdf/DhruvShah_Resume.pdf';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



import videoBg from '../assets/videoBg.mp4'


import myPicture from '../assets/images/myPicture.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import About from './About'

import Skills from './Skills'





const Main = () => {
    const hamburger = useRef(null);

    const header = useRef(null);

    const navLinks = useRef(null)

    let hamburgerOpen = false;


        const openResume = () => {
            window.open(pdf, '_blank')
        }



    function mobileMenu() {
        if (!hamburgerOpen) {
            navLinks.current.classList.toggle("show-navlinks");
            hamburger.current.classList.toggle("hamburger-off")
        } else {
            hamburger.current.classList.remove('show-navlinks');
            hamburger.current.classList.remove("hamburger-off")

            hamburgerOpen = false;
        }

    }

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);

            header.current.classList.toggle("sticky", window.scrollY > 50)

            // console.log('scorlled')
        });
    }, []);









    return (






        <div classNameName='main'>
            <video src={videoBg}  autoPlay={true} 
    loop={true}
    controls={false} 
    playsInline
    muted  />

            <div className="">
                <header ref={header}>
                    <a href="#" className='logo'>Dhruv Shah</a>

                    <div className="hamburger-on" ref={hamburger} onClick={mobileMenu}>
                    </div>

                    <ul className="nav-links" ref={navLinks}>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#aboutMe">ABOUT ME</a></li>
                        <li><a href="#">PROJECTS</a></li>
                        <li><a href="https://github.com/dhruvios" target='__blank'>GITHUB</a></li>

                    </ul>
                </header>

                <motion.div initial={{x: '-100vw'}} animate={{x: 0}}  transition={{  ease: "circIn" }}className="mainContent">
                    <h1 className='intro'>Hello, I'm <motion.span  initial={{opacity: 0, y: -250}} animate={{opacity: 1, y:0}}  transition={{  ease: "anticipate", delay: 1 }}>Dhruv Shah</motion.span>, a student <br></br> studying Information Systems and Full Stack Development.
                    
                   
                    
                    </h1>

                    <div className='resume'>


                        <motion.button
                        initial={{opacity: 0}} animate={{opacity: 1}}  transition={{  ease: 'linear' ,delay: 2 }}
                        
                        class="button-63" role="button" onClick={openResume}>Resume</motion.button>

                    </div>


                    






                    
                </motion.div>

                <div className="learnMore">
                    <p >Learn more what i do </p>

                    <a href='#aboutMe'><i class="fa-solid fa-angle-down"></i></a>

                </div>
            </div>

           

            <About />









           

       

            

        </div>


    )
}

export default Main