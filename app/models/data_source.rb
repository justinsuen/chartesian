# == Schema Information
#
# Table name: data_sources
#
#  id              :integer          not null, primary key
#  title           :string           not null
#  type            :string           not null
#  owner_id        :integer          not null
#  data_source_url :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class DataSource < ApplicationRecord
  validates :title, :type, :owner_id, :data_source_url, presence: true
  validates :title, :data_source_url, uniqueness: true

  belongs_to :user,
    foreign_key: :owner_id
end
