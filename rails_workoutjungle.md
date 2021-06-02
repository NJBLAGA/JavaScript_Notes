# **Card In CLass Rails Application**

## \*\*Useful Sites:

https://getbootstrap.com/docs/4.3/components/forms/

https://github.com/tarellel/simple_form-tailwind

https://css-tricks.com/style-form-tailwind-css/

https://tailwindcss.com/docs/background-color

https://github.com/justalever/flanger/blob/master/app/assets/stylesheets/application.scss

https://github.com/heartcombo/simple_form

https://github.com/heartcombo/devise

https://bulma.io/documentation/components/navbar/#colors

https://lipis.github.io/bootstrap-social/

## **Day 1: Week 5 Thursday Morning:**

---

rails new card_central -d postgresql -T
bundle
yarn install --check-files
rails db:create
push to github
place rspec into gemfiles
bundle
rails g rspec:install
bundle exec rspec
gem install rspec
start new branch "listings"
rails g scaffold Listing title:string description:text price:integer sold:boolean
rails db:migrate
heroku login
heroku create name
git push heroku main
merge branch with main
push to github

---

````
## **Day 2**
```ruby
-----------------------------------------
# root route
root "listing#index"
# root is short for root to:
# Bootstrap:
new branch
gem 'bootstrap', '~> 5.0.0.beta1' ==> gemfile
bundle install
application.css -> application.scss
add @import "bootstrap";
keep both require
gem 'jquery-rails' ==> gemfile
bundle install
# add:
# //= require jquery3
# //= require popper
# //= require bootstrap-sprockets
# ==> application.js
# add <meta name="viewport" content="width=device-width, initial-scale=1"> ==> application.html.erb
# create shared folder in views, _navbar.html.erb
# =====> app/views/layouts/application.html.erb
require render 'shared/navbar'

# run Heroku for catch up
# New branch devise
# Devise
# omnivise
gem file ==> gem 'devise'
bundle install
rails generate devise:install
in config/environments/development.rb:
===> config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
===> application.html.erb
<p class="notice"><%= notice %></p>
<p class="alert"><%= alert %></p>
rails g devise:views
rails g devise User
migration => create_table :users
t.string :name, null: false, default: ""
rails db:migrate
# helper methods
# if user_signed_in?
heroku run rails db:migrate
-----------------------------------------
````

## **Day 3**

```ruby
-----------------------------------------
User stories
# - As a user I want to be able tp create an account and login, so that I can create listings.
# - As a seller, I want to be able to upload an image on my listing.
# - AS A Buyer, I want to be able to see an image for each listing.

# Image Upload For Each Listings:
# Create new branch
rails active_storage:install
# new migration ===> creating new tables
rails db:migrate
# ---> listing model =>listing.rb
has_one_attached :photo
# ---> new.html.erb (views)
# partial form
# <div class="field">
#     <%= form.label :photo%>
#     <%= form.file_field :photo %>
# </div>
# ---> listings_controller.rb
# def create
# @listing.photo.attach(params[:listing][:photo])
# end
# --> rails c
# Listing.last.photo.attached?
# -->show.html.erb
<% if @listing.photo.attached?%>
    <p>
        <strong>Photo:</strong>
        <%= image_tag @listing.photo%>
    </p>
<% end %
# --> repo
# -->storage
cloudinary.com
# 1. Create account
# ---> gemfile
gem 'cloudinary'
gem 'activestorage-cloudinary-service'
bundle install
EDITOR="code --wait" rails credentials:edit
# ===>Type the following:
cloudinary:
service: Cloudinary
cloud:name: xxxxxxxxx
api_key: xxxxxxxxxx
api_secret: xxxxxxxx
# save and close
# control + f
# storage.yml
# cloudinary:
#     service: Cloudinary,
#     cloud:name: <%= Rails.application.credentials.dig(:cloudinary, :cloud_name) %>
#     api_key: <%= Rails.application.credentials.dig(:cloudinary, :api_key) %>
#     api_secret: <%= Rails.application.credentials.dig(:cloudinary, :api_secret) %>
# ---> Terminal:
heroku config:set RAILS_MASTER_KEY= (code)
# project ---> config ---> master.key (copy code)
# CAN BE DONE IN HEROKU DASHBOARD ---> CONFIG VARS ---> SETTINGS ---> VARIABLES
# ---> development.rb
    search for config.active_storage.service = :cloudinary
# ---> production.rb
    search for config.active_storage.service = :cloudinary
-----------------------------------------
```

## **Day 4**

```ruby
-----------------------------------------
Stripe
-----------------------------------------
```

## **Day 5**

```ruby
-----------------------------------------
Continues Session from Heroku
# On Heroku
Inside project
==> deploy
---> connect to Github
From terminal line to github
Search for repo
Enable Automatic Deploys
# CI ---> Unit Testing
Can Have both, but rather on Github level
# https://devcenter.heroku.com/articles/app-json-schema
# there's a json file you can write to automate it
# app.json :)
# scripts -> post deploy is what you're looking for :)
# Send message to Public Chat
//////////////////////////
Deployment Pipeline
# On Heroku
Create New pipeline on Heroku
Production
# Can have either production or staged (need two apps for this)
Staging
# New app, rails-test (separate app to production)
Inside pipeline ---> connect to github ---> connect to github repo ---> pick development branch we which to connect to app
-----------------------------------------
```
