class Api::ChartsController < ApplicationController
  before_action only: [:index, :show, :create, :destroy] do
    render json: ['Not logged in'], status: 403 unless current_user
  end

  def index
    @charts = current_user.charts.sort_by { |chart| chart.id }
  end

  def create
    @chart = Charts.new(chart_params)

    if @chart.save
      render 'api/charts/show'
    else
      render json: @chart.errors.full_messages, status: 422
    end
  end

  def show
    @chart = current_user.charts.find_by_id(params[:id])
  end

  def destroy
    @chart = Charts.find_by_id(params[:id])
    Chart.destroy(@chart)
    render :index
  end

  private

  def chart_params
    params
      .require(:chart)
      .permit!
  end
end
