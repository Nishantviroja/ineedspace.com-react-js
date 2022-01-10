/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, AdjustmentsIcon, UserGroupIcon, LibraryIcon, XIcon } from "@heroicons/react/outline";

const Navigation = [
  { name: "Home", 
    href: "/", 
    icon: AdjustmentsIcon 
  },
  {
    name: "Property",
    href: "/property",
    icon: LibraryIcon 
  },
  {
    name: "Contact us",
    href: "/contact",
    icon: UserGroupIcon 
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar(props) {
  let location = useLocation();

  useEffect(() => { }, [location]);

  return (
    <Popover className="relative bg-white">
      <div className="max-w-8xl mx-auto">
        <div className=" flex justify-between items-center border-b-2 border-emerald-600 py-6 md:justify-start md:space-x-10">
          <div className="ml-5 flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="text-emerald-600 font-bold text-2xl ">
              !NeedSpAce.com
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white mr-5 rounded-md p-2 inline-flex items-center justify-center text-gray-400">
              <span className="sr-only ">Open menu</span>
              <MenuIcon
                className="h-6 w-6  text-emerald-600 "
                aria-hidden="true"
              />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <div className="flex space-x-4">
              {Navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    location.pathname === item.href
                      ? "text-emerald-600 font-bold bg-emerald-100"
                      : "text-emerald ",
                    "px-3 py-2 rounded-md text-sm font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Popover.Group>
          <div className="hidden  md:flex items-center justify-end md:flex-1 lg:w-0">
           
            <Link
              to="/sing-in"
              className="ml-2 mr-5 whitespace-nowrap inline-flex items-center justify-center px-5 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-500 hover:bg-emerald-600"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Link
                    to="/"
                    className="text-emerald-600 font-bold text-2xl text-center"
                  >
                    !NeedSpAce.com
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon
                      className="h-6 w-6 text-emerald-600 "
                      aria-hidden="true"
                    />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8 items-center r">
                  {Navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        location.pathname === item.href
                          ? "bg-emerald-100 text-emerald-700"
                          : "text-black ",
                        "-m-3 flex items-center px-3 py-2 rounded-md text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-emerald-700"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium ">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6 bg-blue-50">
              <div>
                <Link
                  to="/sing-in"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700"
                >
                  Sign in
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <Link
                    to="/sing-us"
                    className="text-emerald-600 hover:text-emerald-500"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
