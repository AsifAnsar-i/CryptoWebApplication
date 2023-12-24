import React from "react";
import { FaBitcoin, FaHome } from "react-icons/fa";
import { RiCoinsFill } from "react-icons/ri";
import { PiCoinsFill } from "react-icons/pi";
import { FaRegNewspaper } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Sidebar = () => {

  return (
    <div className="fixed">
      <ul className="p-3">
        <div className="flex ">
          <FaBitcoin className="text-slate-700 mb-7" size={40} />
          <span className="text-slate-500 text-3xl font-extrabold ml-3 items-center">
            Crypto
          </span>
          <span className="text-slate-700 text-3xl font-extrabold items-center">
            Verse
          </span>
        </div>
        <Link to="/">
          <li className="mb-3 font-semibold bg-slate-500 rounded-lg p-3 px-12 cursor-pointer focus:opacity-95 flex items-center gap-3 text-lg">
            <FaHome />
            Home
          </li>
        </Link>
        <Link to="/cryptocurrencies">
          <li className="mb-3 font-semibold bg-slate-500 rounded-lg p-3 px-12 cursor-pointer focus:opacity-95 flex items-center gap-3 text-lg">
            <RiCoinsFill />
            Cryptocurrencies
          </li>
        </Link>
        <Link to="/exchange">
          <li className="mb-3 font-semibold bg-slate-500 rounded-lg p-3 px-12 cursor-pointer focus:opacity-95 flex items-center gap-3 text-lg">
            <PiCoinsFill />
            Exchanges
          </li>
        </Link>
        <Link to="/news">
          <li className="mb-3 font-semibold bg-slate-500 rounded-lg p-3 px-12 cursor-pointer focus:opacity-95 flex items-center gap-3 text-lg">
            <FaRegNewspaper /> News
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
