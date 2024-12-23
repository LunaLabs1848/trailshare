import React from "react";

export const Navbar: React.FC = () => {
  return (
    <div className="flex h-12 bg-transparent px-6 justify-between items-center shadow-md w-full">
      <div className="text-xl font-semibold text-[#deded5]">
        TrailShare<span className="text-[#7175db]">.</span>
      </div>
      <ul className="flex space-x-8 text-[#deded5]">
        <li className="hover:text-[#7175db] transition-colors duration-200 cursor-pointer">
          History
        </li>
        <li className="hover:text-[#7175db] transition-colors duration-200 cursor-pointer">
          Favorites
        </li>
        <li className="hover:text-[#7175db] transition-colors duration-200 cursor-pointer">
          Reviews
        </li>
        <li className="hover:text-[#7175db] transition-colors duration-200 cursor-pointer">
          About Us
        </li>
      </ul>
    </div>
  );
};
Navbar.displayName = "Navbar";
