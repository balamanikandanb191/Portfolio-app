import React from "react";
import { Link } from "react-scroll";
import Parallax from "react-parallax";


import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Login from './components/Login'; 
 // Import the Login component

AOS.init();

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 50, // Offset value for triggering animations
      once: false, // Animation will happen every time you scroll up/down
    });
    const handleScroll = () => {
      Aos.refresh();
      // Animation duration in milliseconds
      // Refresh Aos on scroll to ensure animations trigger on scroll up as well
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {/* Navigation */}
      <nav className="navbar">
        <Link to="home" smooth={true} duration={1000}>Home</Link>
        <Link to="about" smooth={true} duration={1000}>About</Link>
        
        <Link to="skills" smooth={true} duration={1000}>Skills</Link>
        <Link to="experience" smooth={true} duration={1000}>Experience</Link>
        <Link to="projects" smooth={true} duration={1000}>Projects</Link>
        <Link to="achievements" smooth={true} duration={1000}>Achievements</Link> {/* Achievement Link Added */}
        <Link to="contact" smooth={true} duration={1000}>Contact</Link>
      </nav>

      <section id="home" className="home-section">
        <div className="content">
          {/* Image Positioned Near Name */}
          <img src="\images\IMG_20230216_170341_913.jpg" alt="Profile" />

          <div>
            <h1>BALAMANIKANDAN.S</h1>
            <p className="interactive-text">
              <span>Web Development Enthusiast |</span>
              <span>AWS Architect |</span>
              <span>MERN Stack Developer |</span>
              <span>Interactive Website Creator |</span>
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        
        <h2>About Me</h2>
        <div data-aos="flip-right">
        <div className="about-content">
          <p><strong>Location:</strong> Periyavalasu, Erode, Tamil Nadu</p>
          <p><strong>Pin Code:</strong> 638004</p>
          <p><strong>Phone:</strong> +91 98428 36526</p>
          <p><strong>Email:</strong> <a href="mailto:balamanikandanb191@gmail.com">balamanikandanb191@gmail.com</a></p>
          </div></div>
      </section>

      <section id="skills" className="skills-section">
        <h1>Skill Sets</h1>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Core Skills</h3>
            <ul>
              <li>MERN Stack</li>
              <li>AWS Cloud</li>
              <li>Web Development</li>
              <li>ReactJS</li>
              <li>JavaScript</li>
              <li>Android</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Programming Languages</h3>
            <ul>
              <li>JAVA</li>
              <li>Python (Basics)</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Tools</h3>
            <ul>
              <li>Figma</li>
              <li>AWS</li>
              <li>Android Studio</li>
              <li>Visual Basics</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="experience" >
        <h2>Experience</h2>
        <div data-aos="zoom-out-right">
        <div className="experience-item">
          <h3>Teachnook</h3>
          <p>March-June 2024</p>
          <p>Worked on web development to enhance my technical skills.</p>
          <img src="\images\Web development intership.jpg" alt="Teachnook Experience" />
        </div></div>
        <div data-aos="zoom-out-left">
        <div className="experience-item" >
          <h3>Cognifyz</h3>
          <p>March 2024</p>
          <p>Worked on Python development to enhance my technical skills.</p>
          <img src= "\images\DOC-20240314-WA0001_.jpg" alt="Cognifyz Experience" />
        </div></div>
        <div data-aos="zoom-out-right">
        <div className="experience-item" >
          <h3>Accent Techno Soft</h3>
          <p>June – August 2024</p>
          <p>Built and deployed web applications as part of my internship.</p>
          <img src="\images\IMG-20241002-WA0006 (1).jpg" alt="Accent Techno Soft Experience" />
        </div></div>
        <div data-aos="zoom-out-left">
        <div className="experience-item" >
          <h3>Cognizant</h3>
          <p>March 2024</p>
          <p>Worked on Python development to enhance my technical skills.</p>
          <img src= "\images\cognizant intership.jpg" alt="Cognifyz Experience" />
        </div></div>
        <div data-aos="zoom-out-right">
        <div className="experience-item">
          <h3>Marpu Foundation</h3>
          <p>September 2024</p>
          <p>Completed a writing internship focused on social awareness.</p>
          <img src="\images\IMG-20240919-WA0006.jpg" alt="Marpu Foundation Experience" />
        </div></div>

        <div data-aos="zoom-out-left">
        <div className="experience-item">
          <h3>Saiket System</h3>
          <p>March-April 2024</p>
          <p>Java Development Intern focusing on programming practices and solutions.</p>
          <img src="\images\s.balamanikandan (2)_page-0001.jpg" alt="Saiket System Experience" />
        </div></div>
        <div data-aos="zoom-out-right">
        <div className="experience-item">
          <h3>Novitech</h3>
          <p>October 2024</p>
          <p>Completed Full Stack Development and React.js training to improve my web development skills.</p>
          <img src="\images\BALA.pdf (1)_page-0001.jpg" alt="Novitech Experience" />
        </div></div>
        <div data-aos="zoom-out-left">
        <div className="experience-item">
          <h3>TechnoHack Edutech</h3>
          <p>February 2024</p>
          <p>Completed Java Development training to improve my web development skills.</p>
          <img src="\images\technohack intership.jpg" alt="TechnoHack Edutech Experience" />
        </div></div>
        <div data-aos="zoom-out-right">
        <div className="experience-item">
          <h3>Teachnook</h3>
          <p>April 2024</p>
          <p>Completed Cloud Computing training to improve my web development skills.</p>
          <img src="\images\cloud computing.jpg" alt="Teachnook Cloud Computing Experience" />
        </div>
        </div>
      </section>

      <section id="projects" >
        <h2>Projects</h2>
        <div data-aos="flip-left">
        
        <div className="project-item smart-helmet">
          <h3>SMART HELMET PROJECT</h3>
          <div className="project-content">
            <img src="\images\FARO_sleek_visibility_first_smart_helmet_hero.webp" alt="Smart Helmet Project demonstrating safety features" />
            <p>Smart Helmet integrates advanced safety features like accident and alcohol detection.</p>
          </div>
        </div></div>
        <div data-aos="flip-right">
        <div className="project-item smart-light">
          <h3>Smart Traffic Light</h3>
          <div className="project-content">
            <img src="\images\maxresdefault.jpg" alt="Smart Traffic Light using AI for better traffic flow" />
            <p>Smart traffic light adjusts signals in real-time using sensors and AI to enhance safety and reduce traffic.</p>
          </div></div>
        </div>
        <div data-aos="flip-left">
        <div className="project-item accessible-artist">
          <h3>Accessible Artist Project</h3>
          <div className="project-content">
            <img src="\images\1000_F_557390117_TpEj2uXSRrD9x09vVHKY6FuxnJjAsl4n.jpg" alt="Accessible Artist tool enabling art creation for disabled individuals" />
            <p>This project empowers individuals with disabilities to create art using voice commands.</p>
          </div></div>
        </div>
      </section>

      <section id="achievements" className="achievements-section">
        <h1>Achievements</h1>
        <div className="achievements-container">
          <div className="achievement">
            <h3>NPTEL Online Certification</h3>
            <p>Successfully completed the Cloud Computing course with a score of 62%.</p>
          </div>
          <div className="achievement">
            <h3>1st Prize in Innovation Day</h3>
            <p>Won for the Smart Helmet project featuring advanced safety mechanisms like accident and alcohol detection.</p>
          </div>
          <div className="achievement">
            <h3>3rd Prize in Cryptic Hunt</h3>
            <p>Secured this achievement at the Henosis event hosted by Dr. N.G.P. College.</p>
          </div>
          <div className="achievement">
            <h3>Internships</h3>
            <p>Completed internships in Java Development, Cloud Computing, Django Full-Stack, and Social Awareness, gaining valuable experience.</p>
          </div>
        </div>
      </section>

      <section id="contact">
  <h2>Contact</h2>
  <form className="contact-form">
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" required />
    </div>
    <div>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />
    </div>
    <div>
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" required></textarea>
    </div>
    <button type="submit">Send Message</button>
  </form>
  
  <div className="resume-section">
  <h3 style={{ color: 'white', fontSize: '24px', textAlign: 'center', marginBottom: '10px' }}>

    Download My Resume</h3>
    


    <a href="/path/to/your-resume.pdf" download="My_Resume.pdf" className="resume-button">
      <button type="button">Download Resume</button>
    </a>
  </div>
</section>

      
      {/* Footer Section */}
      <footer id="footer">
        <div className="footer-content">
          <h3>Connect with Me</h3>
          <ul className="social-links">
            <li>
              <a href="https://www.linkedin.com/in/balamanikandan-s-4978a72b1/" target="_blank" title="LinkedIn">
                <img src="\images\icons8-linkedin-48.png"  width="30px" /> 
              </a>
            </li>
            <li>
              <a href="https://github.com/balamanikandanb191" target="_blank" title="GitHub">
                <img src="\images\icons8-github-50.png" width="30px" /> 
              </a>
            </li>
            <li>
              <a href="https://www.naukri.com/mnjuser/profile" target="_blank" title="Naukri">
                <img src="\images\naukri_gnb_logo.svg"  width="40px"/> 
              </a>
            </li>
          </ul>
        </div>
       
      </footer>
    </div>
  );
}


export default App;
