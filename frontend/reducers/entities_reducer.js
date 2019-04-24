import { combineReducers } from 'redux';

import usersReducer from './sessions/users_reducer';
import listingsReducer from  './listings/listings_reducer';
import rentalsReducer from './rentals/rentals_reducer';
// import commentsReducer from './comments/comments_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    listings: listingsReducer,
    rentals: rentalsReducer
    // comments: commentsReducer
})

export default entitiesReducer;