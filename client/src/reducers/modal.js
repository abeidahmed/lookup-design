import { OPEN_MODAL, CLOSE_MODAL } from 'types';

const initialState = {
  modalType: null,
  modalProps: {},
};

export function modal(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        modalType: action.payload.modalType,
        modalProps: action.payload.modalProps,
      };
    case CLOSE_MODAL:
      return {
        initialState,
      };
    default:
      return state;
  }
}
