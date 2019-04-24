import React from 'react'
import { Link } from 'react-router-dom';
import SearchBar from '../seachbar/search_bar';

class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  showDropdown() {
    $('#dropdown').toggleClass('hidden');
  }

  userPage(currentUser) {
    $('#dropdown').toggleClass('hidden');
    $("div.on").removeClass("on").addClass("off")
    return this.props.history.push({
      pathname: `/users/${currentUser.id}`,
    })
  }

  render() {
    const { currentUser, logout, openModal } = this.props

    const dropdownMenu = currentUser ? (
      <ul id="dropdown" className="dropdown hidden">
        <li onClick={this.userPage.bind(this, currentUser)}>My Bookings</li>
        <li onClick={logout}>Log Out</li>
      </ul>
    ) : (<></>)

    const display = currentUser ? (
      <div className="profile-menu">
        <div className="currentuser-name">{currentUser.fname} {currentUser.lname}</div>
        <div className="currentuser-icon" onClick={() => this.showDropdown()}></div>
      </div>
    ) : (
      <div className="items">
        <div className="nav-menu">
          <span onClick={() => openModal('Sign Up')}>Sign Up</span>
        </div>
        <div className="nav-menu">
          <span onClick={() => openModal('Log In')}>Log In</span>
        </div>
      </div>
    );
    
    return (
      <header className="nav-landing">
        <div className="navbar-logosearch">
          <Link to="/"><img src={window.logo} /></Link>
          <div className="navbar-searchbox">
            <SearchBar history={this.props.history} />
          </div>
        </div>
        {display}
        {dropdownMenu}
      </header>
    )
  }
}

export default NavBar;