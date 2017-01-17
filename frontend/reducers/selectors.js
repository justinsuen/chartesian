export const allDataSources = ({ dataSources }) => {
  let ds_ids = Object.keys(dataSources);
  let dsArray = ds_ids.map((id) => {
    return dataSources[id];
  });
  return dsArray;
};

export const allCharts = ({ charts }) => {
  let chart_ids = Object.keys(charts);
  let chartArray = chart_ids.map((id) => {
    return charts[id];
  });
  return chartArray;
};
