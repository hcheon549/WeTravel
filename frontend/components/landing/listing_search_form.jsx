import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';

class ListSearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      location: "",
      start_date: null,
      end_date: null,
      guests: 1,
     };

    this.defaultAddress = "New York"

     this.updateInput = this.updateInput.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleStartDateChange = this.handleStartDateChange.bind(this);
     this.handleEndDateChange = this.handleEndDateChange.bind(this);
  };

  componentDidMount(){
    $("div.off").removeClass("off").addClass("on")
    this.activateAutocomplete();
  }

  activateAutocomplete() {
    const input = document.getElementById('location_search')
    const options = {
      types: ['(cities)']
    }
    this.autocomplete = new google.maps.places.Autocomplete(input, options);
  }

  handleSubmit(event) {
    event.preventDefault();
    // const place = this.autocomplete.getPlace();
    const geocoder = new google.maps.Geocoder();
    const address = document.getElementById('location_search').value || this.defaultAddress;
    // let formatted_address, geometry
    geocoder.geocode( { 'address': address }, (results, status) => {
      if (status == 'OK'){
        const formatted_address = results[0].formatted_address
        const geometry = results[0].geometry
        const { start_date, end_date, guests } = this.state

        const loc = {
          vicinity: formatted_address,
          center: {
            lat: geometry.location.lat(), 
            lng: geometry.location.lng()
          }
        }
    
        const hashContent = `&lat=${loc.center.lat}&lng=${loc.center.lng}&checkin=${start_date}&checkout=${end_date}&guests=${guests}`
        
        this.props.history.push({
          pathname: `/index`,
          hash: hashContent,
          state: loc,
        })
      } else {
        window.alert(results)
      }
    })
  }

  updateInput(field) {
    return (event) => {
      this.setState( {[field]: event.target.value })
    }
  }

  // stringfy start_date and end_date to parse it into the url
  stringfyDate(date) {
    let dateObject = date
    return dateObject.getFullYear() + "-" + (dateObject.getMonth()+1) + "-" + dateObject.getDate()
  }
  
  handleStartDateChange(day) {
    this.setState({ start_date: this.stringfyDate(day) });
  }

  handleEndDateChange(day) {
    this.setState({ end_date: this.stringfyDate(day) });
  }

  nextDay(day) {
    const nextDay = new Date(day)
    nextDay.setDate(day.getDate()+1)
    return nextDay
  }

  render () {
    const today = new Date();
    const start = this.state.start_date ? this.nextDay(new Date(this.state.start_date)) : this.nextDay(today)

    return (
        <section className="search-form">
          <h1>Book unique homes and experiences</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="search-form-field">
              <label>WHERE</label>
              <input
                id="location_search"
                type="text"
                placeholder="Try New York, NY"
                onChange={this.updateInput('location')}
                /> 
            </div>

            <div className="search-form-field inline">
              <div className="search-form-inline-field">
                <label>CHECK-IN</label>
                {/* <input
                  type="date"
                  placeholder="mm/dd/yyyy"
                  onChange={this.updateInput('checkin')}
                /> */}
                <DayPickerInput 
                  dayPickerProps={{
                    disabledDays: { 
                      before: today
                    }
                  }}
                  onDayChange={this.handleStartDateChange} />
              </div>

              <div className="search-form-inline-field">
                <label>CHECKOUT</label>
                {/* <input
                  type="date"
                  placeholder="mm/dd/yyyy"
                  onChange={this.updateInput('checkout')}
                /> */}
                <DayPickerInput
                  dayPickerProps={{
                    month: start,
                    disabledDays: {
                      before: start
                    }
                  }}
                  onDayChange={this.handleEndDateChange}
                />
              </div>
            </div>

            <div className="search-form-field">
              <label>GUESTS</label>
              <input
                type="number"
                placeholder="Guests"
                min="1"
                onChange={this.updateInput('guests')}
              />
            </div>

            <div className="search-form-button">
              <button>Search</button>
            </div>
          </form>
        </section>
    )
  }
}

export default ListSearchForm;