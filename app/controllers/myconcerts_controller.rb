class MyconcertsController < ApplicationController
  def index
    @myconcerts = Concert.where(user_id: current_user.id)
  end

  def destroy
    comment = Concert.find(params[:id])
    @concert = comment.concert
    if Concert.destroy(concert.id)
      flash[:notice] = "The concert has been deleted."
    else
      flash[:alert] = "Error deleting concert."
    end
    redirect_to concert_path(@concert.id)
  end

  def show

  end




  def new

  end

  def create

  end

end

private



class ReviewsController < ApplicationController
  def index
    render template: 'static_pages/index'
  end

  def new
    @review = Review.new
    @bakery = Bakery.find(params[:bakery_id])
  end

  def create
    @bakery = Bakery.find(params[:bakery_id])
    @review = Review.new(review_params)
    @review.bakery = @bakery
    @review.user = current_user

    if @review.save
      redirect_to @bakery, notice: 'New review was successfully created.'
    else
      render :new
    end
  end

  def edit
    @bakery = Bakery.find(params[:bakery_id])
    @review = Review.find(params[:id])
  end

  def update
    @bakery = Bakery.find(params[:bakery_id])
    @review = Review.find(params[:id])
    if @review.update(review_params)
      flash[:notice] = "Review successfully updated"
      redirect_to bakery_path(@bakery.id)
    else
      flash[:alert] = "Unable to update. There was an error"
      render :edit
    end
  end

  def destroy
    review = Review.find(params[:id])
    @bakery = review.bakery
    if Review.destroy(review.id)
      flash[:notice] = "Your review has been deleted."
    else
      flash[:alert] = "Error deleting review."
    end
    redirect_to bakery_path(@bakery.id)
  end

  private

  def review_params
    params.require(:review).permit(:description, :rating)
  end
end
2
