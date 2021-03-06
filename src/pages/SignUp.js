import React from "react";
import { Link } from "react-router-dom";
import { LockClosedIcon, ArrowLeftIcon } from "@heroicons/react/solid";

export default function SignUs() {
  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md  w-full space-y-8">
          <div>
            <div className="mt-2 text-center text-3xl">
              <Link
                to="/sign-us"
                className="font-extrabold text-emerald-600 sm:text-4xl sm:text-center"
              >
                !NeedSpAce.com
              </Link>
            </div>

            <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
              Sign us to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <Link
                to="/sign-in"
                className="font-medium text-emerald-600 hover:text-emerald-500"
              >
                Already have an account?{" "}
                <span className="font-bold"> Sign in </span>
              </Link>
            </p>
          </div>

          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="Frist" className="sr-only">
                Frist name
                </label>
                <input
                  id="Frist"
                  name="Frist"
                  type="text"
                  autoComplete="given-name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-emerald-400 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                  placeholder="Frist name"
                />
              </div>
              <div>
                <label htmlFor="Last-name" className="sr-only">
                Last name
                </label>
                <input
                  id="Last-name"
                  name="Last-name"
                  type="text"
                  autoComplete="family-name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-emerald-400 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="Phone" className="sr-only">
                Phone numbar
                </label>
                <input
                  id="text"
                  name="Phone"
                  type="number"
                  autoComplete="Phone"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-emerald-400 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                  placeholder="Phone numbar"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-emerald-400 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
              <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-emerald-400 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="repassword" className="sr-only">
                  Re-Password
                </label>
                <input
                  id="repassword"
                  name="repassword"
                  type="password"
                  autoComplete=""
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-emerald-400 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                  placeholder="Re-Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-emerald-500 group-hover:text-emerald-400"
                    aria-hidden="true"
                  />
                </span>
                Sign us
              </button>
            </div>
            <div className="-mt-5 text-center text-sm text-gray-600">
              <Link
                to="/"
                className="font-bold flex item-center text-emerald-600 "
              >
                <ArrowLeftIcon
                    className="h-5 w-4 mr-1 text-emerald-600 "
                    aria-hidden="true"
                  />
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
