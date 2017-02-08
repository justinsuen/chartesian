# == Schema Information
#
# Table name: charts
#
#  id             :integer          not null, primary key
#  title          :string           not null
#  chart_type     :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  x_axes         :jsonb            default("[]")
#  y_axes         :jsonb            default("[]")
#  chartable_type :string
#  chartable_id   :integer
#  chart_data     :jsonb            default("[]")
#

class Chart < ApplicationRecord
  validates :title, :chart_type, :chart_data, :x_axes, :y_axes, presence: true

  belongs_to :chartable, polymorphic: true
end
