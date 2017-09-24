class MyconcertsController < ApplicationController
  def index
    render template: 'static_pages/index'
  end

  def new
    @myconcert = Myconcert.new
    @concert = Concert.find(params[:concert_id])
  end

  def create
    @concert = Concert.find(params[:concert_id])
    @myconcert = Myconcert.new(concert_params)
    @myconcert.concert = @concert
    @myconcert.user = current_user

    if @comment.save
      redirect_to @concert, notice: 'Saved to My Concerts!'
    else
      render :new
    end
  end

  # def destroy
  #   myconcert = Myconcert.find(params[:id])
  #   @myconcert = myconcert.concert
  #   if Myconcert.destroy(concert.id)
  #     flash[:notice] = "Concert removed."
  #   else
  #     flash[:alert] = "Error removing concert."
  #   end
  #   redirect_to myconcert_path
  # end

  private

  def myconcert_params
    params.require(:myconcert).permit(:artist, :venue, :ticket_url, :start_date)
  end
end
