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
  belongs_to :sharee, class_name: "User"
  belongs_to :sharer, class_name: "User"

  validates :sharee, :sharer, presence: true
  validates :sharer, uniqueness: { scope: :sharee }
end
