import React from "react";
import image from "../../assets/orange-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${image})`,
  backgrounPosition: "center",
  backgrounRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Suscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="bg-gray-100 text-white mb-5"
      style={BannerImg}
    >
      <div className="container mb-20 backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-[70%] mx-auto">
          <h1 className="text-2xl text-center sm:text-center sm:font-semibold sm:text-4xl">
            Get Notified About New Products
          </h1>
          <input
            type="text"
            placeholder="Enter Your Email"
            data-aos="fade-up"
            className="w-full p-3 text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Suscribe;
