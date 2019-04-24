@rentals.each do |rental|
  json.set! rental.id do 
    json.extract! rental, :id, :renter_id, :listing_id, :start_date, :end_date, :num_guest
    json.extract! rental.listing, :title, :listing_type, :num_room, :num_bed, :price
  end
end