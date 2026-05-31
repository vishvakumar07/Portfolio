import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-progress">
              <div className="career-dot"></div>
            </div>
          </div>

          {/* ── Internship ── */}
          <div className="career-info-box">
            <div className="career-left">
              <div className="career-role">
                <h4>MERN Stack Developer Intern</h4>
                <h5>The Better Tomorrow</h5>
                <span className="career-type-badge">Internship</span>
              </div>
              <h3 className="career-year">Dec 2025</h3>
            </div>
            <div className="career-spacer"></div>
            <p className="career-desc">
              Completed a 15-day MERN Stack internship covering React, Node.js,
              Express, MongoDB, AWS deployment (EC2 &amp; S3), and CI/CD with
              GitHub Actions.
            </p>
          </div>

          {/* ── Education ── */}
          <div className="career-info-box">
            <div className="career-left">
              <div className="career-role">
                <h4>B.E CSE (AIML)</h4>
                <h5>Sri Eshwar College of Engineering</h5>
                <span className="career-type-badge">Education</span>
              </div>
              <h3 className="career-year">2024 – 2028</h3>
            </div>
            <div className="career-spacer"></div>
            <p className="career-desc">CGPA: 8.18 (Upto 3rd Semester)</p>
          </div>

          <div className="career-info-box">
            <div className="career-left">
              <div className="career-role">
                <h4>HSC (12th Grade)</h4>
                <h5>St. James Matric Hr. Sec. School</h5>
                <span className="career-type-badge">Education</span>
              </div>
              <h3 className="career-year">2022 – 2024</h3>
            </div>
            <div className="career-spacer"></div>
            <p className="career-desc">Percentage: 89.5%</p>
          </div>

          <div className="career-info-box">
            <div className="career-left">
              <div className="career-role">
                <h4>SSLC (10th Grade)</h4>
                <h5>Infant Jesus Matric Hr. Sec. School</h5>
                <span className="career-type-badge">Education</span>
              </div>
              <h3 className="career-year">2021 – 2022</h3>
            </div>
            <div className="career-spacer"></div>
            <p className="career-desc">Percentage: 88.8%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
