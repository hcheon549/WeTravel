export const fetchAllRentals = () => (
  $.ajax({
    method: 'GET',
    url: '/api/rentals'
  })
)

export const fetchRental = rentalId => (
  $.ajax({
    method: 'GET',
    url: `/api/rentals/${rentalId}`
  })
)

export const createRental = rental => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/rentals',
      data: { rental }
    })
  )
}

export const updateRental = rental => (
  $.ajax({
    method: 'PATCH',
    url: `/api/rentals/${rental.id}`,
    data: { rental }
  })
)

export const deleteRental = rentalId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/rentals/${rentalId}`
  })
)