class ChangeChartableToUser < ActiveRecord::Migration[5.0]
  def change
    remove_column :charts, :chartable_type
    remove_column :charts, :chartable_id
    remove_column :users, :chartable_type
    remove_column :users, :chartable_id
    remove_column :data_sources, :chartable_type
    remove_column :data_sources, :chartable_id
    add_column :charts, :owner_id, :integer, null: false
  end
end
