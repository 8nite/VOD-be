import express from 'express'
import rp from 'request-promise'

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const options = {
    uri: 'https://accedo-ps-programming-exam.s3-ap-southeast-1.amazonaws.com/movies.json',
    headers: {
      "Content-Type": "application/json"
    },
    json: true
  }
  rp(options).then(($) => {
    if (req.query.filter && req.query.filter !== '' && req.query.filter !== 'null') {
      let filterList = $.entries.filter((entry) => entry.categories.some((category) => category.id === req.query.filter))
      res.send({entries: filterList})
    }
    else
      res.send($)
  })
});

export default router;
