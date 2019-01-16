let router = require('express').Router();
var vid    = require('youtube-info');
var comma  = require('comma-number')

router.get('/vid_info', (req, res) =>
{
    vid(req.query.id)
    .then((info) =>
    {
        info.views = comma(info.views);
        info.likeCount = comma(info.likeCount);
        info.dislikeCount = comma(info.dislikeCount);
        return res.json(info)
    })
    .catch((err) =>
    {
        console.error(err);
        return res.status(500).json([]);
    });
});

module.exports = router;