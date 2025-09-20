import React from "react";
import styles from "../content.module.css";

const Features = () => {
  return (
    <div>
      <div id="features" className="mt-40 btn-custom ">
        Features
      </div>
      <div className={`mt-5 ${styles.wrapper}`}>
        <a href="https://medium.com/@kashish-naresh/introducing-collabfs-with-real-time-sync-fec07f068d2d">
          <svg
            className="w-6 h-6  text-[#737373] absolute "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 26 26"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
            />
          </svg>

          <p className="ml-8">
            COllabFS <b>Open Source </b> npm package
          </p>
        </a>
      </div>
    </div>
  );
};

export default Features;
