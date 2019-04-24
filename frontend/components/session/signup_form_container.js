import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actioin';

const msp = state => {
  return {
    errors: state.errors,
    formType: 'Sign Up'
  };
};

const mdp = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal()),
    otherForm: () => dispatch(openModal('Log In'))
  };
};

export default connect(msp, mdp)(SessionForm)