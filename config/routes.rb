Rails.application.routes.draw do
  devise_for :users
  root "static_pages#index"
  get '/myconcerts', to: 'static_pages#index'

  resources :concerts, only: [:create, :index, :show] do
    resources :comments
    resources :myconcerts, only: [:index]
  end


  namespace :api do
    namespace :v1 do
      resources :concerts do
        resources :comments
      end

      resources :myconcerts, only: [:create, :index, :destroy]
    end
  end
end
