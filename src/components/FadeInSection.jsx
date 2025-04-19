import React, { useEffect, useRef, useState } from "react";
import "./styles/FadeInSection.css"; // Make sure this CSS file exists

const FadeInSection = ({ children }) => {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    const ref = domRef.current;
    if (ref) observer.observe(ref);

    return () => ref && observer.unobserve(ref);
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "visible" : ""}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
