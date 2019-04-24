class CreateRentalsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :rentals do |t|
      t.integer :renter_id, null: false
      t.integer :listing_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.integer :num_guest, null: false
      t.timestamps
    end
    add_index :rentals, :renter_id
    add_index :rentals, :listing_id
  end
end
