export const RECEIVE_ALL_RENTALS = "RECEIVE_ALL_RENTALS";
export const RECEIVE_RENTAL = "RECEIVE_RENTAL";
export const REMOVE_RENTAL = "REMOVE_RENTAL";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const CLEAR_RENTALS = "CLEAR_RENTALS";

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

import * as APIRentalsUtil from '../util/rentals_api_util';

export const receiveAllRentals = rentals => {
  return {
    type: RECEIVE_ALL_RENTALS,
    rentals
  }
}

const receiveRental = rental => {
  return {
    type: RECEIVE_RENTAL,
    rental
  }
}

const removeRental = rentalId => ({
  type: REMOVE_RENTAL,
  rentalId
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors: [errors]
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
})

export const clearRentals = () => ({
  type: CLEAR_RENTALS,
})

export const fetchAllRentals = () => dispatch => (
  APIRentalsUtil.fetchAllRentals()
    .then(
      (rentals) => dispatch(receiveAllRentals(rentals)),
      (errors) => dispatch(receiveErrors(errors))
    )
)

export const fetchRental = rentalId => dispatch => (
  APIRentalsUtil.fetchRental(rentalId)
    .then(
      rental => dispatch(receiveRental(rental)),
      errors => dispatch(receiveErrors(errors))
    )
)

export const createRental = rental => dispatch => (
  APIRentalsUtil.createRental(rental)
    .then(
      rental => dispatch(receiveRental(rental)),
      errors => dispatch(receiveErrors(errors))
    )
);

export const updateRental = rental => dispatch => (
  APIRentalsUtil.updateRental(rental)
    .then(
      rental => dispatch(receiveRental(rental)),
      errors => dispatch(receiveErrors(errors))
    )
);

export const deleteRental = rentalId => dispatch => (
  APIRentalsUtil.deleteRental(rentalId)
    .then(
      rentalId => dispatch(removeRental(rentalId)),
      errors => dispatch(receiveErrors(errors))
    )
);
