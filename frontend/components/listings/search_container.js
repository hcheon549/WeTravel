import { connect } from 'react-redux';
import { fetchAllListings } from '../../actions/listings_action';

import { updateFilter } from './../../actions/filter_actions';
import Search from './search';

const msp = state => {
  const listings = Object.keys(state.entities.listings).map((id) => {
    return state.entities.listings[id]
  })
  
  return {
    listings
  }
}

const mdp = dispatch => {
  
  return {
    updateFilter: (filterObject) => dispatch(updateFilter(filterObject)),
  }
}

export default connect(msp, mdp)(Search);