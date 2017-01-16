export const fetchChart = id => (
  $.ajax({
    method: "GET",
    url: `api/user/charts/${id}`
  })
);

export const fetchCharts = () => (
  $.ajax({
    method: "GET",
    url: "api/user/charts"
  })
);

export const deleteChart = id => (
  $.ajax({
    method: "DELETE",
    url: `api/charts/${id}`
  })
);

export const createChart = chart => (
  $.ajax({
    method: "POST",
    url: `api/user/charts`,
    data: { chart }
  })
);
