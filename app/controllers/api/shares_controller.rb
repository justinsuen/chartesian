class Api::SharesController < ApplicationController
  def index
    @shares = current_user.sharers
  end

  def create
    @share = current_user.out_share.create!(sharee_id: params[:user_id])

    render json: @share
  end

  def destroy
    @share = current_user.out_share.find_by(sharee_id: params[:user_id])
    @share.destroy!

    render json: @share
  end
end
