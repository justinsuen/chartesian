export const allDataSources = ({ dataSources }) => {
  let ds_ids = Object.keys(dataSources);
  let dsArray = ds_ids.map((id) => {
    return dataSources[id];
  });
  return dsArray;
};
