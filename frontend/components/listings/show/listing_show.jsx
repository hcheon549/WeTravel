import React from 'react';
import PhotoGrid from './photo_grid';
import ListingContent from './listing_content';
import BookRequestContainer from './booking/booking_request_container';

class ListShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    $("div.on").removeClass("on").addClass("off")
    this.props.fetchListing(this.props.match.params.id)
  }

  render(){
    const { listing, currentUserId, history } = this.props;
    
    if (!listing){
      return <div></div>
    }
    
    return(
      <>
        <PhotoGrid />
        <div className="main-section">
          <ListingContent
            listing={listing}
          />

          <BookRequestContainer 
            listing={listing}
            currentUserId={currentUserId}
            history={history}
          />
        </div>
      </>
    )
  }
}

export default ListShow;