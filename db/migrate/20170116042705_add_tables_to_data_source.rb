class AddTablesToDataSource < ActiveRecord::Migration[5.0]
  def change
    add_column :data_sources, :table, :jsonb, null: false, default: '[]'
    add_index :data_sources, :table, using: :gin
  end
end
