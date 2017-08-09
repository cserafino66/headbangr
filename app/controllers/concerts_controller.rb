# require 'httparty'
class ConcertsController < ApplicationController
  def index;
    # @concerts = Concert.all
    # if params[:search]
    #   @concerts = Concert.search(params[:search]).order("created_at DESC")
    # else
    #   @concerts = Concert.all.order("created_at DESC")
    # end
  end

  def show
    @concert = Concert.find(params[:id])
    @user = current_user
  end
end
