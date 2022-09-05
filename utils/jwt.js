"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodedToken = exports.tokenJWT = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var constans_1 = require("../config/constans");
var tokenJWT = function (data) {
    return jsonwebtoken_1.default.sign(data, constans_1.globalJWT.SECRET, {
        expiresIn: 86400, // 24 hours
    });
};
exports.tokenJWT = tokenJWT;
var decodedToken = function (token) {
    return jsonwebtoken_1.default.verify(token, constans_1.globalJWT.SECRET);
};
exports.decodedToken = decodedToken;
//# sourceMappingURL=jwt.js.map