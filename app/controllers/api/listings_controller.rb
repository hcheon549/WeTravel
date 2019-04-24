class Api::ListingsController < ApplicationController
  def index
    # 1) *params[:bounds]
    # 2) *params[:guests=1]
    # 3) params[:stay], 
    if params[:stay].values.none?("null")
      @listings = Listing.in_bounds_with_availability(bounds, guests, stay)
    else
      @listings = Listing.in_bounds(bounds, guests)
    end

    render :index
  end

  def show
    @listing = Listing.includes(:rentals).find_by(id: params[:id])
    if @listing
      render :show
    else
      # redirect_to api_listings
      # render json: @listing.errors.full_messages, status: 401
    end
  end

  private

  def bounds
    params[:bounds]
  end

  def guests
    params[:guests]
  end

  def stay
    params[:stay]
  end
end