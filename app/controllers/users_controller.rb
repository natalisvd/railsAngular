class UsersController < ApplicationController
  def show
    user = User.find(params[:id])
    render json: user
  end

  def update
    @user = User.find(params[:id]).update(user_params)
    render json: @user

  end

  private
  def user_params
    params.require(:user).permit(:username, :avatar, :password, :password_confirmation)
  end
end