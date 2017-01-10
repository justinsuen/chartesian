Rails.application.routes.draw do
  root to: "application#maintenance"
  get '*url' => 'application#maintenance'
end
