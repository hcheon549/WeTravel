import React from 'react';
import RentalList from './rental_list';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('div.on').removeClass('on').addClass('off')
    this.props.fetchAllRentals()
  }

  viewListingDetail(rentalId) {
    return this.props.history.push({
      pathname: `/listing/${rentalId}`
    })
  }

  render() {
    const { currentUser, deleteRental, rentals, openBookingModal } = this.props
    
    const rentalsList = rentals ? (rentals.map((rental, idx) => {
      return <RentalList
                key={idx}
                rental={rental}
                viewListing={this.viewListingDetail.bind(this)}
                deleteRental={deleteRental}
                openBookingModal={openBookingModal}
              />
    })) : (
      <div></div>
    )

    return(
      <div className="main-section-profile">        
        <div className="user-glance-container">
          <div className="user-info-container">
            {/* <div className="user-picture"></div> */}
            <img className="user-picture" src={currentUser.photoUrl} />
            <div className="upload-image">Upload Photo</div>
          </div>

          <div className="user-info-container">
            <div className="user-activity">
            <i className="far fa-comment"></i>3 reviews
            </div>
            <div className="user-activity">
              <i className="fas fa-user-check"></i>verified
            </div>
          </div>

          <div className="user-info-container">
            <h3>{currentUser.fname} provided</h3>
            <div className="user-activity">
              <i className="fas fa-check"></i>Government ID
            </div>
            <div className="user-activity">
              <i className="fas fa-check"></i>Email Address
            </div>
            <div className="user-activity">
              <i className="fas fa-check"></i>Phone Number
            </div>
          </div>

        </div>

        <div className="user-rentals-container">
          <div className="user-information-container">
            <h1>Hi, {currentUser.fname} {currentUser.lname}</h1>
            <div className="join-date">Joined in 2019  ·  <span>Edit profile</span></div>
            <div className="residence">
              <i className="fas fa-home"></i>Lives in the United States
            </div>
          </div>

          <div className="user-rental-list-container">
            <h2>Your Rentals</h2>
            <ul>
              {rentalsList}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default UserPage;