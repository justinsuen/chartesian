class ChangeChartsJson < ActiveRecord::Migration[5.0]
  def change
    remove_column :charts, :chart_json
    add_column :charts, :chart_data, :text, array: true, default: []
  end
end
