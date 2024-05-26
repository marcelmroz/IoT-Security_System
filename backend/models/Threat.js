const db = require('../config/db');

const logThreat = (message, timestamp, callback) => {
  const sql = 'INSERT INTO threats (message, timestamp) VALUES (?, ?)';
  db.query(sql, [message, timestamp], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return callback(err, null);
    }
    callback(null, results);
  });
};

module.exports = { logThreat };
