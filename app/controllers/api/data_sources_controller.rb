class Api::DataSourcesController < ApplicationController
  before_action only: [:index, :show, :create, :destroy] do
    render json: ['Not logged in'], status: 403 unless current_user
  end

  def index
    @data_sources = current_user.data_sources.sort_by {|src| src.id}
  end

  def create
    @data_source = DataSource.new(data_params)

    if @data_source.save
      render 'api/data_sources/show'
    else
      render json: @data_source.errors.full_messages, status: 422
    end
  end

  def show
    @data_source = current_user.data_sources.find_by_id(params[:id])
  end

  def destroy
    @data_source = DataSource.find_by_id(params[:id])
    DataSource.destroy(@data_source)
    render :show
  end

  private

  def data_params
    params
      .require(:data_source)
      .permit!
  end
end
