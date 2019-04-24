import React from 'react';
import ListingMap from './listing_map';
import ListingsIndex from './listings_index';
import FilterBar from '../navbar/filter_bar';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $("div.on").removeClass("on").addClass("off")
  }

  render() {
    const { listings, updateFilter, history } = this.props
    return (
      <>
        <div className="filter">
            <FilterBar />
        </div>

        <div className="listings-container">
          <ListingsIndex
            listings={listings}
            history={history}
          />
        </div>

          <ListingMap
            updateFilter={updateFilter}
            listings={listings}
          />
      </>
    )
  }
}

export default Search;