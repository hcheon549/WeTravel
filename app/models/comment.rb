class Comment < ApplicationRecord
  # validates :rating, inclusion: { in: (1..5) }
  # validates :body, :rental_id, presence: true

  # has_one :rental
  # has_one :listing, through: :rental, src: :listing
  # has_one :author, through: :rental, src: :renter
end