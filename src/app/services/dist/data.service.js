"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var DataService = /** @class */ (function () {
    function DataService(http, router) {
        this.http = http;
        this.router = router;
        this.apiUrl = "https://localhost:7228/api";
        this.upload = "File/uploadd";
    }
    DataService.prototype.uploadCsv = function (file) {
        var formData = new FormData();
        formData.append('file', file);
        return this.http.post(this.apiUrl + "/" + this.upload, formData);
    };
    DataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;

//# sourceMappingURL=data.service.js.map
