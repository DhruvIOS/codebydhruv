import React, { useRef, useState, useEffect } from 'react'



import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



import videoBg from '../assets/videoBg.mp4'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'







const Main = () => {
    const hamburger = useRef(null);

    const header = useRef(null);

    const navLinks = useRef(null)

    let hamburgerOpen = false;




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

            console.log('scorlled')
        });
    }, []);









    return (






        <div classNameName='main'>
            <video src={videoBg} autoPlay loop muted />

            <div className="">
                <header ref={header}>
                    <a href="#" className='logo'>Dhruv Shah</a>

                    <div className="hamburger-on" ref={hamburger} onClick={mobileMenu}>
                    </div>

                    <ul className="nav-links" ref={navLinks}>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#aboutMe">ABOUT ME</a></li>
                        <li><a href="#">PROJECTS</a></li>
                        <li><a href="#">GITHUB</a></li>

                    </ul>
                </header>

                <div className="mainContent">
                    <h1 className='intro'>Hello, I'm <span>Dhruv Shah</span>, a student <br></br> studying computer science and web development. 

</h1>
                </div>

                <div className="learnMore">
                    <p >Learn more what i do </p>
                    
                    <a href='#aboutMe'><i class="fa-solid fa-angle-down"></i></a>

                </div>
            </div>


            <section id="aboutMe">
                    <div className="AboutMe">
                        {/* <h1>About <span>Me</span></h1>
                        <p>I'M A FULL TIME COLLEGE STUDENT LEARNING COMPUTER SCIENCE FOR SOFTWARE ENGEERING. <br />SELF TEACHING MY SELF WEB DEVELOPMENT SO I CAN LAND A JOB AS A BACKEND WEB DEVELOPER. <br /> I ALSO MAKE SIDE PROJECTS THAT SUIT ME AND WHICH IS MOST COMFORTABLE FOR ME. <br/ > <a>YOU CAN FIND MY PROJECTS HERE</a></p> */}
                        <h1>More coming soon</h1>
                    
                    </div>


                </section>

        </div>


    )
}

export default Main