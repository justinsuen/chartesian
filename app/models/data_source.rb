# == Schema Information
#
# Table name: data_sources
#
#  id              :integer          not null, primary key
#  title           :string           not null
#  data_type       :string           not null
#  owner_id        :integer          not null
#  data_source_url :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  table           :jsonb            default("\"[]\""), not null
#

class DataSource < ApplicationRecord
  validates :title, :data_type, :owner_id, :data_source_url, :table, presence: true

  belongs_to :user,
    foreign_key: :owner_id
end
