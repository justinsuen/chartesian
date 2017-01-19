# == Schema Information
#
# Table name: charts
#
#  id             :integer          not null, primary key
#  title          :string           not null
#  chart_type     :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  x_axes         :text             default("{}"), is an Array
#  y_axes         :text             default("{}"), is an Array
#  chartable_type :string
#  chartable_id   :integer
#  chart_data     :jsonb            default("[]")
#

require 'test_helper'

class ChartTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
