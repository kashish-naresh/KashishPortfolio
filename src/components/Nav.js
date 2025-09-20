import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  const links = [
    { name: "Works", path: "/works" },
    { name: "CV", path: "/CV" },
    { name: "OpenS", path: "/CV/#features" },
  ];

  return (
    <div className="fixed top-5 inset-x-5 flex flex-row justify-between z-50">
      <Link to="/">
        <div className="flex flex-row gap-2 backdrop-blur-md bg-opacity-60 bg-[#f8f8f8] rounded-lg px-3 py-1">
          <img
            src={`${process.env.PUBLIC_URL}/img/k-sign.png`}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="hidden md:flex flex-col text-sm">
            <p className="font-medium">Kashish Chaudhary</p>
            <p className="font-medium text-neutral-500">Software Engineer</p>
          </div>
        </div>
      </Link>

      <div className="flex flex-row items-center gap-5">
        <div className="flex flex-row items-center justify-center gap-3 backdrop-blur-md bg-opacity-60 bg-[#f8f8f8] text-neutral-500 font-medium rounded-lg py-2 px-3">
          {links.map((link, i) => (
            <Link key={i} to={link.path}>
              <p
                className={`px-3 py-1 rounded ${
                  location.pathname + location.hash === link.path
                    ? "text-black "
                    : "text-neutral-500"
                }`}
              >
                {link.name}
              </p>
            </Link>
          ))}
        </div>

        <div className="bg-black hidden md:flex items-center justify-center backdrop-blur-md bg-opacity-60 text-white font-medium rounded-3xl md:py-3 md:px-5">
          <a href="mailto:kashishch888@gmail.com">
            <p>Contact me</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
