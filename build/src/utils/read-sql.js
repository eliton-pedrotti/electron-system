"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readSql = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const readSql = (caminho) => {
    const fileDatabaseDir = path_1.default.join(__dirname, '..', 'sql', `${caminho}.sql`);
    return promises_1.default.readFile(fileDatabaseDir, 'utf8');
};
exports.readSql = readSql;
//# sourceMappingURL=read-sql.js.map