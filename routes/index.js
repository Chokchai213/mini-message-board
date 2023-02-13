var express = require('express');
const { format } = require('morgan');
var router = express.Router();

const messages = [
  {
    text: "GENERAL KENOBI",
    user: "General Kenobi",
    added: new Date()
  },
  {
    text: "GENERAL GRIEVOUS",
    user: "General Grievous",
    added: new Date()
  }
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board',messages });
});

router.get("/new",function(req,res,next){
  res.render("message");
});

router.post("/new",function(req,res){
  messages.push({
    text: req.body.messages,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect("/");
})
module.exports = router;
