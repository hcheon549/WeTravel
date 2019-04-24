import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      urlhash: ""
    }
  }

  componentDidMount() {
    this.activateAutocomplete();
  }

  activateAutocomplete() {
    const input = document.getElementById('nav_location_search');
    const options = {
      types: ['(cities)']
    }
    this.autocomplete = new google.maps.places.Autocomplete(input, options);
  }

  handleSubmit(event) {
    if (event.key === 'Enter') {
      event.preventDefault();

      const geocoder = new google.maps.Geocoder();
      const address = document.getElementById('nav_location_search').value;
      let formatted_address, geometry

      geocoder.geocode( { 'address': address }, (results, status) => {
        if (status == 'OK'){
          formatted_address = results[0].formatted_address
          geometry = results[0].geometry
    
          this.location = {
            vicinity: formatted_address,
            center: {
              lat: geometry.location.lat(), 
              lng: geometry.location.lng()
            }
          }

          this.props.history.push({
            pathname: `/index`,
            hash: `&lat=${this.location.center.lat}&lng=${this.location.center.lng}`,
            state: location,
          })
       } else {
          console.log(results)
        }
      })
    }
  }

  render() {
    return (
      <div className="navbar-searchbox-container">
        <i className="fa fa-search" aria-hidden="true"></i>
        <input
        id="nav_location_search"
        type="text"
        placeholder="Search for new places"
        onKeyPress={this.handleSubmit}
        />
      </div>
    )
  }
}

export default SearchBar;