class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController


def facebook
    @user = User.from_omniauth(env["omniauth.auth"])
    if @user && @user.persisted?
      sign_in @user
    else
      session["devise.#{provider}_data"] = env["omniauth.auth"]
      # redirect_to new_user_registration_url
    end
    current_or_guest_user
    redirect_to empty_path


    if @user.persisted?
      sign_in_and_redirect @user, :event => :authentication
      set_flash_message(:notice, :success, :kind =>'Facebook') if is_navigational_format?
      p '*'*100
    else
      session["devise.facebook_data"] = request.env['omniauth.auth']
      redirect_to new_user_registration_url
      p '#'*100

    end

    def failure
      redirect_to root_path
    end
  end
end