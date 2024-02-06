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
                    <h1>ABOUT <span>ME</span></h1>
                    <hr></hr>
                    <p>Welcome! I'm Dhruv Shah, a dedicated student of computer science with a strong passion for web development. Currently advancing my studies in computer science, I'm also actively self-teaching web development to complement  my academic knowledge.
                        <br />
                        <br />

                        I am on the lookout for exciting job opportunities where I can apply my skills and contribute meaningfully to innovative projects. With a solid foundation in computer science and a growing expertise in web development, I am eager to embark on a professional journey where I can continue to learn, grow, and make a positive impact.
                        <br />
                        <br />

                        If you're interested in discussing potential job opportunities or have a role that aligns with my skills and aspirations, I invite you to connect with me on LinkedIn. Let's explore how I can bring value to your team and contribute to your organization's success.
                        <br />
                        <br />

                        Connect with me on <a href='https://www.linkedin.com/in/dhruvshah23/'>LinkedIn</a> to explore potential job opportunities. I look forward to connecting with you and discussing how I can contribute to your team!</p>


                </div>

                




            </section>

            

        </div>


    )
}

export default Main