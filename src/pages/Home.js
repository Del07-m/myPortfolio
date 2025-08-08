import React from "react";
import "../styles/Home.css"; // Your existing styles


function Home() {
  return (
    <div className="hero-container">
      <div className="video-background">
      <video autoPlay muted loop playsInline id="bg-video">
  <source src="https://res.cloudinary.com/dlhf9klfj/video/upload/v1752512995/bg-video3_dm9kxi.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
  
        <div className="hero-content">
          <div className="hero-text">
            <h1>FULLSTACK WEB DEVELOPER</h1>
            <h2>Hi, I'm Del Martins</h2>
            <p>
              I'm a Web developer focused on building high-performance <br />
              digital experiences that engage users and deliver results.
            </p>
          </div>
  
          <div className="hero-image">
            <img src="/images/Pic2.jpg" alt="Del Martins" />
          </div>
          </div>  

        </div>  

        
  
        {/* Skills Section */}
    <section className="skills-section" id="skills">
  <h2 className="skills-title">My Skills</h2>
  <div className="skills-container">
    <div className="skill">
      <span>HTML</span>
      <div className="progress-bar"><div className="progress" style={{ width: "90%" }}></div></div>
    </div>
    <div className="skill">
      <span>CSS</span>
      <div className="progress-bar"><div className="progress" style={{ width: "85%" }}></div></div>
    </div>
    <div className="skill">
      <span>JavaScript</span>
      <div className="progress-bar"><div className="progress" style={{ width: "50%"}}></div></div>
    </div>
    <div className="skill">
      <span>React</span>
      <div className="progress-bar"><div className="progress" style={{ width: "65%" }}></div></div>
    </div>
    <div className="skill">
      <span>Tailwind CSS</span>
      <div className="progress-bar"><div className="progress" style={{ width: "40%" }}></div></div>
    </div>
    <div className="skill">
      <span>Python</span>
      <div className="progress-bar"><div className="progress" style={{ width: "55%" }}></div></div>
    </div>
    <div className="skill">
      <span>Django</span>
      <div className="progress-bar"><div className="progress" style={{ width: "70%" }}></div></div>
    </div>
  </div>
</section>


    </div>  
  );
}


export default Home;