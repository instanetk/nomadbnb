import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className=" bg-gray-900">
      <div className="flex justify-between leading-tight px-4 py-3">
        <div>
          <span className="text-white text-lg">nomad</span>
          <span className="text-green-500 text-lg font-semibold">bnb</span>
        </div>
        <div className="flex">
          <button
            type="button"
            onClick={() => setOpen(!isOpen)}
            className="px-2 focus:outline-none focus:shadow-ouline sm:hidden">
            <svg
              className="h-6 w-6 fill-current text-gray-500 hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                className={isOpen ? 'hidden' : ''}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                className={isOpen ? '' : 'hidden'}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <nav className={isOpen ? 'block' : 'hidden'}>
        <div className="px-2 py-2 border-b border-gray-800">
          <a
            href="#property"
            className="px-3 py-1 rounded block leading-tight font-semibold text-white hover:bg-gray-800">
            List your property
          </a>
          <a
            href="#property"
            className="mt-1 px-3 py-1 rounded block leading-tight font-semibold text-white hover:bg-gray-800">
            Trips
          </a>
          <a
            href="#property"
            className="mt-1 px-3 py-1 rounded block leading-tight font-semibold text-white hover:bg-gray-800">
            Messages
          </a>
        </div>
        <div className="px-5 py-5">
          <div className="flex items-center">
            <img
              className="h-10 w-10 object-cover rounded-full border-2 border-gray-600"
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1651&q=80"
              alt="Isla Schoger"></img>
            <span className="ml-4 text-gray-200 font-semibold">Isla Schoger</span>
          </div>
          <div className="mt-5">
            <a href="#account" className="block text-gray-400 hover:text-white">
              Account settings
            </a>
            <a href="#account" className="mt-3 block text-gray-400 hover:text-white">
              Support
            </a>
            <a href="#account" className="mt-3 block text-gray-400 hover:text-white">
              Sign out
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
