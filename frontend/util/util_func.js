export const genRandNum = n => Math.ceil(Math.random() * n);

export const toTitleCase = str => {
  let upStr = str.replace(/\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  return upStr.replace(/-/g, " ");
};

export const parseCSV = (file, row, col) => {
  const reader = new FileReader();
  reader.readAsText(file);

  const fileText = reader.result;
  const fileLines = fileText.split(/\r\n|\n/);
  const headers = fileLines[0].split(',');

  let lines = [];

  for (let i = 1; i < fileLines.length; i++) {
    let data = fileLines[i].split(',');
    if (data.length === headers.length) {

      let arr = [];
      for (let j = 0; j < headers.length; j++) {
        arr.push(headers[j] + ":" + data[j]);
      }
      lines.push(arr);
    }
  }

  return lines;
};
