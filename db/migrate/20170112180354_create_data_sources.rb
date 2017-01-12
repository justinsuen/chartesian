class CreateDataSources < ActiveRecord::Migration[5.0]
  def change
    create_table :data_sources do |t|
      t.string :title, null: false
      t.string :type, null: false
      t.integer :owner_id, null: false
      t.string :data_source_url, null: false

      t.timestamps
    end
    add_index :data_sources, :type
    add_index :data_sources, :title, unique: true
    add_index :data_sources, :owner_id
    add_index :data_sources, :data_source_url, unique: true
  end
end
