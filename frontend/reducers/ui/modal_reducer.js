import { OPEN_MODAL, CLOSE_MODAL, OPEN_BOOKING_MODAL } from '../../actions/modal_actioin';

const modalReducer = (state = null, action) => {
  switch(action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return null;
    case OPEN_BOOKING_MODAL:
      return action.modal
    default:
      return state;
  }
}

export default modalReducer