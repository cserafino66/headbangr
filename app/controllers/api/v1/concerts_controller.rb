class Api::V1::ConcertsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    # concerts = Jambase.get_events("02135")
    render json: Concert.all, adapter: :json
  end

  def create
    # data = request.body.read
    # jsonData = JSON.parse(data)
    # zip_code = jsonData["concerts"]["zip_code"]
    # concert_objects = Jambase.get_events(zip_code)

    # render json: concert_objects, adapter: :json
    render json: Concert.all, adapter: :json

    # - Reach out to jambase
    # - get concert data (formatted)
    # - create individual ruby objects out of json
    # - send ruby objects to react

  end

  def show
    concert = Concert.find(params[:id])
    comments = concert.comments.order(created_at: :desc)
    render json: { concert: concert, comments: comments }, adapter: :json
  end

  # private
  #   def concert_params
  #   params.require(:concert).permit(
  #     :zip_code
  #   )
  # end
end
