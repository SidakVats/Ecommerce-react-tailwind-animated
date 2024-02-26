import React from "react";
import Image1 from "../../assets/women.png";
import Image2 from "../../assets/shopping.png";
import Image3 from "../../assets/sale.png";
import Slider from "react-slick"

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "upto 50% off on all Men's Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur illum natus, animi impedit beatae quis, molestias sed accusamus sapiente enim dicta dolore cumque officia ab porro voluptatibus laborum reprehenderit. Incidunt fuga libero tempore iusto officiis sequi, vel neque at voluptas iure optio quisquam consequuntur modi eligendi quibusdam officia unde. Ea.",
  },
  {
    id: 2,
    img: Image2,
    title: "upto 50% off on all Men's Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur illum natus, animi impedit beatae quis, molestias sed accusamus sapiente enim dicta dolore cumque officia ab porro voluptatibus laborum reprehenderit. Incidunt fuga libero tempore iusto officiis sequi, vel neque at voluptas iure optio quisquam consequuntur modi eligendi quibusdam officia unde. Ea.",
  },
  {
    id: 3,
    img: Image3,
    title: "upto 50% off on all Men's Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur illum natus, animi impedit beatae quis, molestias sed accusamus sapiente enim dicta dolore cumque officia ab porro voluptatibus laborum reprehenderit. Incidunt fuga libero tempore iusto officiis sequi, vel neque at voluptas iure optio quisquam consequuntur modi eligendi quibusdam officia unde. Ea.",
  },
];

const Hero = () => {
    var settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 800,
        autoplay:true,
        autoplaySpeed:4000,
        cssEase:"ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <>
      <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items center">
        {/* Background Patterns  */}
        <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
        {/* hero section  */}
        <div className="container pb-8 mt-10 sm:pb-0">
            {/* slider  */}
            <Slider {...settings}>
                {ImageList.map((data) =>(
                    <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                      {/* text content section  */}
                      <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                        <h1 data-aos="zoom-out" data-aos-duration="6000" data-aos-oce="true" className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                          {data.title}
                        </h1>
                        <p className="text-sm" data-aos="zoom-out" data-aos-duration="6000" data-aos-oce="true">
                          {data.description}
                        </p>
                        <div>
                          <button data-aos="fade-up" data-aos-duration="1000" className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                            ORDER NOW
                          </button>
                        </div>
                      </div>
        
                      {/* image section  */}
                      <div className="order-1 sm:order-2">
                        <div className="relative">
                          <img
                            src={data.img}
                            data-aos="zoom-out" data-aos-duration="6000" data-aos-oce="true"
                            alt=""
                            className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto hover:scale-105"
                            style={{filter: "brightness(1)"}}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          
            </Slider>
        </div>
      </div>
    </>
  );
};

export default Hero;
