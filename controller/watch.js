let router             = require('express').Router();
const ytsr             = require('ytsr');
const fetchCommentPage = require('youtube-comment-api');
const vd               = require('vid_data');
var comma              = require('comma-number')

router.get('/watch', (req, res) =>
{
    if(!req.query.v || req.query.v.trim().length !== 11) res.status(400).send();

    return res.render('watch', { id : req.query.v });
});

module.exports = router;