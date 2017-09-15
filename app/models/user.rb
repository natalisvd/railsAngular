class User < ApplicationRecord

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  devise :omniauthable, :omniauth_providers => [:facebook]
  has_many :posts
  has_many :comments
  attr_accessor :avatar, :remote_profile_image_url

  mount_uploader :avatar, AvatarUploader

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
      user.username = auth.info.username   # assuming the user model has a name
      user.remote_avatar_url =auth.info.image
      user.save
    end
  end

  # def sort_array
  #   mas = [3, 32, 328, 234, 15, 15412, 8, 89, 87, 80, 151, 1511]
  #   mas.sort! do |a,b|
  #     b.to_s+a.to_s<=> a.to_s+b.to_s
  #   end
  #   mas.join(&:to_i)
  # end
  #
  #
  # def sort_array_puz
  #   mas = [3, 32, 328, 234, 15, 15412, 8, 89, 87, 80, 151, 1511]
  #   swap = true
  #   size = mas.length - 1
  #   while swap
  #     swap = false
  #     for i in 0...size
  #       a = mas[i].to_s + mas[i + 1].to_s
  #       b = mas[i+1].to_s + mas[i].to_s
  #       swap |= b > a
  #       mas[i], mas[i + 1] = mas[i + 1], mas[i] if b > a
  #     end
  #     size -= 1
  #   end
  #   mas.join(&:to_i)
  # end
  #
  #
  # def sort_array2
  #   mas = [3, 32, 328, 234, 15, 15412, 8, 89, 87, 80, 151, 1511]
  #   mas.permutation.to_a.map(&:join).max.to_s
  # end


  def self.new_with_session(params, session)
    super.tap do |user|
      if data = session["devise.facebook_data"] && session["devise.facebook_data"]["extra"]["raw_info"]
        user.email = data["email"] if user.email.blank?
      end
    end
  end

end

