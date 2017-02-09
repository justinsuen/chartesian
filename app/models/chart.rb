# == Schema Information
#
# Table name: charts
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  chart_type :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  x_axes     :jsonb            default("[]")
#  y_axes     :jsonb            default("[]")
#  chart_data :jsonb            default("[]")
#  owner_id   :integer          not null
#

class Chart < ApplicationRecord
  validates :title, :chart_type, :chart_data, :x_axes, :y_axes, presence: true

  belongs_to :user, foreign_key: :owner_id

  has_many :out_shares, class_name: "Share", foreign_key: "sharee_id"
  has_many :shared_users, through: :out_share, source: :shared_user
end
