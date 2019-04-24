class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(listings){
    const listingsObj = {};
    listings.forEach(listing => listingsObj[listing.id] = listing);

    listings
      .filter(listing => !this.markers[listing.id])
      .forEach(newListing => this.createMarkerFromListing(newListing, this.handleClick))

    Object.keys(this.markers)
      .filter(listingId => !listingsObj[listingId])
      .forEach(listingId => this.removeMarker(this.markers[listingId]))
  }

  createMarkerFromListing(listing) {
    const position = new google.maps.LatLng(listing.lat, listing.long);
    const markerIcon = {
      path: 'M22-48h-45v28h16l6 5 6-5h16z',
      fillColor: 'white',
      fillOpacity: 1,
      scale: 0.85,
      labelOrigin: new google.maps.Point(-1, -33),
      strokeColor: 'gray',
    }
    const markerLabel = {
      text: `$${listing.price}`,
      fontWeight: '800',
      fontSize: '12px',
    }
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      listingId: listing.id,
      icon: markerIcon,
      label: markerLabel
    });
    
    marker.addListener('click', () => this.handleClick(listing, marker));
    this.markers[marker.listingId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.listingId].setMap(null);
    delete this.markers[marker.listingId];
  }
}

export default MarkerManager;