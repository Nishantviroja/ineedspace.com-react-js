import React from 'react'

export default function ContactForm() {
    return (
        <div>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="mt-2 mb-5 uppercase text-3xl leading-8 font-extrabold tracking-tight text-emerald-600 sm:text-4xl sm:text-center">We provide the best service</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We are here to provide the best properties and to make your time finding property a easy one.we provide testimonials from genuine buyers are the best way to judge a seller. Better the ratings, better will be your experience.
</p>
    </div>
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="text-emerald-500 w-12 h-12 mb-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
</svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">50+</h2>
          <p className="leading-relaxed">properties added daily
</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={2} className="text-emerald-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">1.3K</h2>
          <p className="leading-relaxed">coustmer</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="text-emerald-500 w-12 h-12 mb-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
</svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">74</h2>
          <p className="leading-relaxed">properties sold</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="text-emerald-500 w-12 h-12 mb-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
</svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">46</h2>
          <p className="leading-relaxed">properties on rent</p>
        </div>
      </div>
    </div>
  </div>
</section>

                 <div className="m-5">
            <div className="hidden sm:block" aria-hidden="true">
              <div className="py-5">
                <div className="border-t border-emerald-600" />
              </div>
            </div>

            <div className="mt-10 sm:mt-0">
             
                <div className="mt-5  justify-center  md:mt-0 md:p-5 sm:p-5 md:col-span-2">
                  <form action="/" method="POST">
                    <div className="shadow  overflow-hidden sm:rounded-md">
                      <div className="px-4 py-5 bg-blue-100 sm:p-6">
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
                          Property you are looking for
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
                            //   value={Data[id - 1].name}
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
                            //   value={Data[id - 1].city}
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
                            //   value={Data[id - 1].sqft}
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
                            //   value={Data[id - 1].category}
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
                            //   value={Data[id - 1].action}
                              className="mt-1 p-2 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-emerald-700 rounded-md"
                            />
                          </div>
                        </div>
                     
                      </div>
                      <div className="px-4 py-3 justify-center  bg-emerald-200 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex uppercase justify-center py-2 px-10 border border-transparent shadow-sm text-sm font-bold rounded-md text-white bg-emerald-700 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
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
        
    )
}
