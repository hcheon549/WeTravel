# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Listing.destroy_all
Rental.destroy_all

user1 = User.create!(email: "user1@gmail.com", password: "user1", fname: "Eric", lname: "Cheon", introduction: "I'm the founder of WeTravel!")
user1.photo.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/WeTravel/app/assets/images/users/user1.jpg"), filename: "user1.jpg")

user2 = User.create!(email: "user2@gmail.com", password: "user2", fname: "Litton", lname: "Liao", introduction: "Travel-holic!")
user2.photo.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/WeTravel/app/assets/images/users/user2.jpg"), filename: "user.jpg")

user3 = User.create!(email: "user3@gmail.com", password: "user3", fname: "Narae", lname: "Lee", introduction: "")
user3.photo.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/WeTravel/app/assets/images/users/user3.jpg"), filename: "user3.jpg")

demouser = User.create!(email: "demo-user@email.com", password: "demo-user", fname: "Demo", lname: "User", introduction: "Demo user introduction text")
demouser.photo.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/WeTravel/app/assets/images/users/demouser.jpg"), filename: "demouser.jpg")

demouser_listing1 = Listing.create!(
  host_id: demouser.id,
  lat: 34.0430,
  long: -118.2673,
  title: "Perfect Los Angeles apartment 5 minutes walking distance to the Staples Cnter!",
  listing_type: "Entire House",
  num_guest: 6,
  num_room: 3,
  num_bed: 3,
  price: 450,
  description: "This clean and very comfortable room in the heart of Downtown Los Angeles has the best location for any visitors and is two blocks away from Bryant Park. Am always excited to share the space with guests! Thanks for taking a look."
)

demouser_listing1.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing1_1.jpg"), filename: "listing1_1.jpg")
demouser_listing1.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing1_2.jpg"), filename: "listing1_2.jpg")
demouser_listing1.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing1_3.jpg"), filename: "listing1_3.jpg")
demouser_listing1.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing1_4.jpg"), filename: "listing1_4.jpg")
demouser_listing1.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing1_5.jpg"), filename: "listing1_5.jpg")


demouser_listing2 = Listing.create!(
  host_id: demouser.id,
  lat: 34.0407,
  long: -118.2468,
  title: "Lovely Californian house at the heart of Beverly Hills!",
  listing_type: "Private Room",
  num_guest: 2,
  num_room: 1,
  num_bed: 1,
  price: 120,
  description: "This clean and very comfortable room in the heart of Midtown Manhattan has the best location for any visitors and is two blocks away from Bryant Park. Am always excited to share the space with guests! Thanks for taking a look."
)
demouser_listing2.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing2_1.jpg"), filename: "listing2_1.jpg")
demouser_listing2.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing2_2.jpg"), filename: "listing2_2.jpg")
demouser_listing2.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing2_3.jpg"), filename: "listing2_3.jpg")
demouser_listing2.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing2_4.jpg"), filename: "listing2_4.jpg")
demouser_listing2.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing2_5.jpg"), filename: "listing2_5.jpg")


user1_listing1 = Listing.create!(
  host_id: user1.id,
  lat: 40.7536,
  long: -73.9832,
  title: "Beautiful Private Home - minutes from the Grand Central!",
  listing_type: "Entire House",
  num_guest: 8,
  num_room: 2,
  num_bed: 4,
  price: 250,
  description: "Our home is located in a beautiful residential neighborhood of Mitown East, close to the Grand Central Terminal. You’ll love our place because of the comfy beds, updated furnishing and the private backyard! Our place is good for families (with kids), couples and groups. Our home has recently been renovated, including new paint, new light fixtures, new appliances, and almost all new furnishings!"
)
user1_listing1.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing3_1.jpg"), filename: "listing3_1.jpg")
user1_listing1.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing3_2.jpg"), filename: "listing3_2.jpg")
user1_listing1.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing3_3.jpg"), filename: "listing3_3.jpg")
user1_listing1.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing3_4.jpg"), filename: "listing3_4.jpg")
user1_listing1.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing3_5.jpg"), filename: "listing3_5.jpg")


user1_listing2 = Listing.create!(
  host_id: user1.id,
  lat: 40.7589,
  long: -73.9851,
  title: "Modern Studio APT in K- Town",
  listing_type: "Entire Apartment",
  num_guest: 2,
  num_room: 0,
  num_bed: 1,
  price: 200,
  description: "Cozy Studio Apartment in one of the best locations! It has been recently renovated, so everything looks modern. Best-suited for a couple or friends. Literally everything is nearby. Empire state building, times square, MSG, chelsea, gramercy, bryan park and much much more."
)
user1_listing2.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing4_1.jpg"), filename: "listing4_1.jpg")
user1_listing2.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing4_2.jpg"), filename: "listing4_2.jpg")
user1_listing2.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing4_3.jpg"), filename: "listing4_3.jpg")
user1_listing2.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing4_4.jpg"), filename: "listing4_4.jpg")
user1_listing2.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing4_5.jpg"), filename: "listing4_5.jpg")


user1_listing3 = Listing.create!(
  host_id: user1.id,
  lat: 40.7505,
  long: -73.9934,
  title: "Beautiful apartment located at the Madison Square Garden",
  listing_type: "Private Room",
  num_guest: 8,
  num_room: 2,
  num_bed: 4,
  price: 250,
  description: "Our home is located in a beautiful residential neighborhood of Mitown East, close to the Grand Central Terminal. You’ll love our place because of the comfy beds, updated furnishing and the private backyard! Our place is good for families (with kids), couples and groups. Our home has recently been renovated, including new paint, new light fixtures, new appliances, and almost all new furnishings!"
)
user1_listing3.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing5_1.jpg"), filename: "listing5_1.jpg")
user1_listing3.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing5_2.jpg"), filename: "listing5_2.jpg")
user1_listing3.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing5_3.jpg"), filename: "listing5_3.jpg")
user1_listing3.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing5_4.jpg"), filename: "listing5_4.jpg")
user1_listing3.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing5_5.jpg"), filename: "listing5_5.jpg")


user1_listing4 = Listing.create!(
  host_id: user1.id,
  lat: 40.7118,
  long: -74.0131,
  title: "Lovely room in the Battery Park Neighborhood",
  listing_type: "Private Room",
  num_guest: 2,
  num_room: 0,
  num_bed: 1,
  price: 200,
  description: "Cozy Studio Apartment in one of the best locations! It has been recently renovated, so everything looks modern. Best-suited for a couple or friends. Literally everything is nearby. Empire state building, times square, MSG, chelsea, gramercy, bryan park and much much more."
)
user1_listing4.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing6_1.jpg"), filename: "listing6_1.jpg")
user1_listing4.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing6_2.jpg"), filename: "listing6_2.jpg")
user1_listing4.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing6_3.jpg"), filename: "listing6_3.jpg")
user1_listing4.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing6_4.jpg"), filename: "listing6_4.jpg")
user1_listing4.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing6_5.jpg"), filename: "listing6_5.jpg")


user1_listing5 = Listing.create!(
  host_id: user1.id,
  lat: 40.7233,
  long: -74.0030,
  title: "SoHo home that you do NOT want to miss",
  listing_type: "Entire Apartment",
  num_guest: 5,
  num_room: 2,
  num_bed: 2,
  price: 300,
  description: "Cozy Studio Apartment in one of the best locations! It has been recently renovated, so everything looks modern. Best-suited for a couple or friends. Literally everything is nearby. Empire state building, times square, MSG, chelsea, gramercy, bryan park and much much more."
)
user1_listing5.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing7_1.jpg"), filename: "listing7_1.jpg")
user1_listing5.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing7_2.jpg"), filename: "listing7_2.jpg")
user1_listing5.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing7_3.jpg"), filename: "listing7_3.jpg")
user1_listing5.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing7_4.jpg"), filename: "listing7_4.jpg")
user1_listing5.photos.attach(io: File.open("/Users/ericcheon/Documents/AppAcademy/FullStackProject/images/listing7_5.jpg"), filename: "listing7_5.jpg")


# GRAND CENTRAL 1
Rental.create!(
  renter_id: demouser.id,
  listing_id: user1_listing1.id,
  start_date: "2019-05-16",
  end_date: "2019-05-20",
  num_guest: 2
)

# GRAND CENTRAL 2
Rental.create!(
  renter_id: user1.id,
  listing_id: user1_listing1.id,
  start_date: "2019-05-22",
  end_date: "2019-05-25",
  num_guest: 2
)

# GRAND CENTRAL 3
Rental.create!(
  renter_id: user2.id,
  listing_id: user1_listing1.id,
  start_date: "2019-05-26",
  end_date: "2019-05-29",
  num_guest: 2
)

# K-TOWN 1
Rental.create!(
  renter_id: demouser.id,
  listing_id: user1_listing2.id,
  start_date: "2019-05-21",
  end_date: "2019-05-24",
  num_guest: 2
)

# K-TOWN 2
Rental.create!(
  renter_id: user1.id,
  listing_id: user1_listing2.id,
  start_date: "2019-05-26",
  end_date: "2019-05-29",
  num_guest: 2
)

# K-TOWN 3
Rental.create!(
  renter_id: user2.id,
  listing_id: user1_listing2.id,
  start_date: "2019-05-30",
  end_date: "2019-06-2",
  num_guest: 2
)

# SOHO
Rental.create!(
  renter_id: demouser.id,
  listing_id: user1_listing5.id,
  start_date: "2019-05-25",
  end_date: "2019-05-27",
  num_guest: 2
)

# STAPLES CENTER
Rental.create!(
  renter_id: user1.id,
  listing_id: demouser_listing1.id,
  start_date: "2019-06-8",
  end_date: "2019-06-10",
  num_guest: 1
)