import React from 'react';
import swal from 'sweetalert';

class BookingActionModal extends React.Component {
  constructor(props) {
    super(props);
    this.rentalData = {
      start_date: this.props.bookingData.start_date,
      end_date: this.props.bookingData.end_date,
      listing_id: this.props.bookingData.listing_id,
      num_guest: this.props.bookingData.num_guest,
    }

    // Modal Content Variation
    this.bookingPrompt = ( this.props.formType === "Cancellation" ) ? "Please, confirm your cancellation request" : "Please, confirm your rental request detail";
    this.blueButton = ( this.props.formType === "Cancellation" ) ? "Cancel this Rental" : "Confirm";
    this.redButton = ( this.props.formType === "Cancellation" ) ? "Keep this Rental" : "Cancel";
    this.processFormData = ( this.props.formType === "Cancellation" ) ? this.props.bookingData.rentalId: this.rentalData;
  }
  
  swal() {
    const swalMessage = ( this.props.formType === "Cancellation" ) ? (
      swal("Rental Cancelled!", "See you next time!", "success", { button: "OK!" })
      ) : (
      swal("Booking Confirmed!", "Get ready for your trip!", "success", { button: "Nice!" })
    );
    return swalMessage
  }

  formatDate(date){
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return month + '-' + day + '-' + year;
  }

  handleSubmit(){
    this.props.processForm(this.processFormData).then(() => {
      this.swal();
      this.props.closeModal();
      this.props.history.push({ pathname: `/users/${this.props.currentUserId}`});
    })
  }
  
  render() {
    const { bookingData, closeModal } = this.props
    
    return (
      <div className="booking-confirmation-form">
        <div className="booking-title">{this.bookingPrompt}</div>
        <div className="draw-line"></div>

        <div className="booking-details-container">
          <div className="listing-photo"></div>
          <div className="booking-detail"><span>{bookingData.title}</span></div>
          <div className="booking-detail"><span>Check In:</span> {this.formatDate(bookingData.start_date)}</div>
          <div className="booking-detail"><span>Check Out:</span> {this.formatDate(bookingData.end_date)}</div>
          <div className="booking-detail"><span>Total Charge:</span> ${bookingData.total_price}</div>
        </div>

        <div className="booking-buttons-container">
          <button onClick={this.handleSubmit.bind(this)}>
            {this.blueButton}
          </button>
          <button onClick={() => closeModal()}>
            {this.redButton}
          </button>
        </div>
      </div>
    )
  }
}

export default BookingActionModal;