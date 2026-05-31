import { PropsWithChildren, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import Expertise from "./Expertise";
import setSplitText from "./utils/splitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  useEffect(() => {
    // Staggered refreshes to ensure perfect alignment after lazy components, images, and fonts load
    const timeouts = [100, 500, 1000, 2000].map(delay =>
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, delay)
    );

    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);

    return () => {
      timeouts.forEach(clearTimeout);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <Expertise />
            <WhatIDo />
            <Career />
            <Work />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
