import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2
            className="text-3xl font-bold leading-9 tracking-tight text-white sm:text-4xl sm:leading-10"
            id="newsletter-headline"
          >
            Join the newsletter
          </h2>
          <p className="max-w-3xl mt-3 text-lg leading-6 text-gray-300">
            Get weekly curated designs straight to your inbox
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form className="sm:flex">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full px-5 py-3 text-base leading-6 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded appearance-none focus:outline-none focus:placeholder-gray-400 sm:max-w-xs"
            />
            <div className="mt-3 rounded shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button className="flex items-center justify-center w-full px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-700">
                Notify me
              </button>
            </div>
          </form>
          <p className="mt-3 text-sm leading-5 text-gray-300">
            No spam, ever! Unubscribe any time.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
