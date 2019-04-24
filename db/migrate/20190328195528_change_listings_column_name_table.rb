class ChangeListingsColumnNameTable < ActiveRecord::Migration[5.2]
  def change
    rename_column :listings, :type, :listing_type
  end
end
