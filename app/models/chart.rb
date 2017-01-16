# == Schema Information
#
# Table name: charts
#
#  id             :integer          not null, primary key
#  title          :string           not null
#  chart_type     :string           not null
#  x_axes         :jsonb            not null
#  y_axes         :jsonb            not null
#  chartable_type :string           not null
#  chartable_id   :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Chart < ApplicationRecord
end
