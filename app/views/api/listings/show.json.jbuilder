json.set! :listing do
   json.extract! @listing, :id, :host_id, :lat, :long, :title, :listing_type, :num_guest, :num_room, :num_bed, :price, :description
end

json.set! :rentals do
  @listing.rentals.each do | rental |
    json.set! rental.id do
      json.extract! rental, :id, :renter_id, :listing_id, :start_date, :end_date, :num_guest
    end
  end
end