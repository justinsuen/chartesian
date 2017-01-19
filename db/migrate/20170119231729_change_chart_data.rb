class ChangeChartData < ActiveRecord::Migration[5.0]
  def change
    remove_column :charts, :chart_json
    add_column :charts, :chart_data, :jsonb, default: []
  end
end
