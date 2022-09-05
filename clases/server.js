"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var helmet_1 = __importDefault(require("helmet"));
var oficina_route_1 = __importDefault(require("../rutas/oficina.route"));
var area_route_1 = __importDefault(require("../rutas/area.route"));
var auth_route_1 = __importDefault(require("../rutas/auth.route"));
var rol_route_1 = __importDefault(require("../rutas/rol.route"));
var visitante_route_1 = __importDefault(require("../rutas/visitante.route"));
var constans_1 = require("../config/constans");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.port = 4000;
        //MIDDLEWARES
        this.middleware();
        //routes
        this.routes();
    }
    Server.prototype.routes = function () {
        this.app.use(constans_1.apiPaths.oficina, oficina_route_1.default);
        this.app.use(constans_1.apiPaths.area, area_route_1.default);
        this.app.use(constans_1.apiPaths.auth, auth_route_1.default);
        this.app.use(constans_1.apiPaths.rol, rol_route_1.default);
        this.app.use(constans_1.apiPaths.visita, visitante_route_1.default);
    };
    Server.prototype.middleware = function () {
        //LECTURA DEL BODY
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.json({ limit: "50mb" }));
        //CORS
        this.app.use(cors_1.default());
        //HELMET
        this.app.use(helmet_1.default());
        //MORGAN
        this.app.use(morgan_1.default("tiny"));
    };
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("SERVIDOR CORRIENDO EN EL PUERTO " + _this.port);
        });
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=server.js.map