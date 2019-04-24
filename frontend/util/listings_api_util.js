export const fetchAllListings = (data) => {
  return (
    $.ajax({
      method: 'GET',
      url: '/api/listings',
      data: data
    })
  )
}

export const fetchListing = (id) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/listings/${id}`
    })
  )
}