import { 
  RECEIVE_ALL_RENTALS,
  RECEIVE_RENTAL,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../../actions/rentals_action';

const rentalsErrorsReducer = (oldState = [], action) => {
  switch(action.type) {
    case RECEIVE_ALL_RENTALS:
      return [];
    case RECEIVE_RENTAL:
      return [];
    case RECEIVE_ERRORS:
      return action.errors[0].responseJSON;
    case CLEAR_ERRORS:
      return [];
    default:
      return oldState;
  }
}

export default rentalsErrorsReducer;