import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchSingleTag } from 'api/tags/show-tag';
import { Container } from 'components/container';
import { Pattern } from './assets/pattern';
import { Icon } from 'components/icons';
import Card from 'shared/card';

function TagTitle({ title }) {
  return (
    <div className="relative flex flex-col justify-end w-full mx-auto md:mt-0">
      <div
        className="relative items-center justify-center hidden w-full h-40 mt-5 overflow-hidden md:flex md:flex-col bg-brand-600"
        style={{
          background:
            'linear-gradient(268.09deg, rgb(0, 53, 188) 0.17%, rgb(63, 128, 255) 101.37%)',
          maxHeight: '30vh',
          borderRadius: 18,
        }}
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center overflow-hidden">
          <Pattern />
        </div>
      </div>
      <div className="absolute inset-y-0 flex items-center justify-center w-full mt-5">
        <p className="relative text-5xl font-semibold text-white">
          15 Results for <span className="capitalize">"{title}"</span>
        </p>
      </div>
    </div>
  );
}

function ShowTag() {
  const [grid, setGrid] = useState(true);
  const { id } = useParams();
  const { isLoading, isError, data } = useQuery(
    ['showTag', { id }],
    fetchSingleTag
  );

  if (isLoading || isError) return null;
  const { title } = data.data.tag;

  return (
    <main>
      <Container>
        <TagTitle title={title} />
        <section className="mt-8 md:mt-16">
          <div className="relative justify-end hidden py-2 space-x-2 border-b border-gray-300 md:flex">
            <button
              onClick={() => setGrid(false)}
              className="text-gray-600 focus:outline-none focus:text-gray-900 hover:text-gray-700"
            >
              <Icon icon="menu" className="w-6 h-6" />
            </button>
            <button
              onClick={() => setGrid(true)}
              className="text-gray-600 focus:outline-none focus:text-gray-900 hover:text-gray-700"
            >
              <Icon icon="grid" className="w-6 h-6" />
            </button>
          </div>
          <section className={`${grid && 'md:flex md:flex-wrap md:-mx-4'}`}>
            <Card grid={grid} />
          </section>
        </section>
      </Container>
    </main>
  );
}

export default ShowTag;
