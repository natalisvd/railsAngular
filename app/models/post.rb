class Post < ApplicationRecord
  has_many :comments
  belongs_to :user
  validates :title, length: {minimum: 1}, presence: true
  validates :body, length: {minimum: 1}, presence: true

  mount_uploader :file_post, AvatarUploader


end
