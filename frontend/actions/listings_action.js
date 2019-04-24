export const RECEIVE_ALL_LISTINGS = "RECEIVE_ALL_LISTINGS"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"
export const RECEIVE_LISTING = "RECEIVE_LISTING"

import * as APIListingsUtil from '../util/listings_api_util';
import {receiveAllRentals} from './rentals_action';

const receiveAllListings = (listings) => ({
  type: RECEIVE_ALL_LISTINGS,
  listings,
})

const receiveListing = (payload) => ({
  type: RECEIVE_LISTING,
  payload,
})

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors: [errors]
})

export const fetchAllListings = (filters) => dispatch => (
  APIListingsUtil.fetchAllListings(filters)
    .then(
      (listings) => dispatch(receiveAllListings(listings)),
      (errors) => dispatch(receiveErrors(errors))
    )
)

export const fetchListing = listingId => dispatch => (
  APIListingsUtil.fetchListing(listingId)
    .then(
      (payload) => dispatch(receiveListing(payload)),
      (errors) => dispatch(receiveErrors(errors))
    )
)