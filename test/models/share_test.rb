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

require 'test_helper'

class ShareTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
