class Listing < ApplicationRecord
  validates :host_id, :lat, :long, :title, :listing_type, :num_guest,
            :num_room, :num_bed, :price, :description, presence: true
  validates :title, length: { minimum: 5 }
  validates :description, length: { minimum: 10 }

  belongs_to :host,
    class_name: :User,
    foreign_key: :host_id,
    primary_key: :id

  has_many :rentals,
    class_name: :Rental,
    foreign_key: :listing_id,
    primary_key: :id

  has_many_attached :photos

  def self.in_bounds_with_availability(bounds, guests, stay)
    between = Rental.select("listing_id")
                    .where("? BETWEEN start_date AND end_date
                          OR ? BETWEEN start_date AND end_date",
                          stay[:start_date], stay[:end_date])

    cover = Rental.select("listing_id")
                  .where("? < start_date AND ? > end_date",
                          Date.parse(stay[:start_date]), Date.parse(stay[:end_date]))
                          
    self.in_bounds(bounds, guests).where.not(id: between).where.not(id: cover)
  end

  def self.in_bounds(bounds, guests)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("long > ?", bounds[:southWest][:lng])
      .where("long < ?", bounds[:northEast][:lng])
      .where("num_guest >= ?", guests[:guests])
  end
end