import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actioin'; 
import NavBar from './nav_bar';

const msp = ({ entities, session }) => {
    const id = session.id;
    return {
        currentUser: entities.users[id]
    }
    
}

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: (formType) => dispatch(openModal(formType))
})

export default connect(msp, mdp)(NavBar)