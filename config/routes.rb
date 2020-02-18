Rails.application.routes.draw do
  devise_for :users

  devise_scope :user do
    authenticated :user do
      root 'homes#index', as: :authenticated_root
    end

    unauthenticated do
      root 'devise/sessions#new', as: :unauthenticated_root
    end
  end



  namespace :api do
    namespace :v1 do
      resources :destinations, only: [:index, :show, :create]
    end
  end
end
