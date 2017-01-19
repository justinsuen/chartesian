class RemoveChartable < ActiveRecord::Migration[5.0]
  def change
    remove_column :charts, :chartable_type
    remove_column :charts, :chartable_id
    add_column :charts, :chartable_type, :string
    add_column :charts, :chartable_id, :integer
  end
end
