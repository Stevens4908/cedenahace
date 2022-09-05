"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectBD = void 0;
var pg_1 = require("pg");
var constans_1 = require("../config/constans");
exports.connectBD = new pg_1.Pool({
    user: constans_1.globalDataBase.user,
    password: constans_1.globalDataBase.password,
    host: constans_1.globalDataBase.host,
    port: constans_1.globalDataBase.port,
    database: constans_1.globalDataBase.database,
});
//# sourceMappingURL=connectBD.js.map