import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "MathGaze",
    category: "Ed-Tech Web App",
    year: "2026",
    stack: "React.js, Supabase, MongoDB, JavaScript",
    description:
      "Interactive web-based math learning platform helping children understand concepts through engaging problem-solving activities, secure authentication, progress tracking, and interactive quizzes.",
    image: "/images/placeholder.webp",
    featured: true,
  },
  {
    number: "02",
    title: "Vision Path",
    category: "AI / Mobile App",
    year: "2025",
    stack: " Flutter, YOLOv8n, TensorFlow Lite (TFLite), ESP32, Ultrasonic Sensors",
    description:
      "Mobile-based AI navigation system using Google ML-Kit to detect real-time obstacles and provide audio and haptic feedback for visually impaired users — a low-cost, portable accessibility solution.",
    image: "/images/placeholder.webp",
    featured: true,
  },
  {
    number: "03",
    title: "CGPA Calculator",
    category: "Web Utility",
    year: "2024",
    stack: "HTML, CSS, JavaScript",
    description:
      "A simple CGPA Calculator that allows students to input grades and credits for each course and automatically computes the Cumulative Grade Point Average.",
    image: "/images/placeholder.webp",
    featured: false,
  },
];

const Work = () => {
  useGSAP(() => {
    const getTranslateX = () => {
      const boxes = document.querySelectorAll(".work-box");
      if (!boxes.length) return 0;
      
      const flex = document.querySelector(".work-flex") as HTMLElement;
      if (!flex) return 0;

      let cardWidth = 600;
      if (window.innerWidth <= 1200) {
        cardWidth = 350;
      } else if (window.innerWidth <= 1400) {
        cardWidth = 450;
      }

      const parentLeft = flex.parentElement?.getBoundingClientRect().left || 0;
      const marginLeft = parseFloat(window.getComputedStyle(flex).marginLeft) || 0;
      const initialLeft = parentLeft + marginLeft;

      const lastCardLeft = (boxes.length - 1) * cardWidth;
      const lastCardCenter = initialLeft + lastCardLeft + cardWidth / 2;
      const desiredCenter = window.innerWidth / 2;

      return lastCardCenter - desiredCenter;
    };

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${getTranslateX()}`,
        scrub: true,
        pin: true,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: () => -getTranslateX(),
      ease: "none",
      duration: 1,
    });

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(refreshTimer);
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.number}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.number}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category} · {project.year}</p>
                  </div>
                </div>
                <h4>Tech Stack</h4>
                <p>{project.stack}</p>
                <p className="work-desc">{project.description}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
