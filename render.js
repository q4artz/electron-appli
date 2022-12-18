//render.js or other js communicates with the backend and frontend

const ipcRenderer = require("electron").ipcRenderer
const GeneratePassword = () => {
    ipcRenderer.send(
    "GeneratePassword",
    document.querySelector(".KeyWord").value
    );
};

//generated password from main.js come to here
ipcRenderer.on("reveivePassword",(event,data) =>{
    alert(data);
});