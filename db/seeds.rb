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
  (0...data.length - 1).each do |row|
    json[row] = {}
    headers.each_with_index do |header, col|
      json[row][header] = data[row + 1][col]
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

kobe_stats = dsv_to_json(parse_tsv(File.read('./app/assets/seed_data_source/kobe_stats.csv')))
us_pop_2010 = json_beautify(JSON.parse(File.read('./app/assets/seed_data_source/us_pop_2010.json')))
swe_pop_2015 = json_beautify(JSON.parse(File.read('./app/assets/seed_data_source/swe_pop_2015.json')))
recent_grads = dsv_to_json(CSV.parse(File.read('./app/assets/seed_data_source/recent_grads.csv')))
china_gdp = json_beautify(JSON.parse(File.read('./app/assets/seed_data_source/china_gdp.json')))
usd_xrate = json_beautify(JSON.parse(File.read('./app/assets/seed_data_source/20170119_usd.json')))
employees_raw = dsv_to_json(parse_tsv(File.read('./app/assets/seed_data_source/employees.tsv')))
bad_drivers = dsv_to_json(CSV.parse(File.read('./app/assets/seed_data_source/bad_drivers.csv')))

# Create data sources
(1..99).each do |num|
  DataSource.create!(
    title: 'Kobe Bryant Career Statistics',
    data_type: 'csv',
    owner_id: num,
    data_source_url: 'chartesian_demo_kobe_url',
    table: kobe_stats
  )
  DataSource.create!(
    title: '2010 US Population',
    data_type: 'tsv',
    owner_id: num,
    data_source_url: 'chartesian_demo_2010_us_pop_url',
    table: us_pop_2010
  )
  DataSource.create!(
    title: '2015 Sweden Population',
    data_type: 'json',
    owner_id: num,
    data_source_url: 'chartesian_demo_2015_sweden_pop_url',
    table: swe_pop_2015
  )
  DataSource.create!(
    title: 'Recent Grads',
    data_type: 'csv',
    owner_id: num,
    data_source_url: 'chartesian_demo_grads_url',
    table: recent_grads
  )
  DataSource.create!(
    title: 'China GDP 1960-2015',
    data_type: 'tsv',
    owner_id: num,
    data_source_url: 'chartesian_demo_china_gdp_url',
    table: china_gdp
  )
  DataSource.create!(
    title: 'USD Exchange Rate (2017/01/19)',
    data_type: 'json',
    owner_id: num,
    data_source_url: 'chartesian_demo_20170119_usd_url',
    table: usd_xrate
  )
  DataSource.create!(
    title: 'ABC Company Employees',
    data_type: 'tsv',
    owner_id: num,
    data_source_url: 'chartesian_demo_employees_url',
    table: employees_raw
  )
  DataSource.create!(
    title: 'US Driving Statistics',
    data_type: 'csv',
    owner_id: num,
    data_source_url: 'chartesian_demo_drivers_url',
    table: bad_drivers
  )
end
