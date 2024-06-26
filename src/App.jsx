import React, {useEffect, useState, useRef} from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useGlitch } from 'react-powerglitch'
import './App.css';

const titles = [
  { text: "Computer Science student", color: "#FF6B6B", shadow: "0 0 10px #FF6B6B" },
  { text: "Full-stack Developer", color: "#4ECDC4", shadow: "0 0 10px #4ECDC4" },
  { text: "Youtuber", color: "#FF0000", shadow: "0 0 10px #FF0000" },
  { text: "Video Editor", color: "#45B7D1", shadow: "0 0 10px #45B7D1" },
  { text: "Music Composer", color: "#98D8C8", shadow: "0 0 10px #98D8C8" },
  { text: "Robotic Dancer", color: "#F7B801", shadow: "0 0 10px #F7B801" },
  { text: "AI Enthusiast", color: "#7B68EE", shadow: "0 0 10px #7B68EE" },
  { text: "Problem Solver", color: "#FFA07A", shadow: "0 0 10px #FFA07A" },
];


const App = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [titleArray, setTitleArray] = useState(titles);

  useEffect(() => {
    // Move the first title to the end of the array
    setTitleArray(prevArray => {
      const newArray = [...prevArray];
      const firstItem = newArray.shift();
      newArray.push(firstItem);
      return newArray;
    });

    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titleArray.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);


  const glitch = useGlitch({
    "timing": {
      "duration": 2000,
      "easing": "ease-in-out"
    },
    "glitchTimeSpan": {
      "start": 0.9,
      "end": 1.0
    },
    "shake": {
      "velocity": 50,
    },
    "slice": {
      "velocity": 25,
    }
  });

  return (
    <div className="app">
      <header>
        <div className="logo">Cheng Zeng</div>
        <nav>
          <ul>
            <li><a href="https://www.linkedin.com/in/cz5/" 
            target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin style={{width: '1.5rem', height: '1.5rem'}}/>
            </a></li>
            <li><a href="https://github.com/ch3ngz" 
            target="_blank" rel="noopener noreferrer">
            <AiFillGithub style={{width: '1.5rem', height: '1.5rem'}}/>
            </a></li>
            <li><a href="https://www.youtube.com/@c3z05" 
            target="_blank" rel="noopener noreferrer">
            <AiFillYoutube style={{marginRight: '2rem', 
              width: '1.5rem', height: '1.5rem'}}/>
            </a></li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="hero">
          <h1>Hello, I'm Cheng!</h1>
          <h2>I'm a</h2>
          <h2 className="changing-title"  key={titleIndex}  style={{
            marginTop: '-0.5rem', justifyContent: 'center', 
            color: titleArray[titleIndex].color, 
            textShadow: titleArray[titleIndex].shadow}}>
            <span ref={glitch.ref}>{titles[titleIndex].text}.</span></h2>
          <div className="scroll-indicator">
            <AiOutlineArrowDown style={{width: '2rem', height: '2rem', marginTop: '1rem'}} />
          </div>
        </div>

        <div className="hero2">
          <section className="about">
            <h1 className="about-title">
              About me
            </h1>
            <p className="about-description">
              I am a <span className="highlight">Computer Science</span> student at the University of Waterloo. I'm
              passionate about <span className="highlight">AI + software applications</span>. I'm especially excited about virtual reality and the{' '}
              <span className="highlight">metaverse</span>. I'm also passionate about learning new
              languages and frameworks!
            </p>
            <button className="resume-button">See my resume</button>
          </section>

          <section className="skills">
            <h2 className="section-title">
              My <span className="highlight">Skills</span>
            </h2>
            <p className="skills-description">
              These are some skills that I've learned from working in previous{' '}
              <span className="highlight">engineering internships</span> and producing{' '}
              <span className="highlight">technical side projects</span>.
            </p>
            <div className="skill-icons">
              <div className="skill-icon red"></div>
              <div className="skill-icon green"></div>
              <div className="skill-icon blue"></div>
              <div className="skill-icon yellow"></div>
              <div className="skill-icon purple"></div>
              <div className="skill-icon pink"></div>
            </div>
          </section>

          <section className="experience">
            <h2 className="section-title">
              Places I've <span className="highlight">learned</span> and{' '}
              <span className="highlight">worked</span>.
            </h2>
            <p className="experience-description">Acquiring Industry Skills at Impactful Businesses</p>
            <div className="experience-card">
              <div className="company-tags">
                <span className="company-tag">SPS Commerce</span>
                <span className="company-tag">BCS Automation</span>
                <span className="company-tag">Legion Studios</span>
                <span className="company-tag">HealthSmart.ai</span>
              </div>
              <div className="job-details">
                <h3 className="job-title">Software Engineer Intern (Backend Team)</h3>
                <p className="job-date">Jan 2024 – April 2024</p>
                <p className="job-description">
                  Engineered background processing services on the company analytics platform using
                  ASP.NET Core to automate extraction and retrieval of retailer (Amazon, Sketchers, &
                  Walmart) data from SQL Server DBs.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      
    </div>
  );
};

export default App;


