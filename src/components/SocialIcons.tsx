import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect, useRef } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  const animRef = useRef<number>(0);

  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;
    if (!social) return;

    const spans = Array.from(social.querySelectorAll("span"));
    const states = spans.map((span) => {
      const rect = span.getBoundingClientRect();
      return {
        span,
        link: span.querySelector("a") as HTMLElement,
        rect,
        mouseX: rect.width / 2,
        mouseY: rect.height / 2,
        currentX: rect.width / 2,
        currentY: rect.height / 2,
      };
    });

    const onMouseMove = (e: MouseEvent) => {
      states.forEach((s) => {
        // Refresh rect in case of scroll/resize
        const r = s.span.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;

        if (x > 0 && x < r.width && y > 0 && y < r.height) {
          s.mouseX = x;
          s.mouseY = y;
        } else {
          s.mouseX = r.width / 2;
          s.mouseY = r.height / 2;
        }
      });
    };

    const tick = () => {
      states.forEach((s) => {
        s.currentX += (s.mouseX - s.currentX) * 0.1;
        s.currentY += (s.mouseY - s.currentY) * 0.1;
        if (s.link) {
          s.link.style.setProperty("--siLeft", `${s.currentX}px`);
          s.link.style.setProperty("--siTop", `${s.currentY}px`);
        }
      });
      animRef.current = requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", onMouseMove);
    animRef.current = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://github.com/vishvakumar07" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/vishvakumar07/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="https://instagram.com/vishva_ry" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </span>
      </div>
      <a
        className="resume-button"
        href="https://drive.google.com/file/d/1fbaSZ0De8jqFmw2wkWrTDIh4UWlNPRmx/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
