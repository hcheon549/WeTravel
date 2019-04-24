import { fetchAllListings } from './listings_action';

export const UPDATE_FILTER = "UPDATE_FILTER";

export const changeFilter = (filter, value) => {
  return {
    type: UPDATE_FILTER,
    filter,
    value
  }
}

export const updateFilter = (filterObject) => (dispatch, getState) => {
  Object.keys(filterObject).forEach(filter => {
    dispatch(changeFilter(filter, filterObject[filter]));
  })
  
  //getState().ui.filters <--- data passed into the ajax request
  return fetchAllListings(getState().ui.filters)(dispatch);
};