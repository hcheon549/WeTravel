import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Modal Page
import Modal from './modal/modal';

// Nav Bar
import NavBarContainer from './navbar/nav_bar_container';

// Landing Page Search Form
import ListingSearchForm from './landing/listing_search_form';

// Listings Related
import ListShowContainer from './listings/show/listing_show_container';

// Search Result Show
import SearchContainer from '../components/listings/search_container';

// User's Page (Protected)
import { ProtectedRoute } from '../util/route_util';
import UserShowContainer from './user/user_show_container';

const App = () => {
  return (
    <div className="on">
      <Modal />
      <Route path="" component={NavBarContainer} />

      <Switch>
        <Route path="/listing/:id" component={ListShowContainer} />
        <Route exact path="/" component={ListingSearchForm} />
        <Route path="/index" component={SearchContainer} />
        <ProtectedRoute path="/users/:id" component={UserShowContainer} />
      </Switch>
    </div>
  )
}

export default App