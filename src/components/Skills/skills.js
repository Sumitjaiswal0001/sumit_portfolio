import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesing from '../../assets/website-design.png';
import AppDesing from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>What I do</span>
            <span className='skillDesc'>
                Hi, I'm <strong>Sumit Kumar Jaiswal</strong>, a passionate and dedicated MERN stack developer. I specialize in building dynamic, scalable, and responsive web applications using the power of MongoDB, Express.js, React, and Node.js.


                With a strong foundation in front-end and back-end development, I take pride in delivering seamless user experiences and efficient solutions. My journey in software development includes integrating machine learning models into web applications, crafting responsive UIs, and collaborating with cross-functional teams to create impactful projects.

                When I’m not coding, I enjoy exploring the latest trends in technology and refining my skills to stay ahead in this ever-evolving field.
            </span>
            <div className='skillBars'>
                <div className="skillBar">
                    <img className='skillBarImg' src={UIDesign} alt='' />
                    <div className='skillBarText'>
                        <h2>UI/UX design</h2>
                        <p>Hi, I’m, a creative UI/UX Designer passionate about crafting intuitive and visually appealing digital experiences. I specialize in user research, wireframing, prototyping, and designing responsive interfaces that seamlessly combine functionality and aesthetics.

                            With expertise in tools like Figma, Adobe XD, and Sketch, I deliver user-centered solutions that align with business goals. My mission is to turn complex problems into simple, engaging designs that delight users.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img className='skillBarImg' src={WebDesing} alt='' />
                    <div className='skillBarText'>
                        <h2>Web Design</h2>
                        <p> Hi, I’m, a creative and detail-oriented Web Designer with a passion for building stunning and responsive websites. I specialize in crafting user-friendly designs that balance functionality and aesthetics, ensuring a seamless experience across all devices.

                            With expertise in HTML, CSS, JavaScript, and design tools like Figma and Adobe XD, I transform ideas into visually appealing and functional websites. My goal is to create engaging digital experiences that leave a lasting impression.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img className='skillBarImg' src={AppDesing} alt='' />
                    <div className='skillBarText'>
                        <h2>App design</h2>
                        <p>Hi, I’m, a passionate App Designer focused on creating intuitive, user-friendly, and visually appealing mobile app experiences. I specialize in designing interfaces that combine seamless functionality with stunning visuals, ensuring a smooth and engaging user journey.

                            With expertise in tools like Figma, Adobe XD, and Sketch, I bring ideas to life through thoughtful user research, wireframing, and prototyping. My mission is to design apps that not only look great but also solve real-world problems effectively.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
