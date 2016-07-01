# USB Driver Diff

Simple test project to compare the devices reported by usb-driver
run by Node.js and within Electron.

## Installation:

```
npm install
```

## Running it

```
npm start
```

This will:

* Dump the devices as JSON (using Electron's Node) to `electron.json`
* Dump the devices as JSON (using your Node) to `node.json`
* Diff the two

You should see diff output.

You can also run `npm run on-electron`, `npm run on-node`, and `npm run diff` independently.
