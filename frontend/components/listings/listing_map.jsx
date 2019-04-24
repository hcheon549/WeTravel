import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';
import ListingsIndexItem from '../listings/listings_index_item';
import ReactDOMServer from 'react-dom/server'

class ListingMap extends React.Component {
  constructor(props) {
    super(props);
    const params = new URLSearchParams(`${this.props.history.location.hash}`);

    this.centerCoor = {
      lat: parseFloat(params.get('lat')),
      lng: parseFloat(params.get('lng'))
    }

    this.mapOption = {
      center: this.centerCoor,
      zoom: 12
    }

    this.stay = {
      start_date: params.get('checkin'),
      end_date: params.get('checkout')
    }

    this.guests = {
      guests: parseInt(params.get('guests'))
    }
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.mapNode, this.mapOption);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    this.registerListeners();
    this.MarkerManager.updateMarkers(this.props.listings);

  }

  componentDidUpdate(prevProps) {
    if (this.props.history.location.hash !== prevProps.location.hash) {
      const new_params = new URLSearchParams(`${this.props.history.location.hash}`);
      this.map.setCenter({ lat: parseFloat(new_params.get('lat')), lng: parseFloat(new_params.get('lng')) })
    }
    this.MarkerManager.updateMarkers(this.props.listings);
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };
      
      this.props.updateFilter({'bounds': bounds, 'stay': this.stay, 'guests': this.guests});
    });
  }

  handleMarkerClick(listing, marker) {
    const contentString = (
      `<div class="title" style="padding:0;" onClick=${() => this.props.history.push(`index/${listing.id}`)}>${listing.title}</div>` + 
      '<div className="type-bed">' +
      `<div>${listing.listing_type} · ${listing.num_bed} bed</div>` +
      '</div>' +
      `<div class="price" style="padding:0;">$${listing.price} per night</div>`
    )
    // onClick title NOT WORKING
    // const reactToString = ReactDOMServer.renderToStaticMarkup(<ListingsIndexItem key={listing.id} listing={listing} history={history}/>)

    this.infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 250
    })
    this.infowindow.open(this.map, marker)
  }


  render() {
    return (
      <div className="map-container">
        <div id="map" ref={map => this.mapNode = map}>
          Map
        </div>
      </div>

    )
  }
}

export default withRouter(ListingMap);