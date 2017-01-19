class ChangeChartsAxes < ActiveRecord::Migration[5.0]
  def change
    remove_column :charts, :x_axes
    remove_column :charts, :y_axes
    add_column :charts, :x_axes, :jsonb, default: []
    add_column :charts, :y_axes, :jsonb, default: []
  end
end
