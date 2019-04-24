import { OPEN_BOOKING_MODAL } from '../../actions/modal_actioin';

const modalBookingReducer = (state = null, action) => {
  switch(action.type) {
    case OPEN_BOOKING_MODAL:
      return action.data
    default:
      return state;
  }
}

export default modalBookingReducer