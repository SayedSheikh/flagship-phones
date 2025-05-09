import React, { useEffect, useState } from "react";
import bannerImg from "./../assets/images/banner.png";
import { useLoaderData } from "react-router";
import PhonesContainer from "../Components/PhonesContainer";

const Home = () => {
  const phones = useLoaderData();
  // console.log(phones);
  const [data, setData] = useState(phones);
  const [isAll, setIsAll] = useState(false);
  console.log(isAll);

  useEffect(() => {
    if (!isAll) {
      setData(phones.slice(0, 6));
    } else {
      setData(phones);
    }
  }, [isAll, phones]);

  const handleClick = () => {
    setIsAll(!isAll);
    if (isAll) {
      window.scrollTo(0, 400);
    }
  };
  return (
    <div className="min-h-[calc(100vh-65px)] max-w-[1200px] mx-auto w-11/12 py-[48px]">
      <header className="flex flex-col justify-center items-center text-center">
        <div className="max-w-[448px]">
          <img className="w-full" src={bannerImg} alt="" />
        </div>

        <h1 className="text-7xl font-thin text-gray-900">
          Browse, Search, View, Buy
        </h1>
        <p className="text-gray-500">
          Best place to browse, search, view details and purchase of top
          flagship phones <br />
          of the current time - FlagshipFaceOff
        </p>
        <form className="flex flex-col justify-center items-center w-full mb-4 md:flex-row md:px-24 mt-[20px]">
          <input
            className="w-2/3 h-12 px-4 mb-3  bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Search Phone"
          />
          <a href="#_" className="relative inline-block text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Search</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"></span>
          </a>
        </form>
      </header>
      <main>
        <PhonesContainer phones={data}></PhonesContainer>
      </main>
      <a
        onClick={handleClick}
        href="#_"
        className="relative inline-block text-lg group">
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
          <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
          <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
          <span className="relative">{isAll ? "View less" : "View all"}</span>
        </span>
        <span
          className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"></span>
      </a>
    </div>
  );
};

export default Home;
