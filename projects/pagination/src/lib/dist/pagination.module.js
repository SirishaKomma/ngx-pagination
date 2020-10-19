"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaginationModule = void 0;
var core_1 = require("@angular/core");
var pagination_component_1 = require("./pagination.component");
var pagination_service_1 = require("./pagination.service");
var pagination_directive_1 = require("./pagination.directive");
var pagination_pipe_1 = require("./pagination.pipe");
var pagination_service_2 = require("./pagination.service");
__createBinding(exports, pagination_service_2, "PaginationService");
var pagination_component_2 = require("./pagination.component");
__createBinding(exports, pagination_component_2, "PaginationComponent");
var pagination_directive_2 = require("./pagination.directive");
__createBinding(exports, pagination_directive_2, "PaginationDirective");
var pagination_pipe_2 = require("./pagination.pipe");
__createBinding(exports, pagination_pipe_2, "PaginationPipe");
var PaginationModule = /** @class */ (function () {
    function PaginationModule() {
    }
    PaginationModule = __decorate([
        core_1.NgModule({
            declarations: [
                pagination_component_1.PaginationComponent,
                pagination_pipe_1.PaginationPipe,
                pagination_directive_1.PaginationDirective
            ],
            imports: [],
            providers: [pagination_service_1.PaginationService],
            exports: [pagination_component_1.PaginationComponent,
                pagination_pipe_1.PaginationPipe,
                pagination_directive_1.PaginationDirective]
        })
    ], PaginationModule);
    return PaginationModule;
}());
exports.PaginationModule = PaginationModule;
