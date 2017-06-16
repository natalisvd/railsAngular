class PostsController < ApplicationController
  def show
    @post = Post.find(params[:id])
    render json: {post: @post}
  end
  def index
    @posts =Post.all.limit(10).offset(params[:comment_offset]).order(created_at: :desc)
    render json: @posts
  end
  def create
    @post = Post.create(post_params)
    render json: @post
  end
  def update
    @post = Post.find(params[:id])
    @post.update(post_params)
    render json: @post
  end
  private
  def post_params
    params.require(:post).permit(:body, :title, :user_id, :file_post)
  end
end
