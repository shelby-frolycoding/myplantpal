Rails.application.routes.draw do
  resources :plants
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
  
end
