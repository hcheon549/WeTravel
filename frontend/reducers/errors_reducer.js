import { combineReducers } from 'redux';
import sessionErrorsReducer from './sessions/session_errors_reducer';
import rentalsErrorsReducer from './rentals/rentals_errors_reducer';
import listingsErrorsReducer from './listings/listings_errors_reducer'

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    listings: listingsErrorsReducer,
    rentals: rentalsErrorsReducer
})

export default errorsReducer;