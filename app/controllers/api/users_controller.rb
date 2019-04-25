class Api::UsersController < ApplicationController
    def index 
      @users = User.all
      render json: @users
    end

    def show
      @user = User.find_by(id: params[:id])
      
      if @user
        render json: @user
      else
        render json: @user.errors.full_messages, status: 401
      end
    end

    def create 
      @user = User.new(user_params)
      if @user.save
        log_in(@user)
        # render :show 
        render json: @user
      else 
        render json: @user.errors.full_messages, status: 422
      end
    end

    private 
    def user_params 
      params.require(:user).permit(:email, :password, :fname, :lname, :introduction)
    end
end