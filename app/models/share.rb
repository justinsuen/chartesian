# == Schema Information
#
# Table name: shares
#
#  id         :integer          not null, primary key
#  sharee_id  :integer          not null
#  sharer_id  :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class Share < ApplicationRecord
  belongs_to :shared_chart, class_name: "Chart", foreign_key: :sharer_id
  belongs_to :shared_user, class_name: "User", foreign_key: :sharee_id

  validates :shared_chart, :shared_user, presence: true
  validates :shared_user, uniqueness: { scope: :shared_chart }
end
