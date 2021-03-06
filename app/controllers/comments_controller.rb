class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]
  before_action :authorize_request, except: %i[index show]
  # GET /comments
  def index
    @comments = Comment.all
    render json: @comments, include:{post: {include: :user}}, 
    status: :ok
    
  end

  # GET /comments/1
  def show
    @comment = Comment.find(params[:post_id])
    render json: @comment,  status: :ok
  end

  # POST /comments
  def create
    @comment = Comment.new(comment_params)
    if @current_user.comments << @comment
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.user == @current_user
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  else
    render json: { errors: "not authorized" }, status: :unauthorized
  end
  end

  # DELETE /comments/1
  def destroy

   if @comment.user == @current_user
      @comment.destroy
   else
    render json: { errors: "not authorized" }, status: :unauthorized
   end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def comment_params
      params.require(:comment).permit(:content, :user_id, :post_id)
    end
end
