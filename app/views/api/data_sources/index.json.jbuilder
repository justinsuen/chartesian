json.array! @data_sources do |data_source|
  json.extract! data_source, :id, :title, :data_type, :owner_id, :data_source_url, :table
end
