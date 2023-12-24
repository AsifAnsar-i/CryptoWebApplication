import React from 'react'
import millify from 'millify';
import { useGetCryptosQuery } from "../services/cryptosApi";
import Card from '../components/Card';
const Cryptocurrencies = () => {
  const { data:totalList, isFetching } = useGetCryptosQuery();
  const tothundredData = totalList?.data?.stats;
   console.warn(tothundredData)
   if (isFetching)
    return (
      <p className="p-64 text-slate-700 text-9xl font-bold">Loading....</p>
    );
  return (
    <div className="">
      <h1 className="text-4xl p-3 font-semibold bg-gradient-to-r bg-clip-text text-transparent from-slate-700 to-purple-500 ">
        Global Crypto Stats
      </h1>
      <ul className="flex flex-wrap text-xl gap-20">
        <div className="flex-col">
          <li>Total Cryptocurrencies</li>
          <span className="text-purple-700 font-semibold p-14 mt-5">
            {tothundredData.total}
          </span>
        </div>
        <div className="flex-col">
          <li>Total Exchanges</li>
          <span className="text-purple-700 font-semibold p-8 mt-5">
            {millify(tothundredData.totalExchanges)}
          </span>
        </div>
        <div className="flex-col">
          <li>Total Market Cap</li>
          <span className="text-purple-700 font-semibold p-10 mt-5">
            {millify(tothundredData.totalMarketCap)}
          </span>
        </div>
        <div className="flex-col">
          <li>Total 24h Volume</li>
          <span className="text-purple-700 font-semibold p-10 mt-5">
            {millify(tothundredData.total24hVolume)}
          </span>
        </div>
        <div className="flex-col">
          <li>Total Markets</li>
          <span className="text-purple-700 font-semibold p-8 mt-5">
            {millify(tothundredData.totalMarkets)}
          </span>
        </div>
      </ul>

      <div>
        <Card className="flex-row" />
      </div>
    </div>
  );
}

export default Cryptocurrencies