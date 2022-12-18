// main that contains all the set ups

// object that generates a window
const {app, BrowserWindow, ipcMain} = require("electron"); 

let win = null;

const CreateWindow = () => {
    win = new BrowserWindow({
        width: 800,
        height: 500,
        resizable: false,
        webPreferences: {
            nodeIntegration: true
        },
    });
    win.loadFile("index.html");
};

app.whenReady().then(CreateWindow);

// if data is received it will run
ipcMain.on("GeneratePassword",(event,data) => {
   const randomPasswrord = data + Math.random().toString(36).substr(2,5);
   win.webContents.send("reveivePassword",randomPasswrord);
});