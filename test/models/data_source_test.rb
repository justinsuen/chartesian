# == Schema Information
#
# Table name: data_sources
#
#  id              :integer          not null, primary key
#  title           :string           not null
#  data_type       :string           not null
#  owner_id        :integer          not null
#  data_source_url :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class DataSourceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
