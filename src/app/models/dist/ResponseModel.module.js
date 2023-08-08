"use strict";
exports.__esModule = true;
var DataCsv = /** @class */ (function () {
    function DataCsv() {
        this.headers = [];
        this.rows = [];
    }
    return DataCsv;
}());
exports.DataCsv = DataCsv;
var ResponseModel = /** @class */ (function () {
    function ResponseModel() {
        this.dataFile = new DataCsv();
        this.excelDownloadLink = '';
    }
    return ResponseModel;
}());
exports.ResponseModel = ResponseModel;

//# sourceMappingURL=ResponseModel.module.js.map
