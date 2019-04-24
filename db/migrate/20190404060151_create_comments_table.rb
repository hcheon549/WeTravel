class CreateCommentsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :rental_id, null: false
      t.text :body, null: false
      t.integer :rating, null: false
    end
    add_index :comments, :rental_id
  end
end
