import { useEffect, useRef, useState } from "react";
import Features from "../About/Features";
import MovingBanner from "../Banner/MovingBanner";
import ProjectList from "./ProjectList";
import SetupInfo from "../Banner/SetupInfo";

export default function ProjectBox() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div ref={ref} className="flex flex-col items-center justify-center">
        <h1
          className={`font-bold text-8xl opacity-0 ${
            inView ? "slide-in-right" : ""
          } `}
        >
          <span className="text-primary">O</span>ur
        </h1>
        <h1
          className={`font-bold text-8xl outline-text opacity-0 ${
            inView ? "slide-in-left" : ""
          }`}
        >
          Project
        </h1>
        <p className="text-body max-w-[400px] text-center mt-11">
          VIONIX가 참여한 LED Display 시공 프로젝트입니다.
        </p>
        <ProjectList />
        <MovingBanner />
        <div className="mb-10"></div>
        <SetupInfo />
      </div>
    </div>
  );
}
