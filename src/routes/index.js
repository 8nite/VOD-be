import express from 'express'
import rp from 'request-promise'

var router = express.Router();

/* For the FE to get the json video lists bason on the filter criteria
    input query: filer
*/
router.get('/', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  //fetch and get the json list
  const options = {
    uri: 'https://accedo-ps-programming-exam.s3-ap-southeast-1.amazonaws.com/movies.json',
    headers: {
      "Content-Type": "application/json"
    },
    json: true
  }
  rp(options)
  .then(($) => {
    //if fetch success then filter by category
    if (req.query.filter && req.query.filter !== '' && req.query.filter !== 'null') {
      let filterList = $.entries.filter((entry) => entry.categories.some((category) => category.id === req.query.filter))
      res.send({entries: filterList})
    }
    else
      res.send($)
  })
});

export default router;
