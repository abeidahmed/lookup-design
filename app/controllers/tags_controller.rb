class TagsController < ApplicationController
  before_action :set_tag, only: %i(show update destroy)

  def index
    @tags = Tag.all
    render :index
  end

  def create
    @tag = Tag.new(tag_params)
    if @tag.save
      render json: { message: "Tag created" }
    else
      render json: @tag.errors, status: :unprocessable_entity
    end
  end

  def show
    render :show
  end

  def update
    if @tag.update(tag_params)
      render json: { message: "Tag updated" }
    else
      render json: @tag.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @tag.destroy
    render json: { message: "Deleted tag titled: #{@tag.title}" }
  end

  private
    def tag_params
      params.require(:tag).permit(:title)
    end

    def set_tag
      @tag = Tag.find(params[:id])
    end
end
