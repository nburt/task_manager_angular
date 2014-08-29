Rails.application.routes.draw do
  namespace :api do
    resources :tasks
  end

  # rails wildcard route: not sure why we need to name the splat parameter
  get '*_', to: 'client#index'
end
