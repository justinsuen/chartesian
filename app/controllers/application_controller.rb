class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  def maintenance
    render :template => "maintenance"
  end
end
