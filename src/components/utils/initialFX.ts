import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

let tlInstance: gsap.core.Timeline | null = null;
let split1: SplitText | null = null;
let split2: SplitText | null = null;
let split3: SplitText | null = null;

export function initialFX() {
  if (tlInstance) {
    tlInstance.kill();
    tlInstance = null;
  }
  if (split1) split1.revert();
  if (split2) split2.revert();
  if (split3) split3.revert();

  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  split1 = new SplitText(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );
  gsap.fromTo(
    split1!.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  let TextProps = { type: "chars,lines", linesClass: "split-h2" };

  split2 = new SplitText(".landing-h2-1", TextProps);
  split3 = new SplitText(".landing-h2-2", TextProps);

  gsap.set(split3!.chars, { opacity: 0, y: 50 });

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
      onComplete: () => {
        LoopText(split2!, split3!);
      },
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );
}

function LoopText(Text1: SplitText, Text2: SplitText) {
  const holdDuration = 3.0;
  const transitionDuration = 0.8;
  const stagger = 0.03;

  function hideText1() {
    if (tlInstance) tlInstance.kill();
    tlInstance = gsap.timeline()
      .fromTo(
        Text1.chars,
        { y: 0, opacity: 1 },
        { y: -50, opacity: 0, duration: transitionDuration, stagger: stagger, ease: "power3.inOut" }
      )
      .fromTo(
        Text2.chars,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: transitionDuration, stagger: stagger, ease: "power3.inOut" },
        "<"
      )
      .to({}, { duration: holdDuration })
      .add(() => {
        hideText2();
      });
  }

  function hideText2() {
    if (tlInstance) tlInstance.kill();
    tlInstance = gsap.timeline()
      .fromTo(
        Text2.chars,
        { y: 0, opacity: 1 },
        { y: -50, opacity: 0, duration: transitionDuration, stagger: stagger, ease: "power3.inOut" }
      )
      .fromTo(
        Text1.chars,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: transitionDuration, stagger: stagger, ease: "power3.inOut" },
        "<"
      )
      .to({}, { duration: holdDuration })
      .add(() => {
        hideText1();
      });
  }

  if (tlInstance) tlInstance.kill();
  tlInstance = gsap.timeline()
    .to({}, { duration: holdDuration })
    .add(() => {
      hideText1();
    });
}
