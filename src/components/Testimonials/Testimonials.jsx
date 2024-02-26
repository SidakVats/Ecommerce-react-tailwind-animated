import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Sidak vats",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad porro provident explicabo tempore, at placeat minus numquam! Animi, sequi accusamus.",
    img: "https://img.freepik.com/free-photo/medium-shot-contemplative-man-seaside_23-2150531618.jpg?w=1380&t=st=1708939596~exp=1708940196~hmac=7357253f3a632c369c02683a78718b6f4a7401a06ded5fccff3a1d38b4e80af1",
  },
  {
    id: 2,
    name: "Sidak vats",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad porro provident explicabo tempore, at placeat minus numquam! Animi, sequi accusamus.",
    img: "https://img.freepik.com/premium-photo/authentic-scenes-plus-size-males-playing-basketball_23-2150961227.jpg?w=1380",
  },
  {
    id: 3,
    name: "Sidak vats",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad porro provident explicabo tempore, at placeat minus numquam! Animi, sequi accusamus.",
    img: "https://img.freepik.com/free-photo/front-view-man-playing-basketball_23-2148239424.jpg?t=st=1708939693~exp=1708940293~hmac=5674befae96e17a0e6cb4fbd70931f4995ca2a673e741914d3ba50d014b00ca3",
  },
  {
    id: 4,
    name: "Sidak vats",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad porro provident explicabo tempore, at placeat minus numquam! Animi, sequi accusamus.",
    img: "https://img.freepik.com/free-photo/young-man-playing-football_23-2148867412.jpg?t=st=1708939693~exp=1708940293~hmac=64a54a53701b2be2ce44d627e0d30570ba84ad21a09d04d8ba0085605f45346c",
  },
  {
    id: 5,
    name: "Sidak vats",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad porro provident explicabo tempore, at placeat minus numquam! Animi, sequi accusamus.",
    img: "https://img.freepik.com/free-photo/authentic-scenes-plus-size-males-playing-basketball_23-2150961206.jpg?t=st=1708939693~exp=1708940293~hmac=c92bdc5e5d05b92087f76af4ac2745676d0c87ec56ac12a1326349ce61cb2e22",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* Heding section  */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-md text-primary">
            What Our Customers Says
          </p>
          <h1 data-aos="fade-up" className="text-4xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            eaque iusto recusandae corporis harum natus itaque obcaecati
            voluptatem dignissimos modi!
          </p>
        </div>
        {/* Testimonial cards section  */}
        <Slider {...settings}>
          {TestimonialData.map((data) => (
            <div data-aos="zoom-in" data-aos-delay="100" className="my-6">
              <div
                key={data.id}
                className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative"
              >
                <div className="mb-4">
                  <img
                    src={data.img}
                    alt=""
                    className="rounded-full w-20 h-20 object-cover"
                  />
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="space-y-3">
                    <p className="text-xs text-gray-500">{data.text}</p>
                    <h1 className="text-xl font-bold text-black/80">
                      {data.name}
                    </h1>
                  </div>
                </div>
                <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                  ,,
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
