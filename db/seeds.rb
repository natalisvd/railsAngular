# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
for i in 1..30 do
  User.create!(username: "username#{i}", email: "user#{i}@user.com", password: '12345678')
end
for i in 1..30 do
  Post.create!(
      user_id: i,
      title: 'Тирион Ланистер' + i.to_s,
      body: "This should leave our app.js file with just our app declaration and config function. If we check our app in the browser, our app should still be fully functionaly with all of our files organized and going through the asset pipeline. Now that we have our front-end fully integrated with the asset pipeline, let's start building an API with Rails for our app to interface with so we can get persistent data."
  )
end
for i in 1..30 do

for a in 1..10 do
  Comment.create!(
      post_id: i,
      user_id: i,
      body: "This should leave our app.js file with just our app declaration and config function. #{a}"
  )
end
end