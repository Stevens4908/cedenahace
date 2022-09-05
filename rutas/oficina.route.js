"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var oficinaCtrl = __importStar(require("../controladores/oficina.controller"));
var multer_1 = __importDefault(require("../middlewares/multer"));
var oficinaRouter = express_1.Router();
oficinaRouter.get("/", oficinaCtrl.getOficinas);
oficinaRouter.get("/:id", oficinaCtrl.getOficina);
oficinaRouter.post("/", [multer_1.default], oficinaCtrl.createOficina);
oficinaRouter.put("/:id", [multer_1.default], oficinaCtrl.updateOficina);
oficinaRouter.delete("/:id", oficinaCtrl.deleteOficina);
oficinaRouter.get("/imagen/:nombre", oficinaCtrl.getImagen);
oficinaRouter.get("/por/areas", oficinaCtrl.getOficinasPorAreas);
exports.default = oficinaRouter;
//# sourceMappingURL=oficina.route.js.map