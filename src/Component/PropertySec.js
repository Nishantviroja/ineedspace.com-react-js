import Data from "./Sub-Component/data.json";

import { Link } from "react-router-dom";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import { CurrencyRupeeIcon } from "@heroicons/react/outline";


export default function PropertySec() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-8 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">

        <div className=" grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {Data.map((Propertyitem) => (
            <div
              Propertyitem={Propertyitem}
              key={Propertyitem.id}
              
              className="group border-2 rounded-md border-emerald-600 bg-emerald-100"
            >
              <div className="w-100 h-60 aspect-w-1 aspect-h-1 bg-gray-200 rounded-md overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={Propertyitem.img}
                  alt={Propertyitem.imageAlt}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <div className="m-3 overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <div className="mt-1">
                    
                    <button class="px-2 text-sm text-white bg-emerald-700 font-semibold rounded-full ">{Propertyitem.category}</button>
                    <button class="px-2 ml-2 text-sm text-emerald-700 bg-emerald-100 font-semibold rounded-full border border-emerald-700  ">{Propertyitem.action}</button>
                  
                                  </div>
                <h3 className="mt-1 text-base justify-start font-bold flex  text-gray-800">
                  {Propertyitem.name}
                </h3>
                <h3 className="mt-1 text-sm  font-bold flex  text-gray-800">
                  <CurrencyRupeeIcon
                    className="h-5 w-4 mr-2 text-gray-900"
                    aria-hidden="true"
                  />{" "}
                  {Propertyitem.price}
                </h3>
                <h3 className=" text-sm font-medium flex  text-gray-800">
                  <LocationMarkerIcon
                    className="h-5 w-4 mr-2 text-gray-900"
                    aria-hidden="true"
                  />
                  {Propertyitem.city}, {Propertyitem.state}
                </h3>
                <div>
                <Link to={`/property/${Propertyitem.id}`} className="mt-3 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 ">
                  View
                </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
