class Api::V1::ConcertsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Concert.all, adapter: :json
  end

  def create
    data = JSON.parse(request.body.read)
    zip_code = data["zipCode"]
    concert_objects = Jambase.get_events(zip_code)
    render json: concert_objects, adapter: :json
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
