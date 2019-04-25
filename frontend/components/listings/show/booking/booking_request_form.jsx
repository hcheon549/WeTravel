import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';

class BookRequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      start_date: null,
      end_date: null,
      num_guest: null,
      listing_id: this.props.listing.id,
    };

    this.disabledDays = [];
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.errors = this.errors.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.defineDisabledDays = this.defineDisabledDays.bind(this);
    this.overlappingRequest = this.overlappingRequest.bind(this);
    this.validRequest = this.validRequest.bind(this);
  }
  
  componentDidMount() {
    this.setState({start_date: ""})
  }

  defineDisabledDays() {
    this.props.rentals.forEach(({start_date, end_date}) => {
      let current_date = new Date(start_date + " 00:00");
      let finish_date = new Date(end_date + " 00:00");
      while ( current_date <= finish_date ) {
        let add_date = new Date(current_date)
        this.disabledDays.push(add_date);
        current_date.setDate(current_date.getDate() + 1);
      }
    })
  }

  update(field) {
    return (event) => {
      if (field === "num_guest"){
        this.setState({ [field]: parseInt(event.target.value) })
      } else {
        this.setState({ [field]: event.target.value })
      }
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    
    if (!this.props.currentUserId) {
      this.props.openSessionModal();
    } else {
      if (this.validRequest(this.state)) {
        const modalData = {
          start_date: this.state.start_date,
          end_date: this.state.end_date,
          num_guest: this.state.num_guest,
          listing_id: this.state.listing_id,
          total_price: this.total_price,
          title: this.props.listing.title,
          photoUrl: this.props.listing.photoUrls[0]
        }
        this.props.openBookingModal(modalData)
      } else {
        this.props.createRental(this.state)
      }
    }
  }

  overlappingRequest(start_date, end_date){
    const minDate = new Date(Math.min.apply(null,this.disabledDays))
    const maxDate = new Date(Math.max.apply(null,this.disabledDays))

    if ((start_date < minDate && maxDate < end_date)
        || ((minDate < start_date && start_date < maxDate) && (maxDate < end_date))
        || ( (start_date < minDate) && (minDate < end_date && end_date < maxDate))){
      return false
    } else {
      return true
    }
  }

  validRequest({start_date, end_date, num_guest}){
    const validity = ((start_date && end_date) && (num_guest && this.overlappingRequest(start_date, end_date))) ? true : false
    return validity
  }

  errors() {
    if (this.props.errors.rentals) {
      return (
        this.props.errors.rentals.map((error, idx) => {
          if (error.includes('End')) {
            error = "Must specify check-out date";
          } else if (error.includes('guest')) {
            error = "Guest has to be more than 1 person"
          } else if (error.includes('Stat')) { // change it to start
            error = "Must specify check-in date"
          };
          return (<li key={idx}>{error}</li>)
        })
      )
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
    this.props.clearRentals();
  }

  handleStartDateChange(day) {
    this.setState({ start_date: day });
  }

  handleEndDateChange(day) {
    this.setState({ end_date: day });
  }

  nextDay(day) {
    const nextDay = new Date(day)
    nextDay.setDate(day.getDate()+1)
    return nextDay
  }

  getNumDays(start, end) {
    const start_date = new Date(start);
    const end_date = new Date(end);
    const start_date_days = Date.UTC(start_date.getFullYear(), start_date.getMonth(), start_date.getDate())
    const end_date_days = Date.UTC(end_date.getFullYear(), end_date.getMonth(), end_date.getDate())
    return Math.floor((end_date_days - start_date_days ) / (1000 * 60 * 60 * 24));
  }
  
  render() {
    this.defineDisabledDays();
    const num_nights = this.getNumDays(this.state.start_date, this.state.end_date)
    this.total_price = Math.floor(this.props.listing.price * 0.12 + this.props.listing.price * num_nights + 35)

    const totalCost = ( this.state.end_date && this.state.start_date ) ? (
      <>
        <div className="calculation-row">
          <div className="fee-description">${this.props.listing.price} x {num_nights} nights</div>
          <div className="fee">${this.props.listing.price * num_nights}</div>
        </div>
        <div className="calculation-row">
          <div className="fee-description">Cleaning Fee<i className="far fa-question-circle"></i></div>
          <div className="fee">$35</div>
        </div>
        <div className="calculation-row">
          <div className="fee-description">Service Fee<i className="far fa-question-circle"></i></div>
          <div className="fee">${Math.floor(this.props.listing.price * 0.12)}</div>
        </div>
        <div className="calculation-row-total">
          <div className="fee-description">Total</div>
          <div className="fee">${this.total_price}</div>
        </div>
      </>
    ) : (null)


    const today = new Date();
    const start = this.state.start_date ? this.nextDay(new Date(this.state.start_date)) : this.nextDay(today)

    return (
      <div className="booking-container">
        <div className="price-container">
          <span className="price-tag">${this.props.listing.price}</span> per night
        </div>
        <div className="listing-review">
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </div>
        <div className="draw-line"></div>

        <form
          className="booking-request-form-container"
          onSubmit={this.handleSubmit}
        >
          <div className="booking-form-field-inline">
            <div className="booking-form-inline-field">
              <label>CHECK-IN</label>
              <DayPickerInput 
                  dayPickerProps={{
                    disabledDays: [
                      ...this.disabledDays,
                      {
                        before: today,
                      },
                    ]
                  }}
                  onDayChange={this.handleStartDateChange} />
            </div>

            <div className="booking-form-inline-field">
              <label>CHECKOUT</label>
              <DayPickerInput
                  dayPickerProps={{
                    month: start,
                    disabledDays: [
                      ...this.disabledDays,
                      {
                        before: start,
                      },
                    ]
                  }}
                  onDayChange={this.handleEndDateChange}
                />
            </div>
          </div>

          <div className="booking-form-field">
            <label>GUESTS</label>
            <input
              type="number"
              placeholder="Guests"
              min="1"
              onChange={this.update('num_guest')}
            />
          </div>

          {totalCost}
          
          <div className="booking-button">
            <button>Book</button>
          </div>
          <ul>
              {this.errors()}
          </ul>
        </form>
        <div className="no-charge">You won't be charged yet</div>
      </div>
    )
  }
}

export default BookRequestForm;