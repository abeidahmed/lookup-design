import { OPEN_MODAL, CLOSE_MODAL } from 'types';

export function openModal(modalType, modalProps) {
  return {
    type: OPEN_MODAL,
    payload: {
      modalType,
      modalProps,
    },
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}
