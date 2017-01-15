export const genRandNum = n => Math.ceil(Math.random() * n);

export const toTitleCase = str => {
  let upStr = str.replace(/\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  return upStr.replace(/-/g, " ");
};
