"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const express_1 = __importDefault(require("express"));
const base_controller_1 = require("../common/base.controller");
class UserController extends base_controller_1.BaseController {
    constructor() {
        const path = "/users";
        const router = express_1.default.Router();
        super(router, path);
        this.routes = [
            { path: "/", method: "get", callback: this.usersGet },
        ];
        this.bindRoutes(this.routes);
    }
    usersGet(req, res, next) {
        res.status(200).send("Users");
    }
}
exports.UserController = UserController;
