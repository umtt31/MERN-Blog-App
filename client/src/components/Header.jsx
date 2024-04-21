import React from "react";
import { images } from "../constants/index";

const navItemsInfo = [
  { name: "Home" },
  { name: "Articles" },
  { name: "Pages" },
  { name: "Pricing" },
  { name: "Faq" },
];

const NavItem = ({ name }) => {
  return (
    <li className="relative group">
      <a className="px-4 py-2 " href="/">
        {name}
      </a>
      <span className="text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
        /
      </span>
    </li>
  );
};

function Header() {
  return (
    <section>
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div>
          <img src={images.Logo} alt="logo" />
        </div>
        <div className="flex gap-x-9 items-center">
          <ul className="flex gap-x-2 items-center font-semibold ">
            {navItemsInfo.map((item) => {
              return <NavItem key={item.name} name={item.name} />;
            })}
          </ul>
        </div>
      </header>
    </section>
  );
}

export default Header;
