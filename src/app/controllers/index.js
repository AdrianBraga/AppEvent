const data = require('../../../data.json');

const DataCard = require('../models/DataCard');

exports.pageHome = function(req, res) {
  return res.render('pages/home', { cards: data.cards })
}

exports.listEvents = function(req, res) {
  DataCard.cards((cards) => {
    return res.render('pages/listEvents', { cards })
  })
}