const { app, BrowserWindow } = require('electron')
const path = require('path')

let mainWindow = null;


function createWindow () {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 800,
        minHeight: 600,
        webPreferences: {
            // nodeIntegration: true,
            // contextIsolation: true,
            // enableRemoteModule: true
            preload: path.join(__dirname, 'preload.js')
        },
        title: 'devmemo',
        // icon: 'icon.png',
        frame: false,
        
    })
    // mainWindow.loadFile('index.html')
    mainWindow.loadURL('http://localhost:5173')
    mainWindow.webContents.openDevTools()
    let c = 0;
    setInterval(() => {
        mainWindow.setProgressBar(c);
        c = (c + 1) % 101;
    }, 100); 
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})


