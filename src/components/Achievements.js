import React from "react";
import styles from "../content.module.css";

const Achievements = () => {
  return (
    <div>
      <div className="mt-40 ml-5 btn-custom w-[0.8fr]">Achievements</div>
      <div className={`mt-5 ml-5 ${styles.wrapper}`}>
        <ul>
          <li>
            Achieved 3rd position in college <b>coding competition</b>
          </li>
          <li>
            LeetCode: Solved 500+ <b>DSA and Problem Solving</b> questions with
            13 badges
          </li>
          <li>
            Earned <b>5-star ratings</b> in Java, Python, C, Problem Solving,
            and SQL on HackerRank
          </li>
          <li>
            Solved 50+ <b>CSES Problem Set</b>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Achievements;
