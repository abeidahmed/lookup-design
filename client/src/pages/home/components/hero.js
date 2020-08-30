import React from 'react';
import { Container } from 'components/container';
import { Icon } from 'components/icons';
import BrandLogo from '../assets/brand-logo.png';

function Hero() {
  return (
    <section className="py-20 bg-brand-50">
      <Container>
        <h1 className="text-4xl font-extrabold text-center md:text-6xl text-gradient">
          Find Design Examples
        </h1>
        <form className="mt-6">
          <div className="relative w-full max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="UI patterns, page type, brand"
                className="relative block w-full py-3 pl-12 text-lg transition duration-150 rounded-md shadow-lg focus:outline-none md:py-5 focus:shadow-md"
              />
              <div className="absolute inset-y-0 flex items-center pl-3">
                <Icon icon="search" className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-3 md:absolute md:inset-y-0 md:right-0 md:pr-2 md:flex md:items-center md:mt-0">
              <button className="w-full px-4 py-3 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md md:py-4 md:px-5 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700">
                See results
              </button>
            </div>
          </div>
        </form>
        <div className="mt-2 -mx-1">
          <a
            href="#"
            className="inline-flex leading-6 items-center px-3 py-0.5 rounded-full m-1 text-sm font-medium bg-indigo-100 text-indigo-800"
          >
            blogpost
          </a>
        </div>
        <div className="flex justify-center">
          <img
            src={BrandLogo}
            alt="logos"
            className="self-center hidden h-16 -mb-40 sm:block md:h-24"
          />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
