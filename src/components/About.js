import React from "react";
import styles from "../content.module.css";
import ImageCV from "./ImageCV";

const About = () => {
  return (
    <>
      <div className=" mt-[8rem] md:mt-[18rem]  ml-5 btn-custom">About</div>
      <div className="">
        <div className={`lg:w-[46%] ml-5 mt-5 ${styles.wrapper} `}>
          <p>
            I am an <b>India-based software engineer and developer.</b> <br />{" "}
            My experience spans various fields, including Full Stack, custom
            software, animated websites, SEO, and AI.
            <br />
            <br />I approach development by blending{" "}
            <b>enthusiasm with strategic thinking</b> while{" "}
            <b>guiding and inspiring</b> other to deliver impactful, innovative
            work. I oversee complex projects and{" "}
            <b>ensure that every design decision aligns with the vision</b> and
            objectives. My goal is to deliver meaningful solutions that are not
            only visually strong but also align with{" "}
            <b>
              business strategy, enhance user experience, and drive tangible
              results.
            </b>
          </p>
          <ImageCV />
        </div>
      </div>
    </>
  );
};

export default About;
