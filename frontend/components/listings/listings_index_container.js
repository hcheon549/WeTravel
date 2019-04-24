import { connect } from 'react-redux';
import { fetchAllListings } from '../../actions/listings_action';
import ListingsIndex from './listings_index';

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
    // fetchAllListings: () => dispatch(fetchAllListings())
  }
}

export default connect(msp, mdp)(ListingsIndex);