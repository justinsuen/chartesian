Rails.application.routes.draw do
  # uncomment for maintenance mode
  # ==============================
  # root to: "application#maintenance"
  # get '*url' => 'application#maintenance'

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create] do
      resources :data_sources, only: [:index, :show, :create]
      resources :charts, only: [:index, :show, :create]
      resources :shares, only: [:index, :create, :destroy]
    end
    resources :charts, only: [:destroy]
    resources :data_sources, only: [:destroy]
    resource :session, only: [:create, :destroy, :show]
  end
end
