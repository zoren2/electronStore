const { BrowserWindow, app } = require('electron');

function createWindows(){
    let appWindow = new BrowserWindow({width: 800, height: 600, frame: false});
    appWindow.loadFile('index.html');
}

app.on('ready', createWindows);
