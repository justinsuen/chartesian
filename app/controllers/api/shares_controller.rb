class Api::SharesController < ApplicationController
  def show
    @share = current_user.in_shares.where(id: params[:id])
  end

  def create
    @share = current_user.in_share.create!(
      sharee_id: params[:user_id],
      sharer_id: params[:chart_id])

    render json: @share
  end

  def destroy
    @share = Share.find_by(id: params[:id])
    @share.destroy!

    render json: @share
  end

  def shared_charts
    @shared_charts = current_user.in_shared_charts

    render 'api/shares/shared_assets'
  end

  def shared_users
    @shared_users = Chart.find_by(id: params[:id]).shared_users

    render 'api/shares/shared_assets'
  end
end
