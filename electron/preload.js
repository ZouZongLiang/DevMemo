const { contextBridge, ipcRenderer } = require('electron')


console.log('preload.js loaded !')
contextBridge.exposeInMainWorld('api', {
  windowStateChange: (state) => {
    switch (state) {
      case 'maximized':
        ipcRenderer.send('window-state-change', 'maximized')
        break
      case 'minimized':
        ipcRenderer.send('window-state-change', 'minimized')
        break
      case 'restored':
        ipcRenderer.send('window-state-change', 'restored')
        break
      case 'closed':
        ipcRenderer.send('window-state-change', 'closed')
        break
    }
  },
  onWindowStateChange: (callback) => ipcRenderer.on('window-state-change', (event, state) => callback(state))
})