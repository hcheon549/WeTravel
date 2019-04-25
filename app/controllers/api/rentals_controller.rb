class Api::RentalsController < ApplicationController
  def index
    @rentals = Rental.where(renter_id: current_user.id).includes(:listing)
    render :index
  end
  
  def create
    @rental = Rental.new(rental_params)
    @rental.renter_id = current_user.id
    
    if @rental.save
      render json: @rental
    else
      render json: @rental.errors.full_messages, status: 422
    end
  end

  def destroy
    @rental = Rental.find(params[:id])
    @rental.destroy
    render json: @rental.id
  end

  private
  def rental_params
    params.require(:rental).permit(:listing_id, :start_date, :end_date, :num_guest)
  end
end