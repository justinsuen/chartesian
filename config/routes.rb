Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create] do
      resources :data_sources, only: [:index, :show, :create]
      resources :charts, only: [:index, :show, :create]
      get 'shares', to: 'shares#shared_charts'
    end

    resources :charts, only: [:destroy] do
      get 'shares', to: 'shares#shared_users'
    end

    resources :shares, only: [:create, :destroy]
    resources :data_sources, only: [:destroy]
    resource :session, only: [:create, :destroy, :show]
  end
end
