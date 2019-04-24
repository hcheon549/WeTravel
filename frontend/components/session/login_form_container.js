import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actioin';

const msp = state => {
  return {
    errors: state.errors,
    formType: 'Log In'
  };
};

const mdp = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal()),
    otherForm: () => dispatch(openModal('Sign Up'))
  };
};

export default connect(msp, mdp)(SessionForm)