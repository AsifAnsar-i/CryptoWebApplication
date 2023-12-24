import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Body from "./pages/Body";
import Cryptocurrencies from "./pages/Cryptocurrencies";

const App = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row ">
        <div className="p-9 md:p-8  md:min-h-screen overflow-y-auto w-80">
          <Sidebar />
        </div>
        <div className="p-9 md:p-8 ml-56">
        <Routes>
          <Route path="/" element={<Body/>} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies/>} />
          <Route path="/exchange" element={<Body/>} />
          <Route path="/news" element={<Body/>} />
        </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
