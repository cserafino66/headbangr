Rails.application.routes.draw do
  devise_for :users
  root "static_pages#index"

  resources :concerts, only: [:index, :show] do
    resources :comments
  end

  namespace :api do
    namespace :v1 do
      resources :concerts do
        resources :comments
      end
    end
  end
end
