class LocalartController < ApplicationController
  def index
    @localarts = LocalArt.all

    render json: @localarts, status: :ok
  end

  # GET /posts/1
  def show
    @localart = LocalArt.find(params[:id])
    render json: @localart, status: :ok
  end
end
