const { BrowserWindow, app } = require('electron');

function createWindows(){
    let appWindow = new BrowserWindow({width: 800, height: 600, frame: false});
    appWindow.loadURL('https://7ty.tech');
}

app.on('ready', createWindows);
