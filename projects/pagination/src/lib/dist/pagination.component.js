"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaginationComponent = void 0;
var core_1 = require("@angular/core");
var template_1 = require("./template");
function coerceToBoolean(input) {
    return !!input && input !== 'false';
}
/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new core_1.EventEmitter();
        this.pageBoundsCorrection = new core_1.EventEmitter();
        this._directionLinks = true;
        this._autoHide = false;
        this._responsive = false;
    }
    Object.defineProperty(PaginationComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = coerceToBoolean(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = coerceToBoolean(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "responsive", {
        get: function () {
            return this._responsive;
        },
        set: function (value) {
            this._responsive = coerceToBoolean(value);
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        core_1.Input()
    ], PaginationComponent.prototype, "id");
    __decorate([
        core_1.Input()
    ], PaginationComponent.prototype, "maxSize");
    __decorate([
        core_1.Input()
    ], PaginationComponent.prototype, "directionLinks");
    __decorate([
        core_1.Input()
    ], PaginationComponent.prototype, "autoHide");
    __decorate([
        core_1.Input()
    ], PaginationComponent.prototype, "responsive");
    __decorate([
        core_1.Input()
    ], PaginationComponent.prototype, "previousLabel");
    __decorate([
        core_1.Input()
    ], PaginationComponent.prototype, "nextLabel");
    __decorate([
        core_1.Input()
    ], PaginationComponent.prototype, "screenReaderPaginationLabel");
    __decorate([
        core_1.Input()
    ], PaginationComponent.prototype, "screenReaderPageLabel");
    __decorate([
        core_1.Input()
    ], PaginationComponent.prototype, "screenReaderCurrentLabel");
    __decorate([
        core_1.Output()
    ], PaginationComponent.prototype, "pageChange");
    __decorate([
        core_1.Output()
    ], PaginationComponent.prototype, "pageBoundsCorrection");
    PaginationComponent = __decorate([
        core_1.Component({
            selector: 'pagination-controls',
            template: template_1.DEFAULT_TEMPLATE,
            styles: [template_1.DEFAULT_STYLES],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
