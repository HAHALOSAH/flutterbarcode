const { app, BrowserWindow } = require('electron');

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: 'icon.png'
  })

  mainWindow.loadURL("https://flutterbarcode.tk");
}

app.whenReady().then(createWindow)
