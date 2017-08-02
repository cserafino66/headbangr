Rails.application.routes.draw do
  resources :concerts
  root "concerts#index"
end
