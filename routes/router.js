module.exports = app => {
  app.get('/*', function (req, res, next) {
    res.setHeader('Last-Modified', new Date().toUTCString());
    next();
  });

  app.use('/api/tutorials', require('./tutorial.routes'));
};