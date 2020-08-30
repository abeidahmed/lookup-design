import React from 'react';
import { connect } from 'react-redux';
import { openModal } from 'actions/modal';

function Card({ grid, openModal }) {
  function showUi() {
    openModal('SHOWUI', {
      id: 1,
      imgLink: 'google.com',
      size: 'max-w-screen-lg',
      position: 'center',
    });
  }

  return (
    <div className={`relative my-6 ${grid && 'md:w-1/2 md:px-4'}`}>
      <button
        onClick={showUi}
        className="absolute top-0 bottom-0 left-0 z-20 block w-full"
      >
        <span className="sr-only">Open image</span>
      </button>
      <div className="flex justify-between pt-2">
        <p className="text-lg font-bold capitalize">pitch</p>
      </div>
      <div className="flex flex-col mt-4">
        <div
          className="relative flex items-start justify-center overflow-hidden bg-white border border-gray-300 rounded-sm"
          style={{ maxHeight: 700 }}
        >
          <img
            className="relative z-10 max-w-full max-h-full"
            alt="pitch blogpost design example"
            src="https://res.cloudinary.com/dxfufcvpm/image/upload/w_800/pitch/screencapture-pitch-blog-collaborative-design-process-2020-07-31-11_02_10_kg7lgh.png"
          />
        </div>
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    openModal: (modalType, modalProps) =>
      dispatch(openModal(modalType, modalProps)),
  };
}

export default connect(null, mapDispatchToProps)(Card);
