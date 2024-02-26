import React from "react";

import Image1 from "../../assets/shirt.png";
import Image2 from "../../assets/shirt2.png";
import Image3 from "../../assets/shirt3.png";

import { TiStarFullOutline } from "react-icons/ti";

const ProductsData = [
  {
    id: 1,
    img: Image1,
    title: "casual wear",
    aosDelay: "0",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt numquam veritatis deleniti non illum eos!",
  },
  {
    id: 2,
    img: Image2,
    title: "Printed shirt",
    aosDelay: "200",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt numquam veritatis deleniti non illum eos!",
  },
  {
    id: 3,
    img: Image3,
    title: "women shirt",
    aosDelay: "400",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt numquam veritatis deleniti non illum eos!",
  },
];

const TopProducts = () => {
  return (
    <div className="mt-[120px] mb-12">
      <div className="container">
        {/* Hero Section  */}
        <div className="text-center mb-[95px] max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-md text-primary">
            Top Rated Products For You
          </p>
          <h1 data-aos="fade-up" className="text-4xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-sm text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
            laboriosam laborum, hic, quas ducimus inventore a possimus assumenda
          </p>
        </div>
        {/* Body section  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-20 place-items-center">
          {ProductsData.map((data) => (
            <div data-aos="zoom-in" data-aos-delay={data.aosDelay} key={data.id} className="rounded-2xl mt-[100px] bg-white hover:bg-black/80 hover:text-white relative shadow-xl duration-300 group max-w-[500px]">
              <div className="h-cover mb-3">
                {/* image section  */}
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[200px] block mx-auto transform -translate-y-20 group-hover:scale-110 duration-300 drop-shadow-md"
                />
                {/* Details section  */}
                <div className="text-center">
                  {/* star rating  */}
                  <div className="w-full flex gap-1 items-center justify-center">
                    <TiStarFullOutline className="text-yellow-400" />
                    <TiStarFullOutline className="text-yellow-400" />
                    <TiStarFullOutline className="text-yellow-400" />
                    <TiStarFullOutline className="text-yellow-400" />
                  </div>
                  <h1 className="text-xl font-bold">{data.title}</h1>
                  <h6 className="text-base mt-3 text-gray-500 line-clamp-2">
                    {data.description}
                  </h6>
                  <button data-aos="zoom-in"  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">
                    ORDER NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
