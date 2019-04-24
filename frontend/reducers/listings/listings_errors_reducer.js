import { RECEIVE_ALL_LISTINGS, RECEIVE_LISTING, RECEIVE_ERRORS } from '../../actions/listings_action';

const listingsErrorsReducer = (oldState = [], action) => {
  switch(action.type) {
    case RECEIVE_ALL_LISTINGS:
      return [];
    case RECEIVE_LISTING:
      return [];
    case RECEIVE_ERRORS:
      return action.errors[0].responseJSON;
    default:
      return oldState;
  }
}

export default listingsErrorsReducer;