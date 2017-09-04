// Configuration Constants
const PORT = process.env.PORT || 3000;
const CDN = process.env.CDN || `http://localhost:${PORT}`;

// Module Import 
const fs = require('fs');
const path = require('path');
const cors  = require('cors');
const logger = require('morgan');
const express = require('express');

// Application
const app = express();

// Middlewares
app.use(cors())
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, './public')))

// Routring
app.use('/:tplName', (req, res, next) => {
  const tplName = req.params.tplName
  const tplFile = path.join(__dirname, `./templates/${tplName}.hbs`)
  
  fs.readFile(tplFile, 'utf8', (err, data) => {
    if (err) {
      err.status = 404
      err.message = 'No template file'
      return next(err);
    }

    data = data.replace(/{{cdn}}/g, CDN);
    
    res.setHeader('Content-type', 'text/plain');
    res.send(data);
  })
});

app.use('/', (req, res) => res.send('Usage: GET /templateName'));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
});

// Run 
app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
