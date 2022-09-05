"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var uuid_1 = require("uuid");
var path_1 = __importDefault(require("path"));
var constans_1 = require("../config/constans");
var storage = multer_1.default.diskStorage({
    destination: path_1.default.join(__dirname, constans_1.globalPathImagenes.pathImagenesOficina),
    filename: function (req, file, cb) {
        cb(null, uuid_1.v4() + path_1.default.extname(file.originalname));
    },
});
var uploadImagen = multer_1.default({
    storage: storage,
    limits: {
        fileSize: 50 * 1024 * 1024,
    },
}).single(constans_1.globalPathImagenes.simpleImagen);
exports.default = uploadImagen;
//# sourceMappingURL=multer.js.map