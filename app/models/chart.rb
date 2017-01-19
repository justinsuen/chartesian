# == Schema Information
#
# Table name: charts
#
#  id             :integer          not null, primary key
#  title          :string           not null
#  chart_type     :string           not null
#  chartable_type :string           not null
#  chartable_id   :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  x_axes         :text             default("{}"), is an Array
#  y_axes         :text             default("{}"), is an Array
#  chart_data     :text             default("{}"), is an Array
#

class Chart < ApplicationRecord
  validates :title, :chart_type, :chart_json, :x_axes, :y_axes, :chartable_type, :chartable_id, presence: true

  belongs_to :chartable, polymorphic: true
end
