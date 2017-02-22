export const allDataSources = ({ dataSources }) => {
  let ds_ids = Object.keys(dataSources);
  let dsArray = ds_ids.map((id) => {
    return dataSources[id];
  });
  return dsArray;
};

export const sourceById = ({dataSources}, myId) => {
  return dataSources.find(obj => obj.id === myId);
};

export const allCharts = ({ charts }) => {
  let chart_ids = Object.keys(charts);
  let chartArray = chart_ids.map((id) => {
    return charts[id];
  });
  return chartArray;
};

export const allSharedUsers = ({ shares }) => {
  let share_ids = Object.keys(shares);
  let shareArray = share_ids.map((id) => {
    return shares[id];
  });
  return shareArray;
};
