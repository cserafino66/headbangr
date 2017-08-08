# require 'httparty'
class ConcertsController < ApplicationController
  def index;
  end

  def show
    @concert = Concert.find(params[:id])
    @user = current_user
  end
end
