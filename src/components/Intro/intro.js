import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import resume from '../../assets/RESUME_SUMIT.pdf';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">HELLO,</span>
                <span className="introText">
                    I'm
                    <span className="introName">
                        Sumit Kumar Jaiswal
                        <br />
                    </span>
                    Website Designer
                </span>
                <p className="introPara">
                    I am a skilled and passionate web designer with experience in creating <br />
                    visually appealing and user-friendly websites.
                </p>
                {/* Fixing the button */}
                <a href={resume} download="RESUME_SUMIT.pdf">
                    <button className="btn">
                        <img className="btnImg" src={btnImg} alt="Hire me button" /> Hire me
                    </button>
                </a>
            </div>
            <img src={bg} alt="Background" className="bg" />
        </section>
    );
};

export default Intro;
