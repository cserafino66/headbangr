class ConcertsController < ApplicationController
  def index;

  end

  def create

  end

  def show
    @concert = Concert.find(params[:id])
    @user = current_user
  end
end
