import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { useOnOutsideClick } from 'utils/on-outside-click';
import { closeModal } from 'actions/modal';

function Wrapper({ closeModal, size, position, children }) {
  const ref = useRef();
  useOnOutsideClick(ref, closeModal);

  function modalPosition() {
    if (position === 'center') {
      return 'fixed bottom-0 z-50 px-4 py-4 inset-0 flex items-center justify-center';
    } else {
      return 'fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center';
    }
  }

  return (
    <div className={modalPosition()}>
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>
      <div
        ref={ref}
        className={`overflow-y-auto transition-all transform bg-white rounded-lg shadow-xl sm:w-full sm:${size}`}
        style={{ height: '100%' }}
      >
        {children}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    size: state.modal.modalProps.size || 'max-w-lg',
    position: state.modal.modalProps.position || 'bottom',
  };
}

function mapDispatchToProps(dispatch) {
  return {
    closeModal: () => dispatch(closeModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
