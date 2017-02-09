class Api::SharesController < ApplicationController
  def index
    @shares = current_user.in_shared_charts
  end

  def create
    @share = current_user.in_share.create!(
      sharee_id: params[:user_id],
      sharer_id: params[:chart_id])

    render json: @share
  end

  def destroy
    @share = Share.find_by(sharee_id: params[:user_id]).where(sharer_id: params[:chart_id])
    @share.destroy!

    render json: @share
  end
end
