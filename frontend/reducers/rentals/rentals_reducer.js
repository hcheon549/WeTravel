import {
  RECEIVE_ALL_RENTALS,
  RECEIVE_RENTAL,
  REMOVE_RENTAL,
  CLEAR_RENTALS
} from '../../actions/rentals_action';
import { RECEIVE_LISTING } from '../../actions/listings_action';
import merge from 'lodash/merge';

const rentalsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALL_RENTALS:
      return merge({}, oldState, action.rentals);
    case RECEIVE_RENTAL:
      return merge({}, oldState, { [action.rental.id]: action.rental });
    case REMOVE_RENTAL:
      let newState = merge({}, oldState);
      delete newState[action.rentalId];
      return newState;
    case RECEIVE_LISTING:
      const rental = action.payload.rentals || {};
      return rental;
    case CLEAR_RENTALS:
      return {};
    default:
      return oldState;
  }
}

export default rentalsReducer;