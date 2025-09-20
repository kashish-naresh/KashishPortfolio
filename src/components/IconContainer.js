import React, { useState } from "react";

const IconContainer = () => {
  const [currentImage, setCurrentImage] = useState(
    "https://cdn.pixabay.com/photo/2018/03/09/22/19/annual-rings-3212803_1280.jpg"
  );

  const [images] = useState([
    "https://cdn.pixabay.com/photo/2023/04/28/02/43/car-7955720_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/08/13/15/30/elephant-9772462_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/03/09/22/19/annual-rings-3212803_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/07/04/10/46/vintage-car-7300881_1280.jpg",
  ]);

  // Function to handle icon click and change image
  const handleIconClick = (index) => {
    // For now, using the same image for all icons as requested
    // You can replace this with different images for each icon later
    setCurrentImage(images[index]);
  };

  return (
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
          class="w-6 h-6 text-gray-800 group-hover/icon4:text-gray-900 relative z-10 transition-all duration-300 group-hover/icon4:scale-110"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 11V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4H5m14-6V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4h-1"
          />
        </svg>
      </div>
    </div>
  );
};

export default IconContainer;
