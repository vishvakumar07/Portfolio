import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              VISHVA
              <br />
              <span>KUMAR B</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Software Engineer</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">AI/ML ENGINEER</div>
              <div className="landing-h2-2">DEVELOPER</div>
            </h2>
            <p className="landing-tagline">
              Building intelligent systems, web applications &amp; real-world solutions.
            </p>
            <p className="landing-degree">
              Currently pursuing B.E CSE (AIML) at Sri Eshwar College of Engineering.
            </p>
            <div className="landing-stats">
              <div className="landing-stat">
                <span className="stat-value">3+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="landing-stat">
                <span className="stat-value">5+</span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="landing-stat">
                <span className="stat-value">8.18</span>
                <span className="stat-label">Current CGPA</span>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
