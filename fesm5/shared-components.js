import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/shared-components.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SharedComponentsService = /** @class */ (function () {
    function SharedComponentsService() {
    }
    SharedComponentsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SharedComponentsService.ctorParameters = function () { return []; };
    /** @nocollapse */ SharedComponentsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SharedComponentsService_Factory() { return new SharedComponentsService(); }, token: SharedComponentsService, providedIn: "root" });
    return SharedComponentsService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/shared-components.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SharedComponentsComponent = /** @class */ (function () {
    function SharedComponentsComponent() {
    }
    /**
     * @return {?}
     */
    SharedComponentsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SharedComponentsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-shared-components',
                    template: "\n    <p>\n      shared-components works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    SharedComponentsComponent.ctorParameters = function () { return []; };
    return SharedComponentsComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/shared-components.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SharedComponentsModule = /** @class */ (function () {
    function SharedComponentsModule() {
    }
    SharedComponentsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [SharedComponentsComponent],
                    imports: [],
                    exports: [SharedComponentsComponent]
                },] }
    ];
    return SharedComponentsModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: shared-components.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SharedComponentsComponent, SharedComponentsModule, SharedComponentsService };
//# sourceMappingURL=shared-components.js.map
