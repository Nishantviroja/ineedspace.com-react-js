// React JS for beginners: Tutorial 11 - Fetching a list of products
import React from "react";
import { useParams } from "react-router-dom";
import Data from "./Sub-Component/Data";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

import { CurrencyRupeeIcon } from "@heroicons/react/outline";

export default function PropertyOverview(props) {
  const { id } = useParams();

  return (
    <>
      <Navbar />

      <div className="bg-white">
        <div className="pt-6">
          

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
              <h3 className="mt-5 text-2xl  font-bold flex  text-black">
                    
                    {Data[id - 1].sqft}
                    
                    <div className="text-sm mt-3 ml-1 justify-center font-bold text-gray-700">sqft</div>
                    
                  </h3>
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
                    {Data[id - 1].description}
                  </p>
                </div>
                <div className="mt-10">
                  <button className="px-4 py-1 text-sm text-emerald-600 bg-emerald-100 font-semibold rounded-full border border-emerald-500  ">
                    {Data[id - 1].category}
                  </button>
                  <button className="px-4 ml-1 py-1 text-sm text-emerald-600 bg-emerald-100 font-semibold rounded-full border border-emerald-500  ">
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
          {/* form start */}
          <div className="m-5">
            <div className="hidden sm:block" aria-hidden="true">
              <div className="py-5">
                <div className="border-t border-emerald-600" />
              </div>
            </div>

            <div className="mt-10 sm:mt-0">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium lowercase leading-6 text-gray-900">
                    INFORMATION FORM
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                    Your information must be valid so that we can contact you as soon as possible. Hope you find what you were looking for. We are here if you need any help please contact us. Please keep exploring properties on !NeedSpAce.Thank You.
                    </p>
                  </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <form action="#" method="POST">
                    <div className="shadow overflow-hidden sm:rounded-md">
                      <div className="px-4 py-5 bg-emerald-100 sm:p-6">
                        <div className="px-4 mb-4 sm:px-0">
                          <h3 className="text-lg font-bold uppercase text-center leading-6 text-gray-900">
                            Personal Information
                          </h3>
                          <p className="mt-1 font-semibold uppercase text-center text-sm text-gray-500">
                            Use a permanent address where you can receive mail
                          </p>
                        </div>

                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              First name
                            </label>
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="given-name"
                              required
                              className="mt-1 p-2  block w-full shadow-sm sm:text-sm border-emerald-700 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="last-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Last name
                            </label>
                            <input
                              type="text"
                              name="last-name"
                              id="last-name"
                              required
                              autoComplete="family-name"
                              className="mt-1 p-2 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-emerald-700 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label
                              htmlFor="email-address"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Email address
                            </label>
                            <input
                              type="text"
                              required
                              name="email-address"
                              id="email-address"
                              autoComplete="email"
                              className="mt-1 p-2 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-emerald-700 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label
                              htmlFor="Phone"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Phone Number
                            </label>
                            <input
                              type="text"
                              required
                              name="Phone"
                              id="Phone"
                              autoComplete="phone"
                              className="mt-1 p-2 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-emerald-700 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label
                              htmlFor="Wnum"
                              className="block text-sm font-medium text-gray-700"
                            >
                              WhatsApp Number
                            </label>
                            <input
                              type="text"
                              name="wnum"
                              id="wnum"
                              autoComplete="phone"
                              className="mt-1 p-2 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-emerald-700 rounded-md"
                            />
                          </div>
                        </div>
                        <div className="px-4 mt-10 mb-4 sm:px-0">
                          <h3 className="text-lg font-bold uppercase text-center leading-6 text-gray-900">
                            Property Information
                          </h3>
                          
                        </div>

                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="Property-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Property name
                            </label>
                            <input
                              type="text"
                              required
                              name="Property-name"
                              id="Property-name"
                              value={Data[id - 1].name}
                              readOnly
                              className="mt-1 p-2  block w-full shadow-sm sm:text-sm border-emerald-700 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="Property-city"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Property City
                            </label>
                            <input
                              type="text"
                              required
                              name="Property-city"
                              id="Property-city"
                              value={Data[id - 1].city}
                              readOnly
                              className="mt-1 p-2 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-emerald-700 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label
                              htmlFor="Property-area"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Property Area in sq.ft.
                            </label>
                            <input
                              type="text"
                              required
                              name="Property-area"
                              id="Property-area"
                              value={Data[id - 1].sqft}
                              readOnly
                              className="mt-1 p-2 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-emerald-700 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label
                              htmlFor="category"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Category
                            </label>
                            <input
                              type="text"
                              name="category"
                              required
                              id="category"
                              value={Data[id - 1].category}
                              readOnly
                              className="mt-1 p-2 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-emerald-700 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label
                              htmlFor="action"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Action
                            </label>
                            <input
                              type="text"
                              required
                              name="action"
                              id="action"
                              value={Data[id - 1].action}
                              readOnly
                              className="mt-1 p-2 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-emerald-700 rounded-md"
                            />
                          </div>
                        </div>
                        <fieldset>
                          <div>
                            <legend className="text-base mt-10 font-medium text-gray-900">
                              Are you interested ?
                            </legend>
                          </div>
                          <div className="mt-4 space-y-1">
                            <div className="flex items-center">
                              <input
                                id="yes"
                                name="yes"
                                type="checkbox"
                                className="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300"
                              />
                              <label
                                htmlFor="yes"
                                className="ml-3 block text-sm font-medium text-gray-700"
                              >
                                Yes, i'm
                              </label>
                            </div>
                          
                          </div>
                        </fieldset>
                      </div>
                      <div className="px-4 py-3 bg-emerald-200 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-700 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
