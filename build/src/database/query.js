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
Object.defineProperty(exports, "__esModule", { value: true });
exports.querySQL = void 0;
const connection_1 = require("./connection");
class QuerySQL {
    constructor() { }
    query(query) {
        return __awaiter(this, void 0, void 0, function* () {
            let db = connection_1.connection.openConnection();
            return yield new Promise((resolve, reject) => {
                db.all(query, (err, rows) => {
                    if (err)
                        reject(err);
                    else
                        resolve(rows);
                });
            })
                .finally(() => {
                db.close();
            });
        });
    }
}
exports.querySQL = new QuerySQL();
//# sourceMappingURL=query.js.map