Rails.application.routes.draw do
  resources :positions, only: [:index, :show, :update] do
    resources :submissions
    resources :transitions
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
