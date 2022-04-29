const db = require('../../config/db');

exports.cards = function(callback) {
  db.query(`SELECT * FROM card_events`, (err, result) => {
    if (err) throw `Database Error! - ${err}`

    callback(result.rows);
  });
}