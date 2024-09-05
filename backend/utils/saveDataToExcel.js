const xlsx = require('xlsx');

const saveDataToExcel = (data) => {
  const workbook = xlsx.utils.book_new();
  const worksheet = xlsx.utils.json_to_sheet(data);
  xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  xlsx.writeFile("07412046.xlsx");
};

module.exports = saveDataToExcel;
