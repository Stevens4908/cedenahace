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
exports.getAyudaApp = exports.getAyuda = exports.getGraficoVisitantesTiempoTipoVisitante = exports.getGrafico = exports.registerVisita = exports.getTipoVisitantes = void 0;
var constans_1 = require("../config/constans");
var visita_service_1 = __importDefault(require("../servicios/visita.service"));
var path_1 = __importDefault(require("path"));
var visitaSvr = new visita_service_1.default();
var getTipoVisitantes = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, visitaSvr.getAllTiposVisitante()];
            case 1:
                result = _a.sent();
                return [2 /*return*/, res.status(200).json({
                        status: 0,
                        msj: "tipos de visitantes cargados correctamente",
                        data: result,
                    })];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                return [2 /*return*/, res.status(500).json({ msj: constans_1.errorServer, error: error_1 })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getTipoVisitantes = getTipoVisitantes;
var registerVisita = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var tipoVisitante, result, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                tipoVisitante = req.body.tipoVisitante;
                return [4 /*yield*/, visitaSvr.registerVisita(Number(tipoVisitante))];
            case 1:
                result = _a.sent();
                return [2 /*return*/, res.status(200).json({
                        status: 0,
                        msj: "tipos de visitantes cargados correctamente",
                        data: result,
                    })];
            case 2:
                error_2 = _a.sent();
                console.log(error_2);
                return [2 /*return*/, res.status(500).json({ msj: constans_1.errorServer })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.registerVisita = registerVisita;
var getGrafico = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, visitaSvr.getGrafico()];
            case 1:
                result = _a.sent();
                return [2 /*return*/, res.status(200).json({
                        status: 0,
                        msj: "Grafico",
                        data: result,
                    })];
            case 2:
                error_3 = _a.sent();
                console.log(error_3);
                return [2 /*return*/, res.status(500).json({ msj: constans_1.errorServer })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getGrafico = getGrafico;
var getGraficoVisitantesTiempoTipoVisitante = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, rango, tipovisitante, result, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.query, rango = _a.rango, tipovisitante = _a.tipovisitante;
                return [4 /*yield*/, visitaSvr.getGraficoVisitantesTiempoTipoVisitante(rango === null || rango === void 0 ? void 0 : rango.toString(), tipovisitante === null || tipovisitante === void 0 ? void 0 : tipovisitante.toString())];
            case 1:
                result = _b.sent();
                return [2 /*return*/, res.status(200).json({
                        status: 0,
                        msj: "Grafico",
                        data: result,
                    })];
            case 2:
                error_4 = _b.sent();
                console.log(error_4);
                return [2 /*return*/, res.status(500).json({ msj: constans_1.errorServer })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getGraficoVisitantesTiempoTipoVisitante = getGraficoVisitantesTiempoTipoVisitante;
var getAyuda = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var rutaAuxImagen;
    return __generator(this, function (_a) {
        try {
            rutaAuxImagen = path_1.default.join(__dirname, constans_1.globalPathAyuda.pathAyuda, "dasboard.pdf");
            return [2 /*return*/, res.status(200).sendFile(rutaAuxImagen)];
        }
        catch (error) {
            console.log(error);
            return [2 /*return*/, res.status(500).json({ msj: constans_1.errorServer })];
        }
        return [2 /*return*/];
    });
}); };
exports.getAyuda = getAyuda;
var getAyudaApp = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var rutaAuxImagen;
    return __generator(this, function (_a) {
        try {
            rutaAuxImagen = path_1.default.join(__dirname, constans_1.globalPathAyuda.pathAyuda, "app.pdf");
            return [2 /*return*/, res.status(200).sendFile(rutaAuxImagen)];
        }
        catch (error) {
            console.log(error);
            return [2 /*return*/, res.status(500).json({ msj: constans_1.errorServer })];
        }
        return [2 /*return*/];
    });
}); };
exports.getAyudaApp = getAyudaApp;
//# sourceMappingURL=visita.controller.js.map