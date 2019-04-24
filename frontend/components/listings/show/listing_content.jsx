import React from 'react';
import { connect } from 'react-redux';
import DayPicker from 'react-day-picker/DayPicker';

class ListingContent extends React.Component {
  constructor(props){
    super(props)
    this.listing = this.props.listing
    this.state = {
      city: ""
    }

    this.houseIcon = this.houseIcon.bind(this);
    this.disabledDays = [];
    this.defineDisabledDays = this.defineDisabledDays.bind(this);
  }

  componentDidMount() {
    this.getCity();
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

  houseIcon() {
    switch(this.listing.listing_type){
      case "Entire House":
        return <i className="fas fa-home"></i>;
      case "Entire Apartment":
        return <i className="fas fa-building"></i>;
      case "Private Room":
        return <i className="fas fa-bed"></i>;
      case "Shared Room":
        return <i className="fas fa-bed"></i>;
      default:
        return <i className="fas fa-question-circle"></i>;
    }
  }

  getCity() {
    const geocoder = new google.maps.Geocoder;
    const latlng = {lat: parseFloat(this.listing.lat), lng: parseFloat(this.listing.long)};
    
    geocoder.geocode({'location': latlng}, (results) => {
      this.setState({ city: results[6].formatted_address})
    })
  }

  nextMonth() {
    const today = new Date()
    const nextMonth = new Date((today.getYear() + 1900) + "/" + (today.getMonth() + 2) + "/" + today.getDate())
    return nextMonth
  }

  render() {
    const houseIcon = this.houseIcon();
    this.defineDisabledDays();
    const nextMonth = this.nextMonth();
    
    return (
      <div className="content">
        <div className="listing-content">
          <div className="title-host-container">
            <div className="title-location-container">
              <div className="title">{this.listing.title}</div>
              <div className="city">{this.state.city}</div>
            </div>

            <div className="host-info-container">
              <div className="host-picture"></div>
              <div className="host-name">Host</div>
            </div>
          </div>
          
          <div className="listing-fact">
            <div className="house-fact">
              <div className="icon">{houseIcon}</div>
              <div className="listing-factsheet">
                <div className="listing-type">{this.listing.listing_type}</div>
                <div className="listing-facts">
                  <div className="num-guests">{this.listing.num_guest} guests</div>
                  <div className="num-bedroom">{this.listing.num_room} bedrooms</div>
                  <div className="num-beds">{this.listing.num_bed} beds</div>
                </div>
              </div>
            </div>

            <div className="house-fact">
              <div className="icon"><i className="fas fa-key"></i></div>
              <div className="listing-factsheet">
                <div className="listing-type">Great check-in experience</div>
                <div className="listing-explaination">
                  95% of recent guests gave the check-in process a 5-star rating.
                </div>
              </div>
            </div>

            <div className="house-fact">
              <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
              <div className="listing-factsheet">
                <div className="listing-type">Great Location</div>
                <div className="listing-explaination">
                  90% of recent guests gave the location a 5-star rating.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="listing-description">
          <div className="listing-title">This space</div>
          <div className="description">
            {this.listing.description}
          </div>
          <div className="listing-option">Contact the Host</div>
        </div>

        <div className="listing-amenities">
          <div className="listing-title">Amenities</div>
          
          <div className="amenities-row">
            <div className="amenities-item">
              <i className="fas fa-utensils"></i>Full Kitchen Set
            </div>
            <div className="amenities-item">
              <i className="fas fa-tv"></i>Cable TV
            </div>
          </div>

          <div className="amenities-row">
            <div className="amenities-item">
              <i className="fas fa-wifi"></i>Wi-fi Provided
            </div>
            <div className="amenities-item">
              <i className="fas fa-coffee"></i>Coffee Machine
            </div>
          </div>

          <div className="amenities-row">
            <div className="amenities-item">
              <i className="fas fa-dumbbell"></i>Weight Training Room
            </div>
            <div className="amenities-item">
              <i className="fas fa-parking"></i>Parking Lot Available
            </div>
          </div>
        </div>

        <div className="listing-calendar">
         <div className="listing-title">Availability</div>
          <div className="calendar-row">
            <DayPicker 
              disabledDays={[
                ...this.disabledDays,
                {before: new Date()}
              ]}
            />
            <DayPicker 
              initialMonth={nextMonth}
              disabledDays={[
                ...this.disabledDays,
                {before: new Date()}
              ]}
            />
          </div>
        </div>

        <div className="listing-reviews">
         <div className="listing-title">Reviews</div>
         {/* Review Content Here */}
        </div>
      </div>
    )
  }
}

const msp = state => {
  const rentals = Object.keys(state.entities.rentals).map((id) => {
    return state.entities.rentals[id]
  })
  return {
    rentals,
  }
}

export default connect(msp)(ListingContent);