"use strict";

var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

app.on('ready', function() {
  var win = new BrowserWindow({ width: 800, height: 600, webPreferences: { nodeIntegration: false }});
  win.loadURL('http://127.0.0.1:19849');
  win.webContents.on("did-finish-load", function() {
    console.log('Swagger editor loaded');
    setTimeout(function() {
      win.webContents.printToPDF({ pageSize: 'A4', landscape: true }, function(error, data) {
        if (error) throw error;
        require('fs').writeFile(require('path').join(process.argv[2], 'api.pdf'), data, function(error) {
          if (error)
            throw error;
          console.log("Write PDF successfully.");
          win.destroy();
        })
      });
    }, 3000);
  });
});