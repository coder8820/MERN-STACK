import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
      <span className="text-xl font-bold tracking-wide">proCoder</span>
      <ul className="mx-20 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl md:border-none text-center md:bg-transparent md:static md:mx-0 flex flex-wrap gap-6 md:gap-10">
        <li>About</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Contacts</li>
      </ul>
    </nav>
  );
};

export default Navbar;
