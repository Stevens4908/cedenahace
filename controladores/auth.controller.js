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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renovarContrasena = exports.enviarCorreo = exports.verificarToken = exports.login = exports.register = void 0;
var bcrypt_1 = require("../utils/bcrypt");
var jwt_1 = require("../utils/jwt");
var auth_service_1 = __importDefault(require("../servicios/auth.service"));
var constans_1 = require("../config/constans");
var authSrv = new auth_service_1.default();
var register = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newUsuario, _a, response, token, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                newUsuario = req.body;
                _a = newUsuario;
                return [4 /*yield*/, bcrypt_1.encripPassword(newUsuario.password)];
            case 1:
                _a.password = _b.sent();
                return [4 /*yield*/, authSrv.createUsuario(newUsuario)];
            case 2:
                response = _b.sent();
                if (response.status !== 0)
                    return [2 /*return*/, res.json(response)];
                token = jwt_1.tokenJWT({ id: response.data.id });
                response.token = token;
                return [2 /*return*/, res.status(200).json(response)];
            case 3:
                error_1 = _b.sent();
                return [2 /*return*/, res.status(500).json({ msj: constans_1.errorServer })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.register = register;
var login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, usernameDB, matchPassword, token, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, username = _a.username, password = _a.password;
                return [4 /*yield*/, authSrv.getUsuarioForEmail(username)];
            case 1:
                usernameDB = _b.sent();
                if (!usernameDB)
                    return [2 /*return*/, res
                            .status(403)
                            .json({ status: 1, msj: "usuario o contraseña incorrecta" })];
                return [4 /*yield*/, bcrypt_1.comparePassword(password, usernameDB.password)];
            case 2:
                matchPassword = _b.sent();
                if (!matchPassword)
                    return [2 /*return*/, res.status(403).json({
                            status: 1,
                            msj: "usuario o contraseña incorrecta",
                        })];
                token = jwt_1.tokenJWT({ id: usernameDB.id });
                return [2 /*return*/, res.status(200).json({
                        status: 0,
                        msj: "Bienvenido " + usernameDB.username,
                        token: token,
                    })];
            case 3:
                error_2 = _b.sent();
                return [2 /*return*/, res.status(500).json({ msj: constans_1.errorServer })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.login = login;
var verificarToken = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var token, decoded;
    return __generator(this, function (_a) {
        try {
            token = req.headers["x-access-token"];
            if (!token) {
                return [2 /*return*/, res.status(403).json({ status: false, msj: "ingrese token" })];
            }
            decoded = jwt_1.decodedToken(token);
            return [2 /*return*/, res.status(200).json({
                    status: true,
                    msj: "token valido",
                    token: token,
                })];
        }
        catch (error) {
            return [2 /*return*/, res.status(500).json({ status: false, msj: constans_1.errorServer })];
        }
        return [2 /*return*/];
    });
}); };
exports.verificarToken = verificarToken;
var enviarCorreo = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var email, user, token, info, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                email = req.body.email;
                return [4 /*yield*/, authSrv.getUsuarioForEmail(email)];
            case 1:
                user = _a.sent();
                if (!user) {
                    return [2 /*return*/, res.json({
                            status: 1,
                            msj: "usuario no encontrado",
                            data: [],
                        })];
                }
                token = jwt_1.tokenJWT({ id: user.id });
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4 /*yield*/, constans_1.transporter.sendMail({
                        from: '"Recuperar Contraseña"',
                        to: user.email,
                        subject: "Recuperar Contraseña",
                        html: "<h3> Para Cambiar su Contrase\u00F1a Ingrese al siguiente link </h3>  <a href=\"https://dashboard.zitiopasto.com/login/renovar-contrasena/" + token + "\" target=\"_blank\" rel=\"noopener noreferrer\"\n              >Recuperar Contrase\u00F1a</a>", // html body
                    })];
            case 3:
                info = _a.sent();
                return [2 /*return*/, res.json({
                        status: 0,
                        msj: "Mensaje enviado",
                        data: [],
                    })];
            case 4:
                error_3 = _a.sent();
                console.log(error_3);
                return [2 /*return*/, res.status(500).json({ status: false, msj: constans_1.errorServer })];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.enviarCorreo = enviarCorreo;
var renovarContrasena = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, token, password, decoded, user, _b, result, error_4;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.body, token = _a.token, password = _a.password;
                if (!token) {
                    return [2 /*return*/, res.status(403).json({ status: 1, msj: "Error ", data: [] })];
                }
                _c.label = 1;
            case 1:
                _c.trys.push([1, 5, , 6]);
                decoded = jwt_1.decodedToken(token);
                return [4 /*yield*/, authSrv.getUsuarioForID(decoded.id)];
            case 2:
                user = _c.sent();
                _b = user;
                return [4 /*yield*/, bcrypt_1.encripPassword(password)];
            case 3:
                _b.password = _c.sent();
                return [4 /*yield*/, authSrv.updatePassword(decoded.id, user.password)];
            case 4:
                result = _c.sent();
                return [2 /*return*/, res.json({
                        status: 0,
                        msj: "renovar",
                        data: {
                            email: user.email,
                            password: password,
                        },
                    })];
            case 5:
                error_4 = _c.sent();
                console.log(error_4);
                return [2 /*return*/, res.status(500).json({ status: 1, msj: constans_1.errorServer, error: error_4 })];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.renovarContrasena = renovarContrasena;
//# sourceMappingURL=auth.controller.js.map