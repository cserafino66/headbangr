class CommentsController < ApplicationController
  def index
    render template: 'static_pages/index'
  end

  def new
    @comment = Comment.new
    @concert = Concert.find(params[:concert_id])
  end

  def create
    @concert = Concert.find(params[:concert_id])
    @comment = Comment.new(comment_params)
    @comment.concert = @concert
    @comment.user = current_user

    if @comment.save
      redirect_to @concert, notice: 'New comment was successfully created.'
    else
      render :new
    end
  end

  def edit
    @concert = Concert.find(params[:concert_id])
    @comment = Comment.find(params[:id])
  end

  def update
    @concert = Concert.find(params[:concert_id])
    @comment = Comment.find(params[:id])
    if @comment.update(comment_params)
      flash[:notice] = "Comment successfully updated"
      redirect_to comment_path(@concert.id)
    else
      flash[:alert] = "Unable to update. There was an error"
      render :edit
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    @concert = comment.concert
    if Comment.destroy(comment.id)
      flash[:notice] = "Your comment has been deleted."
    else
      flash[:alert] = "Error deleting comment."
    end
    redirect_to concert_path(@concert.id)
  end

  private

  def comment_params
    params.require(:comment).permit(:text, :jambase_id)
  end
end
