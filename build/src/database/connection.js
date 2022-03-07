"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const sqlite3_1 = __importDefault(require("sqlite3"));
const path_1 = __importDefault(require("path"));
const fileDatabaseDir = path_1.default.join(__dirname, '..', 'database', 'database.sqlite');
class Connection {
    constructor() { }
    openConnection() {
        let db = new sqlite3_1.default.Database(fileDatabaseDir);
        return db;
    }
}
exports.connection = new Connection();
//# sourceMappingURL=connection.js.map