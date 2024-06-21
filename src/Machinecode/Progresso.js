import React, { useEffect, useState } from "react";
import "./Progresso.css";
const Progresso = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === 100) {
          clearInterval(timer);
          return prevProgress;
        } else {
          return prevProgress + 1;
        }
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="container">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        {progress}%
      </div>
    </div>
  );
};

export default Progresso;
