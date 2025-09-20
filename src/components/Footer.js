import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-28  p-3 md:pb-0 md:flex md:flex-row md:justify-between">
      <Link to="/">
        <p className="font-medium text-base  mb-5 ">Kashish Chaudhary</p>
      </Link>

      <div className="links text-base font-medium text-neutral-500 flex flex-col md:flex-row md:gap-10 gap-1">
        <a href="mailto:kashishch888@gmail.com">
          <p>Email</p>
        </a>
        <a href="https://www.linkedin.com/in/kashishnaresh/">
          <p>LinkedIn</p>
        </a>
        <a href="https://github.com/kashish-naresh">
          <p>Github</p>
        </a>
        <a href="https://stackoverflow.com/users/31329720/kashish-chaudhary">
          <p>Stack Overflow</p>
        </a>
        <a href="https://medium.com/@kashish-naresh">
          <p>Medium</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
