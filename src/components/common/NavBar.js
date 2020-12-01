import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="bg-gray-900 sm:flex sm:justify-between sm:items-center">
      <div className="flex justify-between leading-tight px-4 py-3">
        <div className="select-none">
          <span aria-label="beach with umbrella emoji" className="text-2xl">
            🏖{' '}
          </span>
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
      <nav className={`sm:flex sm:items-center ${isOpen ? '' : 'hidden'}`}>
        <div className="px-2 py-2 border-b border-gray-800 sm:border-b-0 sm:flex sm:px-0">
          <a
            href="#property"
            className="block px-3 py-1 rounded leading-tight font-semibold text-white hover:bg-gray-800 sm:text-sm">
            List your property
          </a>
          <a
            href="#property"
            className="mt-1 block sm:mt-0 px-3 py-1 rounded leading-tight font-semibold text-white hover:bg-gray-800 sm:text-sm">
            Trips
          </a>
          <a
            href="#property"
            className="mt-1 block sm:mt-0 px-3 py-1 rounded leading-tight font-semibold text-white hover:bg-gray-800 sm:text-sm">
            Messages
          </a>
        </div>
        <div className="px-5 py-5 sm:py-0 sm:px-4">
          <div className="flex items-center">
            <img
              className="h-10 w-10 sm:h-9 sm:w-9 object-cover rounded-full border-2 border-gray-600"
              src="https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1591&q=80"
              alt="Isla Schoger"></img>
            <span className="ml-4 text-gray-200 font-semibold sm:hidden">Isabela Terragona</span>
          </div>
          <div className="mt-5 sm:hidden">
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
