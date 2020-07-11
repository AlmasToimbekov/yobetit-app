module.exports = app => {
  app.get('/*', function (req, res, next) {
    res.setHeader('Last-Modified', new Date().toUTCString());
    next();
  });

  app.use('/api/countries', require('./countries.routes'));
  app.use('/api/slots', require('./slot-mashine.routes'));
};