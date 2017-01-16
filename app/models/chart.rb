# == Schema Information
#
# Table name: charts
#
#  id             :integer          not null, primary key
#  title          :string           not null
#  chart_type     :string           not null
#  chart_json     :jsonb            not null
#  x_axes         :jsonb            not null
#  y_axes         :jsonb            not null
#  chartable_type :string           not null
#  chartable_id   :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Chart < ApplicationRecord
  validates :title, :chart_type, :chart_json, :x_axes, :y_axes, :chartable_type, :chartable_id, presence: true

  belongs_to :chartable, polymorphic: true
end
