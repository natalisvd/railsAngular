class CommentsController < ApplicationController
  def show
    # @post = Post.find(params[:id])
    # @comments= @post.comments.order(created_at: :desc)
  end

  def index
    @post = Post.find(params[:post_id])
    comments= @post.comments.offset(params[:comment_offset]).last(5)
    render json:  comments

  end

  def create
    @comment = Comment.create(comment_params)
    render json: @comment
  end

  def update
    @comment = Comment.find(params[:id])
    @comment.update(comment_params)
    render json: @comment
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.destroy
      render json: {success: true}
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:post_id, :body, :user_id)
  end
end
