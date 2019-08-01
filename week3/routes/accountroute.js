module.exports = (app, path) => {
  app.get('/account', (req, res) => {
    const filepath = path.resolve('/www/account.html');
    res.sendFile(filepath);
  })
}