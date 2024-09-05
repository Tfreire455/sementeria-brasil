const xlsx = require('xlsx');

const loadData = () => {
  const workbook = xlsx.readFile("07412046.xlsx");
  const sheet_name_list = workbook.SheetNames;
  return xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
};

module.exports = loadData;
