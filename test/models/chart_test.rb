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

require 'test_helper'

class ChartTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
