import {
  RECEIVE_ALL_LISTINGS,
  RECEIVE_LISTING,
} from '../../actions/listings_action';
import { merge } from 'lodash';

const listingsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALL_LISTINGS:
      return action.listings;
    case RECEIVE_LISTING:
      return { [action.payload.listing.id]: action.payload.listing };
    default:
      return oldState;
  }
}

export default listingsReducer