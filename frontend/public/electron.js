const {app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

let appWindow;

function createWindow(){
    // Crea la ventana del navegador.
      appWindow = new BrowserWindow({
      width: 1200,
      height: 800,
      minWidth: 800,
      minHeight: 600,
      center: true,
      show: false,
      resizable:true,
      webPreferences: {
        nodeIntegration: true
      },
      icon: 'icon.png'
    });

    mainWindow.webContents.openDevTools();

    appWindow.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, "../build/index.html")}`
    )

    appWindow.once('ready-to-show', () => {
        appWindow.show();
    });

    mainWindow.on('closed', function () {
        mainWindow = null
    })

    appWindow.on('ready',createWindow);

    appWindow.on('window-all-closed', () => {
        if (proccess.platform !== 'darwin') {
            app.quit();
        }
    });
  
    appWindow.on('activate', () => {
      if (appWindow === null) {
          createWindow();
      }
    })
  
  }
