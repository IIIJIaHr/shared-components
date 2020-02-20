(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('shared-components', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['shared-components'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/shared-components.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SharedComponentsService = /** @class */ (function () {
        function SharedComponentsService() {
        }
        SharedComponentsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SharedComponentsService.ctorParameters = function () { return []; };
        /** @nocollapse */ SharedComponentsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SharedComponentsService_Factory() { return new SharedComponentsService(); }, token: SharedComponentsService, providedIn: "root" });
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        declarations: [SharedComponentsComponent],
                        imports: [],
                        exports: [SharedComponentsComponent]
                    },] }
        ];
        return SharedComponentsModule;
    }());

    exports.SharedComponentsComponent = SharedComponentsComponent;
    exports.SharedComponentsModule = SharedComponentsModule;
    exports.SharedComponentsService = SharedComponentsService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=shared-components.umd.js.map
