import React from "react";

import Img1 from "../../assets/women.png";
import Img2 from "../../assets/women2.jpg";
import Img3 from "../../assets/women3.jpg";
import Img4 from "../../assets/women4.jpg";
import Img5 from "../../assets/women.png";

import { TiStarFullOutline } from "react-icons/ti";

const ProductsData = [
    {
        id:1,
        img: Img1,
        Title: "Women Ethics",
        rating: 4.4,
        author: "unknown",
        aosDelay: "0",
    },
    {
        id:2,
        img: Img2,
        Title: "Women2",
        rating: 5.0,
        author: "unknown",
        aosDelay: "200",
    },
    {
        id:3,
        img: Img3,
        Title: "Women3",
        rating: 4.1,
        author: "unknown",
        aosDelay: "400",
    },
    {
        id:4,
        img: Img4,
        Title: "Women4",
        rating: 4.5,
        author: "unknown",
        aosDelay: "600",
    },
    {
        id:5,
        img: Img5,
        Title: "Women5",
        rating: 4.6,
        author: "unknown",
        aosDelay: "800",
    }

]

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header Section  */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p  data-aos="fade-up" className="text-md text-primary">Top selling products for you</p>
          <h1 data-aos="fade-up" className="text-4xl font-bold">Products</h1>
          <p data-aos="fade-up" className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            eaque iusto recusandae corporis harum natus itaque obcaecati
            voluptatem dignissimos modi!
          </p>
        </div>
        {/* Body Section  */}
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                {/* card section  */}
                {ProductsData.map((data) => (
                    <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id}>
                        <img src={data.img} alt="" className="h-[220px] w-[150px] object-cover rounded-md" />
                        <div>
                            <h3 className="font-semibold">{data.Title}</h3>
                            <p className="text-sm text-gray-600">{data.author}</p>
                            <div className="flex item-center gap-2">
                                <TiStarFullOutline className="text-yellow-400 mt-1" />
                                <span>{data.rating}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
   
  );
};

export default Products;
