
import { app, BrowserWindow, nativeImage } from 'electron';
import path from 'path';

class CreateWindowAPP {

    constructor() { }

    public createWindow(): void {

        const icon = nativeImage.createFromPath(`${app.getAppPath()}/src/assets/icon.png`);

        if (app.dock) {
            app.dock.setIcon(icon);
        }

        const mainWindow = new BrowserWindow({
            icon,
            width: 800,
            height: 600,
            webPreferences: {
                preload: path.join(__dirname, 'preload.js'),
                nodeIntegration: true,
            },
        });

        mainWindow.setMenuBarVisibility(true);

        // mainWindow.webContents.openDevTools();

        mainWindow.loadFile("src/views/index.html");
    }
}

app.whenReady().then((): void => {
    const createWindowClass = new CreateWindowAPP();
    createWindowClass.createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindowClass.createWindow();
    })

    app.commandLine.appendSwitch('disable-gpu');
    app.commandLine.appendArgument('disable-gpu');
});

app.on('window-all-closed', (): void => {
    if (process.platform !== 'darwin') app.quit();
});