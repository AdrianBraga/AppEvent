const data = require('../../../data.json');

exports.pageHome = function(req, res) {
  return res.render('pages/home', { cards: data.cards })
}

exports.listEvents = function(req, res) {
  return res.render('pages/listEvents', { cards: data.cards })
}