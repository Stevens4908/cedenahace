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
exports.getOficinasPorAreas = exports.getImagen = exports.deleteOficina = exports.updateOficina = exports.createOficina = exports.getOficina = exports.getOficinas = void 0;
var oficina_service_1 = __importDefault(require("../servicios/oficina.service"));
var constans_1 = require("../config/constans");
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var __oficinaSvr = new oficina_service_1.default();
var getOficinas = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, __oficinaSvr.getOficinas()];
            case 1:
                result = _a.sent();
                return [2 /*return*/, res.json({
                        status: 0,
                        msj: "Oficinas Cargadas Correctamente",
                        data: result,
                    })];
            case 2:
                error_1 = _a.sent();
                return [2 /*return*/, res.status(500).json({ msj: constans_1.errorServer })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getOficinas = getOficinas;
var getOficina = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, __oficinaSvr.getOficina(Number(id))];
            case 1:
                result = _a.sent();
                return [2 /*return*/, res.json({
                        status: 0,
                        msj: "Oficina Cargada Correctamente",
                        data: result,
                    })];
            case 2:
                error_2 = _a.sent();
                return [2 /*return*/, res.status(500).json({ msj: constans_1.errorServer })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getOficina = getOficina;
var createOficina = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newOficina, result, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                if (!req.file) {
                    return [2 /*return*/, res.status(500).json({
                            status: 1,
                            msj: "Ocurrio un error no hay imagen",
                            data: [],
                        })];
                }
                newOficina = req.body;
                newOficina.imagen = req.file.filename;
                return [4 /*yield*/, __oficinaSvr.createOficina(newOficina)];
            case 1:
                result = _a.sent();
                return [2 /*return*/, res.json({
                        status: 0,
                        msj: "Oficina creada Correctamente",
                        data: result,
                    })];
            case 2:
                error_3 = _a.sent();
                console.log(error_3);
                return [2 /*return*/, res.status(500).json({ msj: "internar error 500", error: error_3 })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createOficina = createOficina;
var updateOficina = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, updateOficina_1, imagen_oficina, result_1, rutaAuxImagen, result, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                id = req.params.id;
                updateOficina_1 = req.body;
                updateOficina_1.id = Number(id);
                return [4 /*yield*/, __oficinaSvr.getOficina(updateOficina_1.id)];
            case 1:
                imagen_oficina = (_a.sent()).imagen_oficina;
                if (!!req.file) return [3 /*break*/, 3];
                updateOficina_1.imagen = imagen_oficina;
                return [4 /*yield*/, __oficinaSvr.updateOficina(updateOficina_1)];
            case 2:
                result_1 = _a.sent();
                return [2 /*return*/, res.status(200).json({
                        status: 0,
                        msj: "Oficina actualizada Correctamente",
                        data: result_1,
                    })];
            case 3:
                rutaAuxImagen = path_1.default.join(__dirname, constans_1.globalPathImagenes.pathImagenesOficina, imagen_oficina);
                return [4 /*yield*/, fs_1.default.unlinkSync(rutaAuxImagen)];
            case 4:
                _a.sent();
                updateOficina_1.imagen = req.file.filename;
                return [4 /*yield*/, __oficinaSvr.updateOficina(updateOficina_1)];
            case 5:
                result = _a.sent();
                return [2 /*return*/, res.status(200).json({
                        status: 0,
                        msj: "Oficina actualizada Correctamente",
                        data: result,
                    })];
            case 6:
                error_4 = _a.sent();
                return [2 /*return*/, res.status(500).json({ msj: constans_1.errorServer, error: error_4 })];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.updateOficina = updateOficina;
var deleteOficina = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, __oficinaSvr.deleteOficina(Number(id))];
            case 1:
                result = _a.sent();
                return [2 /*return*/, res.json({
                        status: 0,
                        msj: "Oficina eliminada",
                        data: result,
                    })];
            case 2:
                error_5 = _a.sent();
                return [2 /*return*/, res.status(500).json({ msj: constans_1.errorServer })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteOficina = deleteOficina;
var getImagen = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var nombre, ruta;
    return __generator(this, function (_a) {
        try {
            nombre = req.params.nombre;
            ruta = path_1.default.join(__dirname, constans_1.globalPathImagenes.pathImagenesOficina, nombre);
            return [2 /*return*/, res.sendFile(ruta)];
        }
        catch (error) {
            return [2 /*return*/, res.status(500).json({ msj: constans_1.errorServer })];
        }
        return [2 /*return*/];
    });
}); };
exports.getImagen = getImagen;
var getOficinasPorAreas = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, __oficinaSvr.getOficinasPorAreas()];
            case 1:
                result = _a.sent();
                return [2 /*return*/, res.json(result)];
            case 2:
                error_6 = _a.sent();
                console.log(error_6);
                return [2 /*return*/, res.status(500).json({ msj: constans_1.errorServer })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getOficinasPorAreas = getOficinasPorAreas;
//# sourceMappingURL=oficina.controller.js.map