"use client";
import { useState } from 'react';
import 'boxicons'
import Image from "next/image";
import universidad from ''
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <nav className="  flex justify-between items-center py-4 bg-orange-600">
        <div className='ml-6'>
          <Image src={universidad} width={70} height={70} alt="Icon" />
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bloc hover: text-orange-600 focus:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h16a1 1 0 010 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h16a1 1 0 010 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div
          className={`${isOpen ? 'block' : 'hidden'
            } lg:flex lg:items-center lg:w-auto w-full`}
        >
          <div className="text-sm lg:flex-grow">
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-600 mr-4">
              Home
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-600 mr-4">
              iniciar sesion
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-600 mr-4">
              Blog
            </a>
            <a

              href="/login"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-600 mr-4">
              <box-icon name='user-circle' type='solid' animation='tada' color='white'></box-icon>
            </a>
          </div>
        </div>
      </nav>
    </main>
  );
}

export default Navbar;
