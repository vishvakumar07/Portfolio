import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Expertise.css";

gsap.registerPlugin(ScrollTrigger);

const Expertise = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  
  const devSecRef = useRef<HTMLDivElement>(null);
  const devBgRef = useRef<HTMLHeadingElement>(null);
  const devFgRef = useRef<HTMLHeadingElement>(null);
  
  const aiSecRef = useRef<HTMLDivElement>(null);
  const aiBgRef = useRef<HTMLHeadingElement>(null);
  const aiFgRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Soft floating orb animation
    const orbTween = gsap.to(orbRef.current, {
      x: "12vw",
      y: "15vh",
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Developer Section Reveal
    const devTl = gsap.timeline({
      scrollTrigger: {
        trigger: devSecRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      }
    });

    devTl.fromTo(devBgRef.current, 
      { opacity: 0, y: 60, scale: 0.95 },
      { opacity: 0.9, y: 0, scale: 1, duration: 1.2, ease: "power4.out" }
    )
    .fromTo(devFgRef.current,
      { opacity: 0, x: -80 },
      { opacity: 1, x: 0, duration: 1.2, ease: "power4.out" },
      "-=0.8"
    );

    // AI/ML Section Reveal
    const aiTl = gsap.timeline({
      scrollTrigger: {
        trigger: aiSecRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      }
    });

    aiTl.fromTo(aiBgRef.current, 
      { opacity: 0, y: 60, scale: 0.95 },
      { opacity: 0.9, y: 0, scale: 1, duration: 1.2, ease: "power4.out" }
    )
    .fromTo(aiFgRef.current,
      { opacity: 0, x: -80 },
      { opacity: 1, x: 0, duration: 1.2, ease: "power4.out" },
      "-=0.8"
    );

    // Wait a brief tick for the DOM to paint, then refresh ScrollTrigger bounds
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(refreshTimer);
      orbTween.kill();
      devTl.kill();
      aiTl.kill();
    };
  }, []);

  return (
    <div className="expertise-container" ref={containerRef} id="expertise">
      {/* Floating Gradient Orb */}
      <div className="glow-orb" ref={orbRef}></div>
      
      {/* Developer Section */}
      <section className="expertise-section" ref={devSecRef}>
        <div className="expertise-content">
          <span className="expertise-tag">Building Digital Experiences</span>
          <div className="text-overlap-container">
            <h2 className="expertise-bg-text" ref={devBgRef}>DEVELOPER</h2>
            <h3 className="expertise-fg-text" ref={devFgRef}>FULL STACK</h3>
          </div>
        </div>
      </section>

      {/* AI/ML Engineer Section */}
      <section className="expertise-section" ref={aiSecRef}>
        <div className="expertise-content">
          <span className="expertise-tag">Creating Intelligent Systems</span>
          <div className="text-overlap-container">
            <h2 className="expertise-bg-text" ref={aiBgRef}>AI/ML</h2>
            <h3 className="expertise-fg-text" ref={aiFgRef}>ENGINEER</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Expertise;
