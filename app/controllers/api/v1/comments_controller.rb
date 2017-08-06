class Api::V1::CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:update]

  def update
    review = Review.find(params[:id])
    vote = Vote.find_or_create_by(user: current_user, review: review)
    user_email = review.user

    if params["vote"] == "up" && vote.value < 1
      vote.value += 1
      review.total_votes += 1
      vote.save!
      review.save!
      ReviewMailer.review_email(user_email).deliver

      up_style = nil
      down_style = nil
      if vote.value == 1
        up_style = 'green'
        down_style = ''
      elsif vote.value == -1
        up_style = ''
        down_style = 'red'
      else
        up_style = ''
        down_style = ''
      end

      render json: {
        status: 201,
        message: "successfully voted on a review",
        review: review,
        up_style: up_style,
        down_style: down_style
      }.to_json

    elsif params["vote"] == "down" && vote.value > -1
      vote.value -= 1
      review.total_votes -= 1
      vote.save!
      review.save!
      ReviewMailer.review_email(user_email).deliver

      up_style = nil
      down_style = nil
      if vote.value == 1
        up_style = 'green'
        down_style = ''
      elsif vote.value == -1
        up_style = ''
        down_style = 'red'
      else
        up_style = ''
        down_style = ''
      end

      render json: {
        status: 201,
        message: "successfully voted on a review",
        review: review,
        up_style: up_style,
        down_style: down_style
      }.to_json
    else

      up_style = nil
      down_style = nil
      if vote.value == 1
        up_style = 'green'
        down_style = ''
      elsif vote.value == -1
        up_style = ''
        down_style = 'red'
      else
        up_style = ''
        down_style = ''
      end

      render json: {
        status: 500,
        review: review,
        up_style: up_style,
        down_style: down_style
      }.to_json
    end
  end
end
