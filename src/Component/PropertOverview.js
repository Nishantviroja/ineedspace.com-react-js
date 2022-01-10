// React JS for beginners: Tutorial 11 - Fetching a list of products
import React from "react";
import { Link, useParams } from "react-router-dom";
import Data from "./Sub-Component/data.json";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import Navbar from "../Component/Navbar";
import { CurrencyRupeeIcon } from "@heroicons/react/outline";

export default function PropertyOverview(props) {
  const { id } = useParams();

  return (
    <>
    <Navbar />
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li key="Property">
              <div className="flex items-center">
                <Link
                  to="/Property"
                  className="mr-2 text-sm font-bold text-emerald-600"
                >
                  Property
                </Link>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-4 h-5 text-emerald-600"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>

            <li className="text-sm">
              <Link
                to={`/property/${Data[id - 1].name}`}
                aria-current="page"
                className="font-bold text-gray-900 "
              >
                {Data[id - 1].name}
              </Link>
            </li>
          </ol>
        </nav>

        {/* Product info */}
        <div className="max-w-2xl mx-auto pt-5 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"></div>

          {/* Options */}
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">Product information</h2>
            <div className="aspect-w-4 h-60 sm:overflow-hidden  lg:aspect-w-3 lg:aspect-h-4">
              <img
                src={Data[id - 1].img}
                alt={Data[id - 1].alt}
                className="w-full rounded-lg h-full object-center object-cover"
              />
            </div>
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-emerald-600 sm:text-3xl">
              {Data[id - 1].name}
            </h1>
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">
                  {Data[id - 1].description}
                </p>
              </div>
              <div className="mt-10">
                <button class="px-4 py-1 text-sm text-emerald-600 bg-emerald-100 font-semibold rounded-full border border-emerald-500  ">
                  {Data[id - 1].category}
                </button>
                <button class="px-4 ml-1 py-1 text-sm text-emerald-600 bg-emerald-100 font-semibold rounded-full border border-emerald-500  ">
                  {Data[id - 1].action}
                </button>
              </div>
              <div className="mt-3">
                <h3 className="mt-1 text-3xl  font-bold flex  text-emerald-600">
                  <CurrencyRupeeIcon
                    className="h-10 w-4 mr-2  text-emerald-600"
                    aria-hidden="true"
                  />{" "}
                  {Data[id - 1].price}
                </h3>
                <h3 className=" text-sm font-medium flex  text-emerald-600">
                  <LocationMarkerIcon
                    className="h-5 w-4 mr-2 text-emerald-600"
                    aria-hidden="true"
                  />
                  {Data[id - 1].city}, {Data[id - 1].state}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
