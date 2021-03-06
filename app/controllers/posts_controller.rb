class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  before_action :authorize_request, except: %i[index show]

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts
  end

  def index_by_post
    user = User.find(params[:user_id])
    posts = user.posts
    render json: posts, include: :users, status: :ok
  end

  # GET /posts/1
  def show
    @post = Post.find(params[:id])
    render json: @post
  end

  # POST /posts
  def create
    @post = Post.new(post_params)

    if @current_user.posts << @post
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end


  # PATCH/PUT /posts/1
  def update
    if @post.user ==  @current_user
      if @post.update(post_params)
        render json: @post
      else
        render json: @post.errors, status: :unprocessable_entity
      end
    else
      render json: { errors: "not authorized" }, status: :unauthorized
    end
  end
  

  # DELETE /posts/1
  def destroy
    if @post.user == @current_user
      @post.destroy
    else
      render json: { errors: "not authorized" }, status: :unathorized
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    rescue ActiveRecord::RecordNotFound
      render json: { message: 'no posts matches that ID' }, status: 404
    end

    # Only allow a trusted parameter "white list" through.
    def post_params
      params.require(:post).permit(:content, :image_url, :hashtags, :category, :is_Anon, :user_id)
    end
end
