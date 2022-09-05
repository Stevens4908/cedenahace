"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = exports.globalJWT = exports.globalPathAyuda = exports.globalPathImagenes = exports.errorServer = exports.apiPaths = exports.globalDataBase = void 0;
var nodemailer_1 = __importDefault(require("nodemailer"));
// export const globalDataBase = {
//   user: "postgres",
//   password: "J5OP0&smY0VzGyGYVS",
//   host: "database-app-cedenar.cogbtchgn2a9.us-east-2.rds.amazonaws.com",
//   port: 5432,
//   database: "rdsCedenar",
// };

exports.globalDataBase = {
    user: "sapdhbtshckgln",
    password: "61478930bc3abbfd21e6911a816e380e9b095a7f10a97f004e4c8de29dd1823d",
    host: "ec2-3-208-79-113.compute-1.amazonaws.com",
    port: 5432,
    database: "d7lqfrbf33b6ms",
};

/*
exports.globalDataBase = {
    user: "postgres",
    password: "adworkchain",
    host: "localhost",
    port: 5432,
    database: "api_cedenar",
};
*/
exports.apiPaths = {
    oficina: "/api/oficina",
    area: "/api/area",
    auth: "/api/auth",
    rol: "/api/rol",
    visita: "/api/visita",
};
exports.errorServer = "Ocurrio un ERROR";
exports.globalPathImagenes = {
    pathImagenesOficina: "../public/uploads/oficinas",
    simpleImagen: "imagen",
};
exports.globalPathAyuda = {
    pathAyuda: "../public/ayuda",
};
exports.globalJWT = {
    SECRET: "HOLAMUNDO",
};
exports.transporter = nodemailer_1.default.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "zitipasto@gmail.com",
        pass: "otkfsmpvfrrgkjxw",
    },
});
exports.transporter.verify().then(function () {
    console.log("listo para enviar emails");
});
//# sourceMappingURL=constans.js.map