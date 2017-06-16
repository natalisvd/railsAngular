class AddFileToPost < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :file_post, :text
  end
end
