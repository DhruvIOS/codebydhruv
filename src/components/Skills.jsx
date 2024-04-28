import React, { useRef, useState, useEffect } from 'react'

import { motion, useInView, useAnimate  } from "framer-motion"


import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



import videoBg from '../assets/videoBg.mp4'











const Skills = () => {


    const [skilTagScope, skillTagAnimate] = useAnimate()

    const [skillsScope, skilssAnimate] = useAnimate()





    const skilTag_inView = useInView(skilTagScope)

    const skills_InView = useInView(skillsScope)


    useEffect(() => {

        if(skilTag_inView) {
            skillTagAnimate(skilTagScope.current, {opacity: 1, y:0})
        }

      
  




    },[skilTag_inView]);

    useEffect(() => {

        if(skills_InView) {
            skilssAnimate(skillsScope.current, {opacity: 1})
        }

  




    },[skills_InView])







    return (






        <div classNameName=''>



            <motion.section id="skills"
            
            initial={{ y: -100, opacity:0}}
            transition={{  ease: "linear", delay: 3,  }}

            ref={skilTagScope}
            
            >
                <div className="MySkills">
                    <h1
                    
                    
                    
                    
                    >Skills</h1>
                    <hr></hr>

                    <motion.div className="SkillsWrapper"
                                         initial={{ opacity:0}}
                                         transition={{  ease:"linear" , delay: 5, }}
                     
                                         ref={skillsScope}
                    
                    >

                      
                        <div className="SkillsContainer">
                            <h2>Front End</h2>
                            <div>Html</div>
                            <div>Javascript</div>
                            <div>React</div>
                           
                            
                    

                        </div>

                        <div className="SkillsContainer">
                            <h2>Back End</h2>

                            <div>React</div>
                            <div>Node.js</div>
                            <div>Express.js</div>
                            <div>MongoDB</div>
    

                        </div>
                        <div className="SkillsContainer">
                            <h2>Styling</h2>
                            <div>CSS</div>
                            <div>Taildwind</div>
                            <div>Bootstrap</div>

                        </div>
                    </motion.div>


                </div>

            </motion.section>


        </div>

    )
}

export default Skills