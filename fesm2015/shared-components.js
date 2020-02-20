import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/shared-components.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SharedComponentsService {
    constructor() { }
}
SharedComponentsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SharedComponentsService.ctorParameters = () => [];
/** @nocollapse */ SharedComponentsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SharedComponentsService_Factory() { return new SharedComponentsService(); }, token: SharedComponentsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/shared-components.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SharedComponentsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SharedComponentsComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-shared-components',
                template: `
    <p>
      shared-components works!
    </p>
  `
            }] }
];
/** @nocollapse */
SharedComponentsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/shared-components.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SharedComponentsModule {
}
SharedComponentsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SharedComponentsComponent],
                imports: [],
                exports: [SharedComponentsComponent]
            },] }
];

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
