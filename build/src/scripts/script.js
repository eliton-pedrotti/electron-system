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
exports.email = void 0;
const query_1 = require("../database/query");
const read_sql_1 = require("../utils/read-sql");
class Email {
    saveEmail() {
        return __awaiter(this, void 0, void 0, function* () {
            const email = document.getElementById("email");
            const buttonEmail = document.getElementById("save_email");
            buttonEmail.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
                console.log(email.value);
                const insertEmailQuery = yield (0, read_sql_1.readSql)('insert-email');
                const insertEmail = insertEmailQuery.replace('@email', `${email.value}`);
                console.log(insertEmail);
                if (!email.value)
                    return alert('Não há registro de email!');
                return yield query_1.querySQL.query(insertEmail);
            }));
        });
    }
    //Esse método aqui é só pra testar
    getEmail() {
        return __awaiter(this, void 0, void 0, function* () {
            const emails = yield query_1.querySQL.query("SELECT * FROM email");
            console.log('foi');
            let divEmails = document.getElementById("emails");
            emails.forEach((email) => {
                divEmails.innerHTML += JSON.stringify(email);
            });
        });
    }
}
exports.email = new Email();
//# sourceMappingURL=script.js.map