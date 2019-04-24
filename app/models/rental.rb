class Rental < ApplicationRecord
  validates :renter_id, :listing_id, :start_date, :end_date, :num_guest, presence: true
  # valudates :num_guest, greater_than_or_equal_to: 1
  validate :start_must_come_before_end
  validate :valid_booking_request

  belongs_to :renter,
    class_name: :User,
    foreign_key: :renter_id,
    primary_key: :id

  belongs_to :listing,
    class_name: :Listing,
    foreign_key: :listing_id,
    primary_key: :id

  def valid_booking_request
    rentals = Rental
      .where.not(id: self.id)
      .where(listing_id: listing_id)
      .where.not('start_date > :end_date OR end_date < :start_date',
                  start_date: start_date, end_date: end_date)
    
    errors[:start_date] << 'Selected dates already have existing reservation' unless rentals.empty?
  end

  def start_must_come_before_end
    if start_date && end_date
      errors[:start_date] << 'must come before end date' if start_date > end_date
    end
  end
end