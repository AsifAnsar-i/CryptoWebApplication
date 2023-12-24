import React, { useState } from "react";
import { useGetCryptosQuery } from "../services/cryptosApi";
import { Link } from "react-router-dom";
import millify from "millify";
const Card = () => {
    //  const count = simplified ? 10 :100;
    const {data:cryptosList,isFetching} = useGetCryptosQuery()
    const [cryptos,setCryptos] = useState(cryptosList?.data?.coins)
  return <div className="flex flex-wrap ">
        {cryptos && cryptos.map((crypto)=>(
            <div className="flex-wrap p-6 flex flex-row w-1/3">
            <div key={crypto.uuid} className="bg-white shadow-md hover:shadow-lg transition-shadow h-[320px] w-[320px] gap-7 rounded-lg  ">
              <Link to={`/crypto/${crypto.uuid}`} >
                   <div className="flex justify-between">
                    <p className="p-5 font-bold text-xl">{crypto.name}</p>
                    <img src={crypto.iconUrl} className="w-[70px] h-[70px] pr-5 pt-5"/>
                   </div>
                   <div className="p-6 gap-5 mt-28 border-t-2 border-gray-300 ">
                    <p className="font-semibold text-slate-700" >Price: <span className="font-bold">{millify(crypto.price)}</span></p>
                    <p className="font-semibold text-slate-700">MarketCap: <span className="font-bold"></span>{millify(crypto.marketCap)}</p>
                    <p className="font-semibold text-slate-700">Daily Change: <span className="font-bold"></span>{millify(crypto.change)}</p>
                   </div>
              </Link>
            </div>
            </div>
        ))}
  </div>;
};

export default Card;
