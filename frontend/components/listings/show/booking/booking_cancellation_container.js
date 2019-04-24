import { connect } from 'react-redux';
import { closeModal } from '../../../../actions/modal_actioin';
import { deleteRental } from '../../../../actions/rentals_action'
import { withRouter } from 'react-router-dom';
import BookingActionModal from './booking_action_modal';

const msp = (state, ownProps) => {
  return {
    bookingData: state.ui.bookingData,
    currentUserId: state.session.id,
    formType: 'Cancellation'
  }
}

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    processForm: (rentalId) => dispatch(deleteRental(rentalId))
  }
}

export default withRouter(connect(msp, mdp)(BookingActionModal))