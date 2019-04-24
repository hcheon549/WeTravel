import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from '../../actions/session_actions';

const sessionErrorsReducer = ( oldState = [], action ) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_ERRORS:
            return action.errors[0].responseJSON;
        case CLEAR_ERRORS:
            return [];
        default:
            return oldState;
    }
}

export default sessionErrorsReducer;