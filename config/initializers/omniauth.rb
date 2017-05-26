Rails.application.config.middleware.use OmniAuth::Builder do
   provider :facebook, ENV['FACEBOOK_KEY'], ENV['FACEBOOK_SECRET'], token_params: { parse: :json }, scope: ['public_profile', 'email']
end