import React from 'react'
import { Link } from "react-router-dom";

export default function Footer() {
    return (
      <>

            <footer className="text-center lg:text-left bg-emerald-100 text-gray-800">
            <div className="text-center p-6 bg-emerald-600 text-gray-100">
                <span>© 2021 Copyright :</span>
                <Link className="text-gray-50 font-semibold" to="/"> !NeedSpAce.com</Link>
            </div>
            </footer>

      </>
    )
}
