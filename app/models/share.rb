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
end
