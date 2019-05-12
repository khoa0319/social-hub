/* App modules */
const pool = require('../../models/database');

// container for handle
const _activities = {}

// @TODO: validate querystring
_activities.handleGetActivities = (req, res) => {
  const { skip, limit } = req.query
  if (!skip || !limit) return res.status(400).json({error: 'invalid query '})
  pool.query(`SELECT * FROM ACTIVITY a inner join ACTIVITY_TYPE at on a.AT_ID = at.AT_ID ORDER BY CREATE_DATE LIMIT ? , ?`, [parseInt(skip), parseInt(limit)])
    .then(result => {
      if (result.length === 0) return res.status(404).json({error: "not found"})
      return res.status(200).json({result})
    })
    .catch(error => res.status(500).json(error))
}

//@TODO: validate form
_activities.handleJoinActivity = (req, res) => {
  const { id, a_id } = req.body;
  const studentActivity = {
    A_ID: a_id,
    ID: id,
    STATE: 'Registered',
  }
  pool.query(`INSERT INTO STUDENT_ACTIVITY SET ?`, studentActivity)
    .then(result => {
      res.status(200).json({result})
    })
    .catch(err => res.status(500).json(err))
}

module.exports = _activities;
