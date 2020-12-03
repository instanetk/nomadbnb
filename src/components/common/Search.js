import React, { useState } from 'react';

const Search = () => {
  const [doSearch, setSearch] = useState(false);

  return (
    <section className="bg-gray-800">
      <div className="flex justify-between px-4 py-3">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-6 w-6 fill-current text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex justify-between">
            <input
              className="block max-w-sm w-full bg-gray-900 shadow focus:outline-none focus:bg-gray-200 focus:text-gray-900 text-white rounded-lg pl-10 pr-2 py-2"
              placeholder="Search by city"></input>
            <button
              onClick={() => setSearch(!doSearch)}
              className="inline-flex bg-gray-700 hover:bg-gray-600 focus:outline-none focus:shadow-ouline rounded-lg shadow pr-4 pl-3 py-2 ml-2 items-center">
              <svg
                className="h-4 w-4 fill-current text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
              </svg>
              <span className="ml-1 text-white font-medium">Filters</span>
            </button>
          </div>
        </div>
      </div>
      <form className={doSearch ? '' : 'hidden'}>
        <fieldset className="px-4 py-4 border-t border-gray-900 sm:flex">
          <div className="flex -mx-2 sm:w-1/2">
            <label className="block w-1/2 px-2">
              <span className="text-sm font-semibold text-gray-500">Bedrooms</span>
              <select className="mt-1 form-select block w-full shadow">
                <option>4</option>
              </select>
            </label>
            <label className="block w-1/2 px-2">
              <span className="text-sm font-semibold text-gray-500">Bathrooms</span>
              <select className="mt-1 form-select block w-full shadow">
                <option>2</option>
              </select>
            </label>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-4 sm:w-1/2">
            <label>
              <span className="text-sm font-semibold text-gray-500">Price Range</span>
              <select className="mt-1 form-select block w-full shadow">
                <option>Up to $2000 /wk</option>
              </select>
            </label>
          </div>
        </fieldset>
        <div className="px-4 py-4 border-t border-gray-900">
          <span className="block text-sm font-semibold text-gray-500">Property Type</span>
          <div className="sm:flex sm:-mx-2">
            <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center">
              <input className="form-radio" type="radio" name="propertyType" value="house" />
              <span className="ml-2 text-white">House</span>
            </label>
            <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center">
              <input className="form-radio" type="radio" name="propertyType" value="apartment" />
              <span className="ml-2 text-white">Apartment</span>
            </label>
            <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center">
              <input className="form-radio" type="radio" name="propertyType" value="loft" />
              <span className="ml-2 text-white">Loft</span>
            </label>
            <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center">
              <input className="form-radio" type="radio" name="propertyType" value="townhouse" />
              <span className="ml-2 text-white">Townhouse</span>
            </label>
          </div>
        </div>
        <div className="px-4 py-4 border-t border-gray-900">
          <span className="block text-sm font-semibold text-gray-500">Amenities</span>
          <div className="sm:flex sm:-mx-2 sm:flex-wrap">
            <label className="mt-3 flex items-center sm:w-1/4 sm:px-2">
              <input className="form-checkbox" type="checkbox" name="balcony" checked />
              <span className="ml-2 text-white">Balcony</span>
            </label>
            <label className=" mt-3 flex items-center sm:w-1/4 sm:px-2">
              <input className="form-checkbox" type="checkbox" name="airConditioning" />
              <span className="ml-2 text-white">Air conditioning</span>
            </label>
            <label className=" mt-3 flex items-center sm:w-1/4 sm:px-2">
              <input className="form-checkbox" type="checkbox" name="pool" />
              <span className="ml-2 text-white">Pool</span>
            </label>
            <label className=" mt-3 flex items-center sm:w-1/4 sm:px-2">
              <input className="form-checkbox" type="checkbox" name="beach" />
              <span className="ml-2 text-white">Beach</span>
            </label>
            <label className=" mt-3 flex items-center sm:w-1/4 sm:px-2">
              <input className="form-checkbox" type="checkbox" name="petFriendly" />
              <span className="ml-2 text-white">Pet friendly</span>
            </label>
            <label className=" mt-3 flex items-center sm:w-1/4 sm:px-2">
              <input className="form-checkbox" type="checkbox" name="kidFriendly" />
              <span className="ml-2 text-white">Kid friendly</span>
            </label>
            <label className=" mt-3 flex items-center sm:w-1/4 sm:px-2">
              <input className="form-checkbox" type="checkbox" name="parking" />
              <span className="ml-2 mt-1 text-white">Parking</span>
            </label>
          </div>
        </div>
        <div className="bg-gray-900 px-4 py-4 sm:text-right">
          <button className="block w-full sm:w-auto sm:inline-block bg-indigo-500 hover:bg-indigo-400 font-semibold text-white px-4 py-4 sm:py-3 rounded-lg">
            Update results
          </button>
        </div>
      </form>
    </section>
  );
};

export default Search;
