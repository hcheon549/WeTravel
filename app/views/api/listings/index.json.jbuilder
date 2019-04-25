@listings.each do |listing|
  json.set! listing.id do 
    json.extract! listing, :id, :host_id, :lat, :long, :title, :listing_type, :num_guest, :num_room, :num_bed, :price, :description
    json.photoUrls listing.photos.map { |file| url_for(file)}
  end
end