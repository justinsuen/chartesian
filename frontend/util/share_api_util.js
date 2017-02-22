export const fetchInShare = id => (
  $.ajax({
    method: "GET",
    url: `api/user/shares/${id}`
  })
);

export const fetchInCharts = () => (
  $.ajax({
    method: "GET",
    url: "api/user/shares"
  })
);

export const fetchSharedUsers = id => (
  $.ajax({
    method: "GET",
    url: `api/charts/${id}/shares`
  })
);

export const deleteShare = id => (
  $.ajax({
    method: "DELETE",
    url: `api/shares/${id}`
  })
);

export const createShare = (username, sharer_id) => (
  $.ajax({
    method: "POST",
    url: `api/shares`,
    data: { username, sharer_id }
  })
);
