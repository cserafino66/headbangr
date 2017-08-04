class MyConcertsController < ApplicationController
  def index
    @concerts = Concert.all
    @my_concerts = Concert.where(user_id: current_user.id)
  end

  def destroy

  end

  def show

  end

  def new

  end

  def create

  end

end

private
