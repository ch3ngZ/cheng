import React, {useEffect, useState} from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillYoutube, AiFillBook } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useGlitch } from 'react-powerglitch'
import './App.css';

const titles = [
  { text: "Computer Science student", color: "#71B3FF", shadow: "0 0 10px #71B3FF" },
  { text: "Full-stack Developer", color: "#FF0000", shadow: "0 0 10px #FF0000" },
  { text: "Youtuber", color: "#00FF00", shadow: "0 0 10px #00FF00" },
  { text: "Video Editor", color: "#FFFF00", shadow: "0 0 10px #FFFF00" },
  { text: "Music Composer", color: "#00FFFF", shadow: "0 0 10px #00FFFF" },
  { text: "Robotic Dancer", color: "#FFD3B5", shadow: "0 0 10px #FFD3B5" },
  { text: "AI Enthusiast", color: "#ff1493", shadow: "0 0 10px #ff1493" },
  { text: "Problem Solver", color: "#f8f8ff", shadow: "0 0 10px #f8f8ff" },
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
    }, 1500);

    return () => clearInterval(interval);
  }, [titles]);


  const glitch = useGlitch({
    "timing": {
      "duration": 1500,
      "easing": "ease-in-out"
    },
    "glitchTimeSpan": {
      "start": 0.8,
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
            <AiFillYoutube style={{ 
              width: '1.5rem', height: '1.5rem'}}/>
            </a></li>
            <li><a href="" 
            target="_blank" rel="noopener noreferrer">
            <AiFillBook style={{marginRight: '2rem', 
              width: '1.5rem', height: '1.5rem'}}/>
            </a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="intro">
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
        </section>

        <h1 className="section-title">Who?</h1>
        <section className="who">
          <ul className="who-description">
            <li>I am a <span className="highlight">Computer Science</span> learner at the University of Waterloo.</li>
            <li>I am interested in <span className="highlight">AI + software applications</span> to create impact.</li>
            <li>I am passionate about the <span className="highlight">metaverse</span> to fulfill people's dreams.</li>
          </ul>
          <img src="src/Me.jpg" alt="Myself" />
        </section>

        <button className="resume-button">See my resume</button>

        <section className="what">
          <h2 className="section-title">
            What?
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

        <section className="how">
          <h2 className="section-title">
            How?
          </h2>
        </section>
      </main>
      
    </div>
  );
};

export default App;


