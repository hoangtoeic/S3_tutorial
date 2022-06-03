const XlsxPopulate = require('xlsx-populate');

const convertExcelToBuffer = {
    async stream() {
        XlsxPopulate.fromFileAsync("NewAcciona.xlsx")
        .then(workbook => {
                        
            // Get the output
            return workbook.outputAsync();
        })
    }
}

module.exports = convertExcelToBuffer;

