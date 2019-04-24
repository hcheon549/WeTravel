import {connect} from 'react-redux';
import ListingShow from './listing_show';
import { fetchListing } from '../../../actions/listings_action';

const msp = (state, ownProps) => {
  // const rentals = Object.keys(state.entities.rentals).map(rentalId => {
  //   return state.entities.rentals[rentalId]
  // })
  return {
    listing: state.entities.listings[ownProps.match.params.id],
    users: state.entities.users,
    currentUserId: state.session.id,
    // rentals
  }
}

const mdp = dispatch => {
  return {
    fetchListing: (id) => dispatch(fetchListing(id)),
  }
}

export default connect(msp, mdp)(ListingShow);