/* App modules */
const pool = require("../../models/database");

// container for handle
const _activities = {};

_activities.handleGetAllActivities = (req, res) => {
  pool.query(`select COUNT(*) as activities from ACTIVITY`)
    .then(result => {
      res.status(200).json(result[0]);
    })
    .catch(error => res.status(500).json(error))
}

_activities.handleGetAllJointActivities = (req, res) => {
  pool.query(`select COUNT(*) as activities from STUDENT_ACTIVITY where ID = ?`, req.user.ID)
    .then(result => {
      res.status(200).json(result[0]);
    })
    .catch(error => res.status(500).json(error))
}

// @TODO: validate querystring
_activities.handleGetActivities = (req, res) => {
  const { skip, limit } = req.query;
  if (!skip || !limit) return res.status(400).json({ error: "invalid query " });
  pool
    .query(
      `SELECT * FROM ACTIVITY a inner join ACTIVITY_TYPE at on a.AT_ID = at.AT_ID
      WHERE a.A_ID not in (select A_ID from STUDENT_ACTIVITY where ID = ?)
      ORDER BY CREATE_DATE desc LIMIT ? , ?`,
      [req.user.ID, parseInt(skip), parseInt(limit)]
    )
    .then(result => {
      if (result.length === 0)
        return res.status(404).json({ error: "not found" });
      return res.status(200).json({ result });
    })
    .catch(error => res.status(500).json(error));
};

_activities.handleGetJointActivities = (req, res) => {
  const { skip, limit } = req.query;
  if (!skip || !limit) return res.status(400).json({ error: "invalid query " });
  pool
    .query(
      `SELECT * FROM ACTIVITY a inner join ACTIVITY_TYPE at on a.AT_ID = at.AT_ID inner join STUDENT_ACTIVITY sa on a.A_ID = sa.A_ID
      where sa.ID = ? ORDER BY a.CREATE_DATE LIMIT ? , ?`,
      [req.user.ID, parseInt(skip), parseInt(limit)]
    )
    .then(result => {
      if (result.length === 0)        
      return res.status(200).json({ result });
    })
    .catch(error => res.status(500).json(error));
}

//@TODO: validate form
_activities.handleJoinActivity = (req, res) => {
  const { id, a_id } = req.body;
  const studentActivity = {
    A_ID: a_id,
    ID: id,
    STATE: "Registered"
  };
  pool
    .query(`INSERT INTO STUDENT_ACTIVITY SET ?`, studentActivity)
    .then(result => {
      return res.status(200).json({msg: "SUCCESS"});
    })
    .catch(err => res.status(500).json(err));
};
_activities.newActivity = (req, res) => {
  const {
    ADMIN_ID,
    AT_ID,
    A_NAME,
    CONTENT,
    STARTDATE,
    ENDDATE,
    FEE
  } = req.body;
  var time = new Date();
  var id=Date.now()/1000;
  const A_ID=id
  console.log(req.body);
  console.log(A_ID);
  pool
    .query(`SELECT * FROM ACTIVITY where A_ID=?`, A_ID)
    .then(match => {
      if (match[0]) return res.status(403).json({ error: "activity id exist" });
      var today = new Date();
      const newActivity = {
        A_ID,
        ADMIN_ID,
        AT_ID,
        A_NAME,
        CONTENT,
        CREATE_DATE:today,
        STARTDATE,
        ENDDATE,
        FEE
      };
      console.log(newActivity)
      pool.query(`INSERT INTO ACTIVITY SET ?`, newActivity)
      .then(result => {
        res.status(200).json({ result,msg:"Create New Activity Success" });
      });
    })
    .catch(err => res.status(500).json(err));
};
_activities.editActivity = (req, res) => {
  const {
    A_ID,
    AT_ID,
    A_NAME,
    CONTENT,
    STARTDATE,
    ENDDATE,
    FEE
  } = req.body;
  pool
    .query(`SELECT * FROM ACTIVITY where A_ID=?`, A_ID)
    .then(match => {
      if (!match[0]) return res.status(403).json({ error: "Không có activity tương ứng" });
      pool.query(`UPDATE ACTIVITY set AT_ID = ?,A_NAME=?,CONTENT=?,STARTDATE=?,ENDDATE=?,FEE=? where A_ID = ?`,[AT_ID,A_NAME,CONTENT,STARTDATE,ENDDATE,FEE,A_ID])
      .then(result => {
        res.status(200).json({ result,msg:"Create New Activity Success" });
      });
    })
    .catch(err => res.status(500).json(err));
};
_activities.checkInActivity=(req,res)=>{
  
}
module.exports = _activities;
