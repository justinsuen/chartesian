class Api::SharesController < ApplicationController
  def show
    @share = current_user.in_shares.where(id: params[:id])
  end

  # TODO: Need to test controller; currently creating a share by
  # using usernames inputted from frontend
  def create
    @share_to_user = User.find_by(username: params[:username])
    @share = @share_to_user.in_shares.create!(
      sharee_id: current_user.id,
      sharer_id: params[:sharer_id]
    )

    render json: @share
  end

  def destroy
    @share = Share.find_by(id: params[:id])
    @share.destroy!

    render json: @share
  end

  def shared_charts
    @shared_assets = current_user.in_shared_charts

    render 'api/shares/shared_assets'
  end

  def shared_users
    @shared_assets = Chart.find_by(id: params[:id]).shared_users

    render 'api/shares/shared_assets'
  end
end
