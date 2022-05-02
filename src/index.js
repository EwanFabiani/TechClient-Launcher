const { app, BrowserWindow } = require('electron')

app.whenReady().then(() => {
    createWindow()
})

const createWindow = () => {
    const win = new BrowserWindow({
      width: 1024,
      height: 576,
      frame: false,
      resizable: false,
      show: false
    })
  
    win.loadFile('src/windows/start/index.html');
    
    win.once('ready-to-show', () => {
      win.show();
    })

    try { require('electron-reloader')(module);} catch {};

}