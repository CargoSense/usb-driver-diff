const usbDriver = require('usb-driver')();

try {
  const {app} = require('electron');
  electron(app);
} catch(e) {
  normal();
}

function normal() {
  return usbDriver.getAll().then(function(devices) {
    console.log(JSON.stringify(devices));
  });
}

function electron(app) {
  app.on('ready', () => {
    normal().then(function() {
      app.quit();
    });
  });
}
