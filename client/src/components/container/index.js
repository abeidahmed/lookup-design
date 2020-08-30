import React from 'react';

export function Container({ children }) {
  return (
    <div className="container px-4 mx-auto sm:px-6 lg:px-8">{children}</div>
  );
}
