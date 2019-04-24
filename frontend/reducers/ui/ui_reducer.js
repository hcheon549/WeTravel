import { combineReducers } from 'redux';

import filterReducer from './filter_reducer';
import modal from './modal_reducer';
import bookingData from './booking_reducer';

export default combineReducers({
  filters: filterReducer,
  modal,
  bookingData
})