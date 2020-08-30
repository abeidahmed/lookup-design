import React from 'react';
import { Container } from 'components/container';
import GoodDesign from '../assets/good-design.png';

function About() {
  return (
    <Container>
      <section className="py-8 text-center md:py-20">
        <h3 className="text-base tracking-wide text-blue-500 uppercase md:text-lg ">
          What we offer
        </h3>
        <h2 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl">
          Only Good Designs
        </h2>
        <p className="max-w-3xl mx-auto text-base leading-7 text-gray-700 md:text-lg">
          Finding design inspiration is needlessly painful. Instead of going
          through hundreds of bad or unrealistic examples, we help you find what
          you need right away. Every design in our library is handpicked from
          the best-designed websites around.
        </p>
        <img src={GoodDesign} alt="good-design" className="mx-auto mt-4" />
      </section>
      <section className="py-8 text-center md:py-20">
        <h3 className="text-base tracking-wide text-blue-500 uppercase md:text-lg ">
          Save time
        </h3>
        <h2 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl">
          Seamless Search
        </h2>
        <p className="max-w-3xl mx-auto text-base leading-7 text-gray-700 md:text-lg">
          Every single image in our library was painstakingly named, categorized
          and indexed by hand. Your time is valuable so we make it as fast and
          seamless for you to get where you want to go.
        </p>
        <div className="w-full max-w-4xl mx-auto mt-12">
          <dl className="bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-3">
            <div className="flex flex-col p-6 text-center border-b border-gray-200 sm:border-0 sm:border-r">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                Images
              </dt>
              <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-600">
                900+
              </dd>
            </div>
            <div className="flex flex-col p-6 text-center border-b border-gray-200 sm:border-0 sm:border-r">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                Brands
              </dt>
              <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-600">
                40+
              </dd>
            </div>
            <div className="flex flex-col p-6 text-center border-b border-gray-200 sm:border-0 sm:border-r">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                Images/mo
              </dt>
              <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-600">
                100+
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  );
}

export default About;
