# Local-Transfer

Transfer files on local network over HTTP.  Unencrypted, use only on safe home networks for nonsensitive documents.

Basic lightweight web server that accepts file uploads; files can only be transfered in one direction.

## Installation

Clone and download the project to target device; download dependencies before running.

### Dependencies

- [Node](https://nodejs.org/en/download/)
- NPM - verify download with Node by running ```npm -v```
- formidable ```npm install formidable```
- http ```npm install http```
- fs ```npm install fs```

## Usage

By default, you must create a new directory called "received" in the same location as app.js; you can also changed the file upload target location.  Run app.js with node from PowerShell terminal ```node app.js```.

### How to Change where Files are Uploaded

Change the filepath variable in app.js to the location of your choice.

### How to change port

Modify the port variable in app.js
