import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart, FaCaretDown } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#Services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/Kids",
  },
  {
    id: 4,
    name: "Men's Wear",
    link: "/men",
  },
  {
    id: 5,
    name: "Electronics",
    link: "/Electronics",
  },
];

const DropDownLinks = [
  {
    id: 1,
    name: "Treanding Products",
    link: "/#"
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#"
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#"
  },
]

const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-grey-900 dark:text-white duration-200 relative z-40">
        {/* upper Navbar  */}
        <div className="bg-primary/40 py-2">
          <div className="container flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-3">
                <img src={Logo} alt="Logo" className="w-10" />
                Shopsy
              </a>
            </div>
            {/* Search bar */}
            <div>
              <div className="relative group hidden sm:block">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[200px] sm:w-[200px] group-hover:w-[300px] text-black transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
                />
                <IoMdSearch className="text-grey-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
              </div>
            </div>
            {/* order button  */}
            <button
              onClick={() => alert("Ordering not available yet")}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Darkmode Button  */}
            <div></div>
          </div>
        </div>

        {/* Lower Navbar */}
        <div className="flex justify-center" data-aos="zoom-out" data-aos-duration="6000">
          <ul className="sm:flex hidden items-center gap-4">
            {Menu.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="inline-block px-4 hover:text-primary duration-200"
                >
                  {data.name}
                </a>
              </li>
            ))}
            {/* Simple Dropdown and links  */}
            <li className="group relative cursor-pointer">
              <a href="#" className="flex item-center gap-[2px] py-2">
                Treanding Products
                <span>
                <FaCaretDown className="transition-all duration-200 mt-1 group-hover:rotate-180 "/>
                <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white me-5 p-2 text-black shadow-md">
                 <ul>
                  {DropDownLinks.map((data) => (
                      <li key={data.id}>
                        <a href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20">{data.name}</a>
                      </li>
                  ))}
                 </ul>
                </div>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
