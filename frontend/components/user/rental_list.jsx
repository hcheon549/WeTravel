import React from 'react';


class RentalList extends React.Component  {

  getNumDays(start, end) {
    const start_date = new Date(start);
    const end_date = new Date(end);
    const start_date_days = Date.UTC(start_date.getFullYear(), start_date.getMonth(), start_date.getDate())
    const end_date_days = Date.UTC(end_date.getFullYear(), end_date.getMonth(), end_date.getDate())
    return Math.floor((end_date_days - start_date_days ) / (1000 * 60 * 60 * 24));
  }

  render() {
    const { rental, viewListing, deleteRental, openBookingModal } = this.props

    const num_nights = this.getNumDays(rental.start_date, rental.end_date)
    const total_price = Math.floor(rental.price * 0.12 + rental.price * num_nights + 35)

    const modalData = {
      rentalId: rental.id,
      start_date: new Date(rental.start_date),
      end_date: new Date(rental.end_date),
      listing_id: rental.listing_id,
      total_price: total_price,
      title: rental.title,
    }
    
    return (
      <div className="user-rental-list">
        <div className="user-rental-picture"></div>
        <div className="user-rental-information">
          <div className="rental-title" onClick={() => viewListing(rental.listing_id)} >{rental.title}</div>
          <div className="rental-detail">{rental.listing_type} · {rental.num_room} ROOMS · {rental.num_bed} BEDS</div>

          <div className="rental-startend"><span>Check-in:</span> {rental.start_date}</div>
          <div className="rental-startend"><span>Check-out:</span> {rental.end_date}</div>

          <div className="links">
            <span className="edit">Edit</span>
            <span className="delete" onClick={() => openBookingModal(modalData)}>Cancel</span>
          </div>
        </div>
      </div>
    )
  }
}

export default RentalList;