class Api::V1::CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:update]

  def index
    @concert = Concert.find(params[:concert_id])
    # binding.pry
    @comment = @concert.comments
    render json: @comments, adapter: :json
  end

  def update
    @concert = Concert.find(params[:concert_id])
    comment = Comment.find(params[:id])
    user_email = review.user

    # if review.save!
    #   ReviewMailer.review_email(user_email).deliver
    #
    #
    #   render json: {
    #     status: 201,
    #     message: "Comment saved!",
    #     review: review,
    #   }.to_json
    # else
    #   render json: {
    #     status: 500,
    #     review: review,
    #     up_style: up_style,
    #     down_style: down_style
    #   }.to_json
    # end
  end
end
