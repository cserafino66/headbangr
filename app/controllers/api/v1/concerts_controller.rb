class Api::V1::ConcertsController < ApplicationController
  def index
    render json: Concert.all
  end
end
