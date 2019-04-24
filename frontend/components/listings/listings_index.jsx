import React from 'react';
import ListingsIndexItem from './listings_index_item';

class ListingsIndex extends React.Component {
  render() {
    const { listings, history } = this.props
    
    const lists = listings.map((listing) => {
      return (
        <ListingsIndexItem
          key={listing.id}
          listing={listing}
          history={history}
        />
      )
    })

    return (
      <div className="count-lists-container">
        <div className="count-lists">
          Exploring {listings.length} homes nearby...
        </div>
        
        <div className="listings">
          {lists}
        </div>
      </div>
    )
  }
}

export default ListingsIndex;