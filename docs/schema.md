# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## data_sources
column name     | data type | details
----------------|-----------|----------------------
id              | integer   | not null, primary key
title           | string    | not null
type            | string    | not null
owner_id        | integer   | not null, foreign key (references users), indexed
data_source_url | string    | not null
table           | jsonb     | not null, gin indexed

## charts (polymorphic)
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
title          | string    | not null
chart_type     | string    | not null
x_axes         | jsonb     | not null
y_axes         | jsonb     | not null
data_source_id | integer   | not null, foreign key (references data_sources), indexed
chartable_id   | integer   | not null, foreign key (references dashboard_slots or users), indexed

## dashboards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users), indexed
title       | string    | not null

## dashboard_slots
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
slot         | integer   | not null
dashboard_id | integer   | not null, foreign key (references dashboards), indexed
