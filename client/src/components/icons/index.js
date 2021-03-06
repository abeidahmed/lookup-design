import React from 'react';

const Glyph = ({ icon }) => {
  switch (icon) {
    case 'search': {
      return (
        <g>
          <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
          <path d="M11.412,8.586C11.791,8.966,12,9.468,12,10h2c0-1.065-0.416-2.069-1.174-2.828c-1.514-1.512-4.139-1.512-5.652,0 l1.412,1.416C9.346,7.83,10.656,7.832,11.412,8.586z" />
        </g>
      );
    }
    case 'menu': {
      return (
        <g>
          <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
        </g>
      );
    }
    case 'grid': {
      return (
        <g>
          <path d="M4 4H8V8H4zM10 4H14V8H10zM16 4H20V8H16zM4 10H8V14H4zM10 10H14V14H10zM16 10H20V14H16zM4 16H8V20H4zM10 16H14V20H10zM16 16H20V20H16z" />
        </g>
      );
    }
    default:
      return null;
  }
};

export function Icon({ icon, ...props }) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <Glyph icon={icon} />
    </svg>
  );
}
