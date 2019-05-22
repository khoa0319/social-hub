/* App modules */
const pool = require('../../models/database');

// container
const _notis = {}

_notis.handleGetAllNotis = (req, res) => {
  pool.query(`select COUNT(*) as notis from STUDENT_NOTI WHERE ISALL = true OR F_ID = ? OR M_ID = ? OR C_ID = ?`
    , [req.user.F_ID, req.user.C_ID, req.user.C_ID])
    .then(result => {
      res.status(200).json(result[0]);
    })
    .catch(error => res.status(500).json(error))
}

// @TODO: validate querystring
_notis.handleGetNotis = (req, res) => {
  const { skip, limit } = req.query;
  if (!skip || !limit) return res.status(400).json({ error: "invalid query " });
  pool
    .query(
      `SELECT * FROM NOTI_MESSAGE nm inner join STUDENT_NOTI sn on nm.NM_ID = sn.NM_ID ORDER BY nm.CREATE_DATE desc LIMIT ? , ?`,
      [parseInt(skip), parseInt(limit)]
    )
    .then(result => {
      if (result.length === 0)
        return res.status(404).json({ error: "not found" });
      return res.status(200).json({ result });
    })
    .catch(error => res.status(500).json(error));
};
_notis.handleCreateNotis = (req, res) => {
  const {NM_NAME,CONTENT,ADMIN_ID,SENDER} = req.body
  const CREATE_DATE=new Date()
  pool
    .query(
      `Insert into NOTI_MESSAGE set ?`,{NM_NAME,CONTENT,ADMIN_ID,SENDER,CREATE_DATE}
    )
    .then(result=>
      res.status(200).json({msg:"Tạo Tin Nhắn Thành Công",res:"win"})
    )
    .catch(err => res.status(500).json(err));
};
// _notis.handleEditNotis = (req, res) => {
//   const {NM_ID,NM_NAME,CONTENT,SENDER} = req.body
//   pool
//     .query(
//       `Insert into `,
//       [parseInt(skip), parseInt(limit)]
//     )
//     .then(result => {
//       if (!result[0]) return res.status(404).json({ error: "not found" });
//       res.status(200).json(result);
//     })
//     .catch(err => res.status(500).json(err));
// };
_notis.handlesendNotis = (req, res) => {
  let {NM_ID,F_ID,M_ID,C_ID,ISALL,ID} = req.body 
  pool
    .query(
      `Insert into STUDENT_NOTI set ?`,{NM_ID,F_ID,M_ID,C_ID,ISALL,ID}
    )
    .then(result => {
      res.status(200).json({msg:"Tạo Hoạt Động Thành Công",res:"win"});
    })
    .catch(err => res.status(500).json(err));
};
_notis.handleGetAllNotisA = (req, res) => {
  const { skip, limit } = req.query;
  if (!skip || !limit) return res.status(400).json({ error: "invalid query " });
  pool
    .query(
      `SELECT * FROM NOTI_MESSAGE ORDER BY CREATE_DATE desc LIMIT ? , ?`,
      [parseInt(skip), parseInt(limit)]
    )
    .then(result => {
      if (result.length === 0)
        return res.status(404).json({ error: "not found" });
      return res.status(200).json({ result });
    })
    .catch(error => res.status(500).json(error));
};
module.exports = _notis;