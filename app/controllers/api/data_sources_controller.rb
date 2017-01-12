class Api::DataSourcesController < ApplicationController
  def index
    @data_sources = current_user.data_sources
  end

  def create
    @data_source = DataSource.new(data_params)

    if @data_source.save
      render "api/data_sources/show"
    else
      render json: @data_source.errors.full_messages, status: 422
    end
  end

  def show
    @data_source = DataSource.find_by_id(params[:id])
  end

  def delete
    @data_source = DataSource.find_by_id(params[:id])
    DataSource.destroy(@data_source)
    render :index
  end

  private

  def data_params
    params
      .require(:data_source)
      .permit(:title, :data_type, :owner_id, :data_source_url)
  end
end
