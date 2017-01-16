class CreateCharts < ActiveRecord::Migration[5.0]
  def change
    create_table :charts do |t|
      t.string :title, null: false
      t.string :chart_type, null: false
      t.jsonb :x_axes, null: false
      t.jsonb :y_axes, null: false
      t.references :chartable, null: false, polymorphic: true

      t.timestamps
    end
    add_index :charts, :title
    add_index :charts, :chartable_id
    add_reference :users, :chartable, polymorphic: true, index: true
    add_reference :data_sources, :chartable, polymorphic: true, index: true
  end
end
