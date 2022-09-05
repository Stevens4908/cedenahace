"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var connectBD_1 = require("../basedatos/connectBD");
var AuthService = /** @class */ (function () {
    function AuthService() {
        this.connectBD = connectBD_1.connectBD;
    }
    AuthService.prototype.createUsuario = function (usuario) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connectBD.query("SELECT * FROM public.__usuarios_registrar_usuarios($1,$2,$3,$4) as res", [usuario.username, usuario.email, usuario.password, usuario.roles])];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.rows[0].res];
                }
            });
        });
    };
    AuthService.prototype.getUsuarioForEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connectBD.query("SELECT\n        u.id_usuario AS ID,\n        u.username_usuario AS username,\n        u.password_usuario AS password,\n        u.email_usuario AS email,\n        created_on AS create\n      FROM usuario u \n      WHERE u.email_usuario = $1", [email])];
                    case 1:
                        response = _a.sent();
                        if (response.rowCount === 0)
                            return [2 /*return*/, false];
                        return [2 /*return*/, response.rows[0]];
                }
            });
        });
    };
    AuthService.prototype.getUsuarioForID = function (ID) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connectBD.query("SELECT\n        u.id_usuario AS ID,\n        u.username_usuario AS username,\n        u.password_usuario AS password,\n        u.email_usuario AS email,\n        u.created_on AS create\n      FROM usuario u \n      WHERE u.id_usuario = $1", [ID])];
                    case 1:
                        response = _a.sent();
                        if (response.rowCount === 0)
                            return [2 /*return*/, false];
                        return [2 /*return*/, response.rows[0]];
                }
            });
        });
    };
    AuthService.prototype.getUsuarioRoles = function (ID) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connectBD.query("SELECT \n        uxr.id_rol AS rol,\n        r.descripcion_rol AS descripcion\n        FROM usuario u,\n          usuario_x_rol uxr,\n          rol r\n        WHERE u.id_usuario = uxr.id_usuario\n        AND   uxr.id_rol   = r.id_rol\n        AND u.id_usuario   = $1\n      ", [ID])];
                    case 1:
                        response = _a.sent();
                        if (response.rowCount === 0)
                            return [2 /*return*/, false];
                        return [2 /*return*/, response.rows];
                }
            });
        });
    };
    AuthService.prototype.updatePassword = function (ID, password) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connectBD.query("UPDATE usuario\n      SET password_usuario =$2\n      WHERE id_usuario = $1", [ID, password])];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    return AuthService;
}());
exports.default = AuthService;
//# sourceMappingURL=auth.service.js.map