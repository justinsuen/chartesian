# Seed data sets from https://github.com/jdorfman/awesome-json-datasets
# https://github.com/fivethirtyeight/data
# https://datahub.io/dataset?res_format=tsv

require 'csv'
require 'json'

# Create demo users
(1..99).each do |num|
  User.create!(
    username: "chartesian#{num}",
    password: 'c0g17o-Erg0-$uM',
    email: "demo#{num}@chartesian.com"
  )
end

# Load data
def parse_tsv(file)
  lines = file.split("\n")
  lines.map do |line|
    line.to_s.chomp.split("\t", -1)
  end
end

def dsv_to_json(data)
  headers = data[0]
  json = {}
  (0...data.length-1).each do |row|
    json[row] = {}
    headers.each_with_index do |header, col|
      json[row][header] = data[row+1][col]
    end
  end
  json
end

def json_beautify(data)
  json = {}
  (0...data.length).each do |num|
    json[num] = data[num]
  end
  json
end

employees_raw = dsv_to_json(parse_tsv(File.read('./app/assets/seed_data_source/employees.tsv')))
bad_drivers = dsv_to_json(CSV.parse(File.read('./app/assets/seed_data_source/bad_drivers.csv')))
recent_grads = dsv_to_json(CSV.parse(File.read('./app/assets/seed_data_source/recent_grads.csv')))
us_population = json_beautify(JSON.parse(File.read('./app/assets/seed_data_source/us_population.json')))
china_gdp = json_beautify(JSON.parse(File.read('./app/assets/seed_data_source/china_gdp.json')))

# Create data sources
(1..99).each do |num|
  DataSource.create!(
    title: 'Recent Grads',
    data_type: 'csv',
    owner_id: num,
    data_source_url: 'chartesian_demo_grads_url',
    table: recent_grads
  )
  DataSource.create!(
    title: 'Employees',
    data_type: 'tsv',
    owner_id: num,
    data_source_url: 'chartesian_demo_employees_url',
    table: employees_raw
  )
  DataSource.create!(
    title: 'Bad Driver',
    data_type: 'csv',
    owner_id: num,
    data_source_url: 'chartesian_demo_drivers_url',
    table: bad_drivers
  )
  DataSource.create!(
    title: 'US Population',
    data_type: 'json',
    owner_id: num,
    data_source_url: 'chartesian_demo_us_pop_url',
    table: us_population
  )
  DataSource.create!(
    title: 'China GDP',
    data_type: 'json',
    owner_id: num,
    data_source_url: 'chartesian_demo_china_gdp_url',
    table: china_gdp
  )
end
