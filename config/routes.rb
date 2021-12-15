Rails.application.routes.draw do
  resources :positions, only: [:index, :show, :update] do
    resources :transitions, only: [:index, :create, :update, :destroy]
    resources :submissions, only: [:index, :create, :update, :destroy]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
