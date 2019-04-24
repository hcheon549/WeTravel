class Api::CommentsController < ApplicationController
  
#   ##### MODIFY COMMENT TABLE WITH LISTING_ID AND AUTHOR_ID ######

#   def index
#     @comments = Comment.find_by(listing_id: params[:id])
#     render :index
#   end

#   def create
#     @comment = Comment.new(comment_params)
#     @comment.author_id = current_user.id
#     @comment.listing_id = params[:id]

#     if @comment.save
#       render :show
#     else
#       render json: @comment, status: 422
#     end
#   end

#   def destroy
#     @comment = Comment.where(author_id: current_user.id).where(listing_id: params[:id])

#     if @comment.destroy
#       render :show
#     else
#       render json: @comment.errors.full_messages, status: 422
#     end
#   end

#   end

#   private

#   def comment_params
#     params.require(:comment).permit(:rating, :body)
#   end
end