import React from 'react'
import './works.css'
import Portfolio1 from '../../assets/portfolio-1.png'
import Portfolio2 from '../../assets/portfolio-2.png'
import Portfolio3 from '../../assets/portfolio-3.png'
import Portfolio4 from '../../assets/portfolio-4.png'
import Portfolio5 from '../../assets/portfolio-5.png'
import Portfolio6 from '../../assets/portfolio-6.png'

const Works = () => {
  return (
    <section id='works'>
      <h2 className="workTitle">PROJECTS</h2>
      <span className="workDesc">I take pride in playing attention to the smallest details and making sure that my work in pixel perfect . I am exicited to bring my skills and expirence to help businesses achieve their goals and create a strong online presences.</span>
      <div className="workImgs">
      <a href="https://shoes-store-roan.vercel.app/#nav" target='blank'><img src={Portfolio1} alt="" className="workImg" /> </a>
      <a href="https://cloth-store-zeta.vercel.app/" target='blank'><img src={Portfolio2} alt="" className="workImg" /></a>
      <a href="https://blog-three-peach-61.vercel.app/" target="_blank"><img src={Portfolio4} alt="" className="workImg" /></a>
       <a href="https://calculater-eight-lime.vercel.app/" target="_blank"><img src={Portfolio6} alt="" className="workImg" /></a>
        <img src={Portfolio5} alt="" className="workImg" />
        <img src={Portfolio3} alt="" className="workImg" />
      </div>
      <button className="workBtn">see More</button>
    </section>
  )
}

export default Works
