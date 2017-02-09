# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170209034443) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "charts", force: :cascade do |t|
    t.string   "title",                   null: false
    t.string   "chart_type",              null: false
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.jsonb    "x_axes",     default: []
    t.jsonb    "y_axes",     default: []
    t.jsonb    "chart_data", default: []
    t.integer  "owner_id",                null: false
    t.index ["title"], name: "index_charts_on_title", using: :btree
  end

  create_table "data_sources", force: :cascade do |t|
    t.string   "title",                          null: false
    t.string   "data_type",                      null: false
    t.integer  "owner_id",                       null: false
    t.string   "data_source_url",                null: false
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
    t.jsonb    "table",           default: "[]", null: false
    t.index ["data_source_url"], name: "index_data_sources_on_data_source_url", using: :btree
    t.index ["data_type"], name: "index_data_sources_on_data_type", using: :btree
    t.index ["owner_id"], name: "index_data_sources_on_owner_id", using: :btree
    t.index ["table"], name: "index_data_sources_on_table", using: :gin
    t.index ["title"], name: "index_data_sources_on_title", using: :btree
  end

  create_table "shares", force: :cascade do |t|
    t.integer  "sharee_id",  null: false
    t.integer  "sharer_id",  null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["sharee_id", "sharer_id"], name: "index_shares_on_sharee_id_and_sharer_id", unique: true, using: :btree
    t.index ["sharee_id"], name: "index_shares_on_sharee_id", using: :btree
    t.index ["sharer_id"], name: "index_shares_on_sharer_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "email"
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["email"], name: "index_users_on_email", using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
