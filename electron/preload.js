const { contextBridge, ipcRenderer } = require('electron')


console.log('preload.js loaded !')
contextBridge.exposeInMainWorld('electron', {
  startDrag: (fileName) => {
    
  }
})