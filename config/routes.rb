Rails.application.routes.draw do
  resources :tags, only: %i(index create show update destroy)
end
