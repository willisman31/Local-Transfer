const http = require('http');
const formidable = require('formidable');
const fs = require('fs');

const port = 3000;
let filePath = "./received/"

const server = http.createServer((req, res) => {
    if (req.url == '/fileupload') {
        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
          const oldpath = files.filetoupload.filepath;
          const newpath = filePath + files.filetoupload.originalFilename;
          fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;
            res.write('<html><h1>File uploaded</h1><p><a href="../">Send another file</a></p></html>');
            res.write('')
            res.end();
          });
     });
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
      }
});

server.listen(port, () => {
  console.log(`Server running at on {port}`);
});