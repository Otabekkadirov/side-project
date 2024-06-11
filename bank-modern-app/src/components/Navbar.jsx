import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="navbar flex w-full items-center justify-between py-6">
      <img src={logo} alt="hoobank" className="h-[32px] w-[124px]" />
      <ul className="hidden flex-1 list-none items-center justify-end sm:flex">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`${index == navLinks.length - 1 ? "mr-0" : "mr-10"} cursor-pointer font-poppins text-[16px] font-normal text-white hover:underline`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="flex flex-1 items-center justify-end sm:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="h-[28px] w-[28px] cursor-pointer object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${toggle ? "flex" : "hidden"} sidebar bg-black-gradient absolute right-0 top-14 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
        >
          <ul className="flex flex-1 list-none flex-col justify-end">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`${index == navLinks.length - 1 ? "mb-0" : "mb-4"} cursor-pointer font-poppins text-[16px] font-normal text-white hover:underline`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
