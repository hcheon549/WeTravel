import React from 'react';
import { closeModal } from '../../actions/modal_actioin';
import { connect } from 'react-redux';

import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import BookingConfirmationContainer from '../../components/listings/show/booking/booking_confirmation_container';
import BookingCancellationContainer from '../../components/listings/show/booking/booking_cancellation_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'Log In':
      component = <LoginFormContainer />
      break;
    case 'Sign Up':
      component = <SignupFormContainer />
      break;
    case 'Booking Confirmation':
      component = <BookingConfirmationContainer />
      break;
    case 'Booking Cancellation':
      component = <BookingCancellationContainer />
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-chlid" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  )

}

const msp = state => {
  return {
    modal: state.ui.modal,
    // data: state.ui.data
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(Modal);