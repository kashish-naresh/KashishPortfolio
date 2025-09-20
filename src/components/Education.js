import React from "react";
import styles from "../content.module.css";

const Education = () => {
  return (
    <div>
      <div className="mt-40 ml-5 btn-custom">Education</div>
      <div className={`w-[0.85fr]  ml-5 mt-5 ${styles.wrapper}`}>
        <p>
          I am pursuing <b>Bachetor of Technology</b> in Computer Science with
          specialization in{" "}
          <b>
            my favourite subject Artificial Intelligence and Machine Learning.
          </b>
          <br />
          Throughout my studies, I developed a <b>diverse skill set</b>{" "}
          including expertise in Problem Solving, AI, Software development,{" "}
          <b>FullStack</b>, 3D design.
        </p>
      </div>
    </div>
  );
};

export default Education;
