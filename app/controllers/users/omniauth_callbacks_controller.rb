class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
def facebook

  @user = User.from_omniauth(request.env["omniauth.auth"])
    p '1'*100

    if @user.persisted?
      sign_in_and_redirect @user, :event => :authentication
      set_flash_message(:notice, :success, :kind =>'Facebook') if is_navigational_format?
      p '*'*100
    else
      session["devise.facebook_data"] = request.env['omniauth.auth']
      redirect_to new_user_registration_url
      p '#'*100

    end


end

    def failure
      redirect_to root_path
    end

end