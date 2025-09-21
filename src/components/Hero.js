import React from "react";
import { useState } from "react";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(
    "https://cdn.pixabay.com/photo/2023/05/21/18/43/f-22-8009103_1280.jpg"
  );

  const [images] = useState([
    "https://cdn.pixabay.com/photo/2023/04/28/02/43/car-7955720_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/01/09/14/27/cows-8497701_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/05/21/18/43/f-22-8009103_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/07/04/10/46/vintage-car-7300881_1280.jpg",
  ]);

  // Function to handle icon click and change image
  const handleIconClick = (index) => {
    // For now, using the same image for all icons as requested
    // You can replace this with different images for each icon later
    setCurrentImage(images[index]);
  };

  return (
    <>
      <div className=" md:px-16 lg:px-60 place-self-center flex flex-col justify-center items-center md:grid  md:grid-cols-2 lg:grid-cols-3  lg:w-[60%] md:min-w-[90%] flex-wrap md:grid-rows-[auto_1fr] gap-4 ">
        <div className=" bg-[#f8f8f8] md:pt-8 rounded-3xl w-72 md:w-full lg:h-full flex  flex-col md:col-span-2 lg:col-span-1 lg:row-span-3 lg:row-start-1 lg:col-start-1">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="https://cdn.pixabay.com/photo/2025/08/13/15/30/elephant-9772462_1280.jpg"
            />
            <source
              media="(min-width: 768px)"
              srcSet="https://cdn.pixabay.com/photo/2025/05/30/17/15/mountains-9631825_1280.jpg"
            />
            <img
              src="https://cdn.pixabay.com/photo/2016/11/19/20/16/astronaut-1840936_1280.jpg"
              alt="Mountain landscape"
              className="max-w-full max-h-full place-self-center p-3 h-52 md:h-96 lg:h-80 pt-2 rounded-3xl lg:rounded-[3rem]"
            />
          </picture>
          <p className="w-64 md:w-[35rem] lg:w-full font-medium py-3 px-3 text-neutral-500">
            <span className="  text-black">Software engineering </span>
            transforms architectural vision into meticulously crafted systems
            through precise implementation.
          </p>
        </div>
        <div
          style={{
            background: "linear-gradient(1200deg, #ededed 30%, #fafafa 50%)",
          }}
          className=" bg-[#ededed] grayscale hover:grayscale-0 active:grayscale-0 rounded-xl  w-72 h-80 md:h-96 lg:h-72 md:w-full flex items-center justify-center md:col-span-1 md:row-span-2  flex-col lg:row-span-2 lg:row-start-1 lg:col-start-2"
        >
          <img
            src="https://cdn.pixabay.com/photo/2024/02/24/20/55/cards-8594729_1280.jpg"
            alt=""
            className="w-64 h-40 object-cover  rounded-3xl"
          />
          <p className="pt-3 pb-7 lg:pb-3 font-medium text-center text-neutral-500">
            Bring Idea <br /> to Life
          </p>
        </div>
        <div className=" bg-[#fafafa] font-medium w-72 md:w-full p-5 md:col-span-1 md:row-span-1 md:col-start-1 md:row-start-4  lg:col-start-2 lg:row-start-3 rounded-2xl">
          <span className="">25+</span>
          <p className="pb-4 text-neutral-500">
            Build and designed <br /> Websites
          </p>
          <span className="">5+</span>
          <p className="text-neutral-500">Open Source Contribution</p>
        </div>
        <div className="group md:col-span-1 md:row-span-2 lg:row-start-2 lg:col-start-3 relative">
          {/* Image that changes on icon click */}
          <img
            src={currentImage}
            alt="Gallery item"
            className="transition-all object-cover duration-300 w-72 h-72 md:h-96 lg:h-72 md:w-full rounded-3xl"
          />

          {/* Icons container - appears on hover */}
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out absolute left-3 top-6 z-20 flex flex-col justify-center items-center gap-8 w-16 p-3 py-6 rounded-[2rem] backdrop-blur-md back bg-opacity-60 bg-[#f8f8f8]">
            {/* Icon 1 - No initial white background */}
            <div
              className="group/icon1 relative flex justify-center items-center cursor-pointer"
              onClick={() => handleIconClick(0)}
            >
              <div className="absolute w-10 h-10 bg-white rounded-full scale-0 opacity-0 group-hover/icon1:scale-100 group-hover/icon1:opacity-100 transition-all duration-300 ease-out"></div>
              <svg
                className="w-6 h-6 text-gray-800 group-hover/icon1:text-gray-900 relative z-10 transition-all duration-300 group-hover/icon1:scale-110"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {/* Icon 2 - No initial white background */}
            <div
              className="group/icon2 relative flex justify-center items-center cursor-pointer"
              onClick={() => handleIconClick(1)}
            >
              <div className="absolute w-10 h-10 bg-white rounded-full scale-0 opacity-0 group-hover/icon2:scale-100 group-hover/icon2:opacity-100 transition-all duration-300 ease-out"></div>
              <svg
                className="w-6 h-6 text-gray-800 group-hover/icon2:text-gray-900 relative z-10 transition-all duration-300 group-hover/icon2:scale-110"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"
                />
              </svg>
            </div>

            {/* Icon 3 - Has initial white background */}
            <div
              className="group/icon3 relative flex justify-center items-center cursor-pointer"
              onClick={() => handleIconClick(2)}
            >
              <div className="absolute w-10 h-10 bg-white rounded-full scale-100 opacity-100 transition-all duration-300 ease-out"></div>
              <svg
                className="w-6 h-6 text-gray-900 relative z-10 transition-all duration-300 group-hover/icon3:scale-110"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>

            {/* Icon 4 - No initial white background */}
            <div
              className="group/icon4 relative flex justify-center items-center cursor-pointer"
              onClick={() => handleIconClick(3)}
            >
              <div className="absolute w-10 h-10 bg-white rounded-full scale-0 opacity-0 group-hover/icon4:scale-100 group-hover/icon4:opacity-100 transition-all duration-300 ease-out"></div>
              <svg
                className="w-6 h-6 text-gray-800 group-hover/icon4:text-gray-900 relative z-10 transition-all duration-300 group-hover/icon4:scale-110"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4H5m14-6V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4h-1"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-[#fafafa] rounded-xl  font-medium   w-72 md:h-full md:w-full px-3 py-3 md:col-span-1 md:row-span-1 md:col-start-2 md:row-end-3 lg:row-span-1 lg:row-start-1 lg:col-start-3 ">
          <span className="font-medium">Mentality</span>
          <p className=" pt-2 pb-3 text-neutral-500">
            Continuously evolving post-launch, guided by feedback to maintain a
            user-focused design.
          </p>
          <div className="i-do-mentality-buttons flex flex-row flex-wrap overflow-hidden justify-start gap-2">
            <button className="px-3 py-1.5 rounded-lg bg-[#f0e7d1]">
              Launch
            </button>
            <button className="px-3 py-1.5 rounded-lg bg-[#fafafa]">
              Feedback
            </button>
            <button className="px-3 py-1.5 rounded-lg bg-[#fafafa]">
              Refine
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
