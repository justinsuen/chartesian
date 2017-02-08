class AddSharedUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :shares do |t|
      t.integer  "sharee_id", null: false
      t.integer  "sharer_id", null: false

      t.datetime "created_at"
      t.datetime "updated_at"
    end

    add_index :shares, ["sharee_id", "sharer_id"], name: "index_shares_on_sharee_id_and_sharer_id", unique: true, using: :btree
    add_index :shares, ["sharee_id"], name: "index_shares_on_sharee_id", using: :btree
    add_index :shares, ["sharer_id"], name: "index_shares_on_sharer_id", using: :btree
  end
end
