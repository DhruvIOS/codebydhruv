import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView, useAnimate  } from "framer-motion"



import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



import videoBg from '../assets/videoBg.mp4'

import Skills from './Skills'


import myPicture from '../assets/images/myPicture.jpg'

import myPicture2 from '../assets/images/myPicture2.jpg'






const About = () => {


    const [scope, animate] = useAnimate()

    const [paraScope, animatePara] = useAnimate()

    const [picScope, picAnimate] = useAnimate()



    const aboutMe_inView = useInView(scope)

    const para_inView = useInView(paraScope)

    const pic_inView = useInView(picScope)


    useEffect(() => {

        if(aboutMe_inView) {
            animate(scope.current, {x: 0})
        }

  




    },[aboutMe_inView])


    useEffect(() => {



        if(para_inView) {

            animatePara(paraScope.current, {opacity: 1})

        }




    },[para_inView])

    useEffect(() => {



        if(pic_inView) {

            picAnimate(picScope.current, {x: 0})

        }




    },[pic_inView])











    return (






        <div classNameName='main'>



            <div className="contentWrapper">

            <section id="aboutMe">
                <div      className="AboutMe">

                    <div className="imgContainer">

                        <motion.img 
                                    initial={{ x: 300}}
                                    transition={{  ease: "circIn", delay: 0.8, duratin:0.9 }}
                
                                    ref={picScope}
                        
                        src={myPicture2}></motion.img> 
                    </div>
                    <motion.h1

                    initial={{ x: -300}}
                    transition={{  ease: "circIn", delay: 0.8, duratin:0.9 }}

                    ref={scope}
                       
 
                           
                    >Get to Know me!</motion.h1>

                    <hr></hr>
                    <motion.p
                    
                    initial={{ opacity: 0}}
                    transition={{  ease:"circIn", delay: 3, duratin: 4 }}

                    ref={paraScope}

                    >Welcome! I'm Dhruv Shah, a dedicated student of computer science with a strong passion for web development. Currently advancing my studies in computer science, I'm also actively self-teaching web development to complement  my academic knowledge.
                        <br />
                        <br />

                        I am on the lookout for exciting job opportunities where I can apply my skills and contribute meaningfully to innovative projects. With a solid foundation in computer science and a growing expertise in web development, I am eager to embark on a professional journey where I can continue to learn, grow, and make a positive impact.
                        <br />
                        <br />

                        If you're interested in discussing potential job opportunities or have a role that aligns with my skills and aspirations, I invite you to connect with me on LinkedIn. Let's explore how I can bring value to your team and contribute to your organization's success.
                        <br />
                        <br />

                        Connect with me on <a href='https://www.linkedin.com/in/dhruvshah23/' target='__blank'>LinkedIn</a> to explore potential job opportunities. I look forward to connecting with you and discussing how I can contribute to your team!</motion.p>

                </div>

         
              







            <Skills/>
            </section> 


            </div>







{/* 
            <div className="containerWrapper">

            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <section id="aboutMe">
                            <div className="AboutMe">
                                <h1>Get to Know me!</h1>
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

                                    Connect with me on <a href='https://www.linkedin.com/in/dhruvshah23/' target='__blank'>LinkedIn</a> to explore potential job opportunities. I look forward to connecting with you and discussing how I can contribute to your team!</p>

                            </div>
                        </section>
                    </div>
                    <div class="col-sm">

                        <section id="aboutMe">
                            <div className="AboutMe">
                                <h1>My <span>Skills</span></h1>
                                <hr></hr>


                            </div>






                        </section>
                    </div>
                </div>
            </div>

            </div> */}















        </div>





    )
}

export default About