"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
class BaseController {
    constructor(router, path) {
        this._router = router;
        this._path = path;
    }
    get path() {
        return this._path;
    }
    get router() {
        return this._router;
    }
    bindRoutes(routes) {
        for (const route of routes) {
            this._router[route.method](route.path, route.callback.bind(this));
        }
    }
}
exports.BaseController = BaseController;
