<p align="center">
  <img src="https://github.com/hcheon549/WeTravel/blob/master/app/assets/images/ReadmeLogo.png">
</p>

## Overview
[Live Demo](https://we-travel.herokuapp.com)

### Introduction
WeTravel is a single-page AirBnb clone application. Users can search a places to stay(namely a listing) based on location, availability and the number of guests they are traveling with. The website has a functionality to book a listing, and see all the listings that a user has booked with the past bookings and the future bookings.

### Navigation
Users can view different results with their interaction with the embedded google map that marks the places where the result listings are located and see breif information of each listing when they click the marker on the map.

Users can see the detail of each listings by clicking the title of the search results. The listing show page shows the detail information of the listing, pictures of the listing uploaded by the host, host information and the booking request from where users can select the dates they are planning to travel and the number of guests. The calendar shows the dates that are unavailable by disbeling those dates.

Users can also check their own page where they can upload their photos and update their information. Users can also check their past and future bookings, update or cancel.

## Technologies

### Backend
+ Ruby on Rails
+ PostgreSQL

### Frontend
+ React.js
+ Redux

### APIs
+ [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial)
  + Maps for embedded map on the search result page
  + Markers for the marker of each listings on the map
  + InfoWindow for the breif information on each listing on click
  + Autocomplete for recommended location city on search input field
  + Geocoder for invalid, misspelled or custom address search by users
+ [React DayPicker](https://github.com/gpbl/react-day-picker)

## Pages

### Landing/Search Form
[landing-page]: https://github.com/hcheon549/WeTravel/blob/master/app/assets/images/landingPage.png "Landing Page"
![alt text][landing-page]

The landing page is the first page that users land. It gives a simple search form where users can search based on Location, Availability and the Number of Guests.

+ **Location**: Location input field has Google Maps Autocomplete and Geocoder embedded for location recommendation, custom search, any searches with typos (ie. "Ne wyok" search will show listings of New York). The search result will be based on the coordinate of New York, NY if the location field is empty.
  + **Empty Search Parameter**: Search result will show listings based in New York, NY.
+ **Availability**: Check-in and Check-out input fields has React DayPicker embedded for users' easy and stylish interactivity. If any of the fields is empty, the search function will not consider any availability in its result. It will show every listings based on the location search.
  + **Empty Search Parameter**: Availability will be disregarded in the seasrch if any of the Check-in or the Checkout input fields is missing. The result will yield all the listings based on the location and the number of guests only.
+ **Number of Guest**: The Number of Guests search is set with the minimum value of 1. There is no maximum number of guests a user can input for searching, but any larger numbers will limit the listings results based on each listing's maximum number of guests.
  + **Empty Search Parameter**: the Number of Guest will default to an one-guest.

### Session(Log-in, Sign-up) Modal
[session-modal]: https://github.com/hcheon549/WeTravel/blob/master/app/assets/images/SessionModal.png "Session Modal"
![alt text][session-modal]

Users can use all functionalities of this app without being logged in or signed up. Users will be asked to log in or sign up once they try to make a booking of a listing on the Listing Detail Page. Users can toggle around the log in and sign up form without having to load different page on the modal by clicking Sign up or Log in link on the bottom of the Modal form.

### Search Results Page
[search-results-page]: https://github.com/hcheon549/WeTravel/blob/master/app/assets/images/SearchResult.png "Search Result Page"
![alt text][search-results-page]

Search Results Page has 4 sections:
+ **Navigation Bar**: Users can search listings of different location by searching directly on the Nav Bar search input field
+ **Filter Bar**: Users can filter the search results based on their measure parameters. This filter is NOT functional at the time of submission, but the functionality will be added in the future
+ **Result Listings**: The list of listings based on the searching parameters (location, optional availability and the number of guests).
+ **Map**: The map shows the location of all the listings resulted by the search parameters. Users can click the marker on the map to see a breif detail of the listing. Users can move around the map and the result listings will update by listing and unlisting based on the map's boundary.

### Listing Detail Page
[listing-detail-page]: https://github.com/hcheon549/WeTravel/blob/master/app/assets/images/ListingDetail.png "Listing Detail Page"
![alt text][listing-detail-page]

The listing detail page has 3 sections:
+ **Navigation Bar**: Users can search listings of different location by searching directly on the Nav Bar search input field
+ **Photo Grid**: Shows at least 5 photos of the listing. The functionality of enlarging the image and navigating to see more images will be added in the future
+ **Listing's Detail Content**: The listing's detail content include its overview information, description, the list of amenitities, available dates with React DayPicker canlendars. Hosting information, review functionality, the list of reviews, neighborhood information etc will be added in the future.
+ **Booking Request Form**: The booking request form includes React DayPicker to book dates. Calendar blocks the dates with existing booking, showing users that the dates are unavailable. It also has the number of guests field. Booking click will require session, and show the session modal if a user is not logged in.

### User's Page
[users-page]: https://github.com/hcheon549/WeTravel/blob/master/app/assets/images/UserDetail.png "Users-Page"
![alt text][users-page]

Users images has 4 sections:
+ **Navigation Bar**: Users can search listings of different location by searching directly on the Nav Bar search input field
+ **User Information Sidebar**: Gives easy checklist of the user's credential and a link to upload a profile picture
+ **User Information Detail**: Gives in-depth information about the user.
+ **User's Bookings**: Shows the list of bookings that the user has made including previous and the future listing. Each bookings list has breif information about the listing including the title, the number of rooms, the number of beds and the booked check-in and check-out dates. It also has a link to update or cancel listings for the future bookings. Differentiating the past and future bookings and editing has not been implemented at the time of the submission, but it is planning to be added in the future.