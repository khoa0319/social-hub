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

module.exports = _notis;