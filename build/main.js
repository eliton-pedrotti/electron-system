"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path_1 = __importDefault(require("path"));
class CreateWindowAPP {
    constructor() { }
    createWindow() {
        const icon = electron_1.nativeImage.createFromPath(`${electron_1.app.getAppPath()}/src/assets/icon.png`);
        if (electron_1.app.dock) {
            electron_1.app.dock.setIcon(icon);
        }
        const mainWindow = new electron_1.BrowserWindow({
            icon,
            width: 800,
            height: 600,
            webPreferences: {
                preload: path_1.default.join(__dirname, 'preload.js'),
                nodeIntegration: true,
            },
        });
        mainWindow.setMenuBarVisibility(true);
        // mainWindow.webContents.openDevTools();
        mainWindow.loadFile("src/views/index.html");
    }
}
electron_1.app.whenReady().then(() => {
    const createWindowClass = new CreateWindowAPP();
    createWindowClass.createWindow();
    electron_1.app.on('activate', () => {
        if (electron_1.BrowserWindow.getAllWindows().length === 0)
            createWindowClass.createWindow();
    });
    electron_1.app.commandLine.appendSwitch('disable-gpu');
    electron_1.app.commandLine.appendArgument('disable-gpu');
});
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        electron_1.app.quit();
});
//# sourceMappingURL=main.js.map