# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## data
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
type        | string    | not null
owner_id    | integer   | not null, foreign key (references users), indexed
data_source | string    | not null

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

## charts (polymorphic)
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
title          | string    | not null
chartable_id   | integer   | not null, foreign key (references dashboard_slots, data or users), indexed
chartable_type | string    | not null
