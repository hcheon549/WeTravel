import { connect } from 'react-redux';

import BookingRequestForm from './booking_request_form';
import { createRental, clearErrors, clearRentals } from '../../../../actions/rentals_action';
import { openModal, openBookingModal } from '../../../../actions/modal_actioin';

const msp = (state, ownProps) => {
  const rentals = Object.keys(state.entities.rentals).map((id) => {
    return state.entities.rentals[id]
  })
  return {
    rentals,
    history: ownProps.history,
    errors: state.errors
  }
}

const mdp = dispatch => {
  return {
    createRental: (rental) => dispatch(createRental(rental)),
    openSessionModal: () => dispatch(openModal('Log In')),
    clearErrors: () => dispatch(clearErrors()),
    clearRentals: () => dispatch(clearRentals()),
    openBookingModal: (data) => dispatch(openBookingModal('Booking Confirmation', data))
  }
}

export default connect(msp, mdp)(BookingRequestForm)