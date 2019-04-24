import { connect } from 'react-redux';
import { fetchAllRentals, deleteRental } from '../../actions/rentals_action';
import { openBookingModal } from '../../actions/modal_actioin';
import UserShow from './user_show';

const msp = state => {
  const rentals = Object.keys(state.entities.rentals).map(rentalId => {
    return state.entities.rentals[rentalId]
  });
  return {
    currentUser: state.entities.users[state.session.id],
    rentals
  }
}

const mdp = dispatch => {
  return { 
    fetchAllRentals: () => dispatch(fetchAllRentals()),
    deleteRental: (id) => dispatch(deleteRental(id)),
    openBookingModal: (data) => dispatch(openBookingModal('Booking Cancellation', data))
  }
}

export default connect(msp, mdp)(UserShow);