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

export const createShare = (sharee_id, sharer_id) => (
  $.ajax({
    method: "POST",
    url: `api/shares`,
    data: { sharee_id, sharer_id }
  })
);
