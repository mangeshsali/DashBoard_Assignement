import React from "react";
import Logo from "/assets/Slack Logo.png";
import { FaSearch } from "react-icons/fa";

function Header() {
  const navItems = ["Product", "Enterprise", "Resources", "Pricing"];

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow">
      <div className="flex items-center">
        <img src={Logo} alt="Slack Logo" className="h-8 cursor-pointer" />
        <nav className="ml-5">
          <ul className="flex gap-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href="#" className="text-gray-700 font-semibold">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-x-4">
        <FaSearch className="text-gray-700 text-lg cursor-pointer" />
        <button className="text-black font-semibold">Sign In</button>
        <div className="flex space-x-4">
          <button className="text-[#611F69] bg-white border border-[#611F69] rounded-md px-4 font-semibold">
            TALK TO SALES
          </button>
          <button className="bg-[#611F69] text-white px-4 py-2 rounded font-semibold">
            TRY FOR FREE
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
