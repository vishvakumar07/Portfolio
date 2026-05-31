import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h2 className="about-title">
          About <span>Me</span>
        </h2>
        <p className="para">
          I'm a B.E CSE (AIML) student at Sri Eshwar College of Engineering,
          passionate about building intelligent systems and full-stack web
          applications. I enjoy solving real-world problems through code —
          from assistive AI tools to scalable web platforms.
        </p>

        <div className="about-tags">
          {[
            "AI & Machine Learning",
            "DSA",
            "Open Source",
            "Full Stack Dev",
            "UI/UX Design",
          ].map((tag) => (
            <span className="about-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className="about-quick-info">
          <div className="about-info-item">
            <span className="info-label">Degree</span>
            <span className="info-value">B.E CSE (AIML)</span>
          </div>
          <div className="about-info-item">
            <span className="info-label">Year</span>
            <span className="info-value">III year</span>
          </div>
          <div className="about-info-item">
            <span className="info-label">College</span>
            <span className="info-value">Sri Eshwar College of Engineering</span>
          </div>
          <div className="about-info-item">
            <span className="info-label">CGPA</span>
            <span className="info-value">8.18 (Upto 3rd Sem)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
