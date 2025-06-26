const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    generatePassword: (length) => ipcRenderer.invoke('generate-password', length)
});
