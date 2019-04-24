import { connect } from 'react-redux';
import { closeModal } from '../../../../actions/modal_actioin';
import { createRental } from '../../../../actions/rentals_action'
import { withRouter } from 'react-router-dom';
import BookingActionModal from './booking_action_modal'

const msp = (state, ownProps) => {
  return {
    bookingData: state.ui.bookingData,
    currentUserId: state.session.id,
    formType: 'Confirmation'
  }
}

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    processForm: (data) => dispatch(createRental(data))
  }
}

export default withRouter(connect(msp, mdp)(BookingActionModal))