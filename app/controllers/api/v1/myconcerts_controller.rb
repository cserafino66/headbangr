class Api::V1::MyconcertsController < ApplicationController
  skip_before_action :protect_from_forgery

  def index
    @myconcert = Myconcert.where(user_id: current_user.id)
    render json: @myconcert
  end

  def destroy
    Myconcert.destroy(params[:id])
    @myconcert = Myconcert.where(user_id: current_user.id)
    render json: @myconcert
  end

  def create
    data = JSON.parse(request.body.read)
    if Myconcert.exists?(user_id: current_user.id, body: data["body"])
      @myconcert = Myconcert.where(user_id: current_user.id, body: data["body"])
      render json: @myconcert
    else
      @myconcert = Myconcert.create(user_id: current_user.id, body: data["body"])
      render json: @myconcert
    end
  end
end

private
  def my_concerts_params
    params.require(:myconcert).permit(:user_id, :body)
  end
end
