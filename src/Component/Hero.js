import React from "react";

import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div>
                
    <header>
     <div className="relative w-full bg-[url('https://media.istockphoto.com/photos/open-door-with-key-picture-id1283022900?b=1&k=20&m=1283022900&s=170667a&w=0&h=54lV0cO9B0Kwj3aSQ2m3CLK1CLHq6h1JXHtUl_jHGAY=')] bg-center bg-cover h-[44rem]">
            <div className="flex p-2 items-center justify-center w-full h-full bg-black bg-opacity-50">
                <div className="text-center">
                    <h1 className="text-2xl m-1 font-bold text-white uppercase lg:text-3xl">Find Better Places to Live, Work and Wonder</h1>
                    <p className=" m-1 mb-4 font-medium text-sm text-white">Find, Buy & Own Your Dream Home</p>
                    
                    <Link to="/property" className="w-full px-4 py-2 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-emerald-600 rounded-md lg:w-auto hover:bg-emerald-500 focus:outline-none focus:bg-emerald-500">Start Exploreing</Link>
                </div>
            </div>
        </div>
    </header>
      </div>
    </>
  );
}
