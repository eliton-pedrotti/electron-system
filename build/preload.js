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
const script_1 = require("./src/scripts/script");
const electron_1 = require("electron");
class ExecuteAllMethods {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            yield script_1.email.getEmail();
            yield script_1.email.saveEmail();
        });
    }
}
const executeAllMethods = new ExecuteAllMethods();
electron_1.contextBridge.exposeInMainWorld("api", {
    executeAllMethods: executeAllMethods.execute,
});
//# sourceMappingURL=preload.js.map