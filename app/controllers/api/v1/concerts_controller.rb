class Api::V1::ConcertsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index;
    render json: Concert.all, adapter: :json
  end

  def show
    concert = Concert.find(params[:id])
    comments = concert.comments.order(created_at: :desc)
    render json: { concert: concert, comments: comments }, adapter: :json
  end
end
