import React from "react";
import Image1 from "../../assets/women2.jpg";

import { PiLockKeyDuotone } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";



const Banner = () => {
  return (
    <div className="min-h-[550px] py-12 flex gap-24 items-center justify-center sm:py-0 mb-10">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section  */}
          <div data-aos="zoom-in">
            <img
              src={Image1}
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
              alt=""
            />
          </div>

          {/* Text details section  */}
          <div className="flex flex-col gap-6 justify-center sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              Winter Sale upto 50% Off
            </h1>
            <p data-aos="fade-up" className="text-sm text-gray-500 tracking-wide leading-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" data-aos-delay="0" className="flex items-center gap-4">
                <PiLockKeyDuotone className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100" />
                <p>Quality Products</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="200" className="flex items-center gap-4">
                <CiDeliveryTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100"/>

                <p>Fast Delivery</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="400" className="flex items-center gap-4">
                <RiSecurePaymentLine className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-red-100"/>

                <p>Easy Payment method</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="600" className="flex items-center gap-4">
                <BiSolidOffer className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100"/>

                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
