const XlsxPopulate = require('xlsx-populate');
const convertExcelToBuffer = require('./convertExcelToBuffer');

 
// module.exports.runExcel = function () {

async function xlsxPopulate() {
  let x
 await XlsxPopulate.fromFileAsync("NewAcciona.xlsx")
  .then(workbook => {
      return workbook.outputAsync();
  })
  .then(data => {
     x = data
  })
  .catch(err => console.error(err));

  setTimeout(function () {
    console.log("5 secondes"); 
}, 3000); 



  
// return await XlsxPopulate.fromFileAsync("NewAcciona.xlsx")
// .then(workbook => {
//     // Modify the workbook.

//     // Write to file.
//     return workbook.toFileAsync("anhKhoa.xlsx");
// });
// //}
console.log('result')
return x
  };
if (process.argv[2] == "name") {
    const x = xlsxPopulate()
    console.log('x =', x)
     }