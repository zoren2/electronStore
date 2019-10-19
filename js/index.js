const {BrowserWindow, app, ipcMain} = require('electron');

function createWindows() {
    // Index
    let appWindow = new BrowserWindow({
        width: 800,
        height: 600,
        center: true,
        minWidth: 300,
        minHeight: 400,
        show: false
    });


    // About
    let aboutWindow = new BrowserWindow({
        width: 300,
        height: 300,
        frame: false,
        webPreferences: {
            nodeIntegration: true
        },
        show: false
    });
    appWindow.loadFile('index.html');
    aboutWindow.loadFile('about.html');


    appWindow.once('ready-to-show', () => {
        appWindow.maximize();
        appWindow.show();

        // Shows About window briefly, then goes away
        setTimeout(() => {
            aboutWindow.show();
            setTimeout(() => {
                aboutWindow.hide();
            }, 3000);
        }, 1000);

    });

    // Explicit memory disposal
    appWindow.on('closed', () => {
        appWindow = null;
    });

    aboutWindow.on('closed', () => {
        aboutWindow = null;
    });

    ipcMain.on('closeInfoWindow', (event) => {
        aboutWindow.hide();
        }
    );
}

app.on('ready', createWindows);
