class LocaleventController < ApplicationController
  def index
    # @comments = Comment.find(params[:comment_id])
    @localevents = LocalEvent.all
    # where(comment_id: @comment.id)
    render json: @localevents, status: :ok
    # include:{comment: {include: :user}},  status: :ok
  end

  # GET /posts/1
  def show
    @localevent = LocalEvent.find(params[:id])
    
    render json: @localevent, status: :ok
  end

end
