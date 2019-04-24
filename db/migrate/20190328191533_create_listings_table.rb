class CreateListingsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.integer :host_id, null: false
      t.float :lat, null: false
      t.float :long, null: false
      t.string :title, null: false
      t.string :type, null: false
      t.integer :num_guest, null: false
      t.integer :num_room, null: false
      t.integer :num_bed, null: false
      t.float :price, null: false
      t.text :description, null: false
      t.timestamps
    end

    add_index :listings, :host_id
  end
end
