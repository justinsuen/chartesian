import { receiveDataSource, receiveDataSources, receiveErrors } from '../actions/session_actions';

export const fetchDataSource = id => (
  $.ajax({
    method: "GET",
    url: `api/data_sources/${id}`
  })
);

export const fetchDataSources = () => (
  $.ajax({
    method: "GET",
    url: "api/data_sources"
  })
);

export const deleteDataSource = id => (
  $.ajax({
    method: "DELETE",
    url: `api/data_sources/${id}`
  })
);

export const updateDataSource = data_source => (
  $.ajax({
    method: "PATCH",
    url: `api/data_sources/${data_source.id}`,
    data: { data_source }
  })
);

export const createDataSource = data_source => (
  $.ajax({
    method: "POST",
    url: `api/data_sources`,
    data: { data_source }
  })
);
