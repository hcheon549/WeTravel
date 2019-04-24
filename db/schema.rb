# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_04_04_060151) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer "rental_id", null: false
    t.text "body", null: false
    t.integer "rating", null: false
    t.index ["rental_id"], name: "index_comments_on_rental_id"
  end

  create_table "listings", force: :cascade do |t|
    t.integer "host_id", null: false
    t.float "lat", null: false
    t.float "long", null: false
    t.string "title", null: false
    t.string "listing_type", null: false
    t.integer "num_guest", null: false
    t.integer "num_room", null: false
    t.integer "num_bed", null: false
    t.float "price", null: false
    t.text "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["host_id"], name: "index_listings_on_host_id"
  end

  create_table "rentals", force: :cascade do |t|
    t.integer "renter_id", null: false
    t.integer "listing_id", null: false
    t.date "start_date", null: false
    t.date "end_date", null: false
    t.integer "num_guest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["listing_id"], name: "index_rentals_on_listing_id"
    t.index ["renter_id"], name: "index_rentals_on_renter_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "fname", null: false
    t.string "lname", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.text "introduction"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email"
  end

end
