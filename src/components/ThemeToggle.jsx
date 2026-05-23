"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <>
      <label className="switch">
        <input
          id="input"
          type="checkbox"
          checked={isDark}
          onChange={() => setTheme(isDark ? "light" : "dark")}
        />

        <div className="slider round">
          <div className="sun-moon">
            <svg id="moon-dot-1" className="moon-dot" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="moon-dot-2" className="moon-dot" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="moon-dot-3" className="moon-dot" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>


            <svg id="cloud-1" className="cloud-dark" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="cloud-2" className="cloud-dark" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="cloud-3" className="cloud-dark" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>

            <svg id="cloud-4" className="cloud-light" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="cloud-5" className="cloud-light" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="cloud-6" className="cloud-light" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
          </div>
        </div>
      </label>

      <style jsx>{`
        .switch {
          position: relative;
          display: inline-block;
          width: 60px;
          height: 34px;
        }

        #input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          inset: 0;
          cursor: pointer;
          background-color: #2196f3;
          transition: 0.4s;
          overflow: hidden;
        }

        .sun-moon {
          position: absolute;
          height: 26px;
          width: 26px;
          left: 4px;
          bottom: 4px;
          background-color: yellow;
          transition: 0.4s;
        }

        #input:checked + .slider {
          background-color: black;
        }

        #input:checked + .slider .sun-moon {
          transform: translateX(26px);
          background-color: white;
        }

        .moon-dot {
          opacity: 0;
          transition: 0.4s;
          fill: #b5b2b1;
        }

        #input:checked + .slider .moon-dot {
          opacity: 1;
        }

        .slider.round {
          border-radius: 34px;
        }

        .slider.round .sun-moon {
          border-radius: 50%;
        }

        
        #input:checked + .slider  {
          transform: translateY(0);
          opacity: 1;
        }

      `}</style>
    </>
  );
}