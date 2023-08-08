"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ResponseModel_module_1 = require("./models/ResponseModel.module");
var AppComponent = /** @class */ (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.title = 'first-task';
        this.isDownloadable = false;
        this.errorMessage = null; // Add this property
        this.responseModel = new ResponseModel_module_1.ResponseModel();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.UploadFileCsv();
    };
    AppComponent.prototype.onFileSelected = function (event) {
        this.file = event.target.files[0];
        this.UploadFileCsv();
    };
    AppComponent.prototype.UploadFileCsv = function () {
        var _this = this;
        if (this.file) {
            this.dataService.uploadCsv(this.file).subscribe(function (response) {
                _this.responseModel = response;
                _this.errorMessage = "";
                console.log('API Response:', response);
                _this.isDownloadable = true;
            }, function (error) {
                console.error('API Error:', error);
                _this.errorMessage = error.error.error;
            });
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=app.component.js.map
