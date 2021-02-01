Rails.application.routes.draw do
  resources :plant_types           
  resources :plants
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users

  put '/plant_types', to: 'plant_types#add_plant_to_plant_types'
  
end
