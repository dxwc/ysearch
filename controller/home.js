let router = require('express').Router();
const ytsr = require('ytsr');
const vd   = require('vid_data');
var comma  = require('comma-number')

router.post('/', (req, res) =>
{
    if(!req.body.terms.trim().length) return res.render('result');

    ytsr(req.body.terms, { limit : 20 })
    .then((result) =>
    {
        result.items.forEach((video) =>
        {
            if(video.type === 'video') video.id = vd.get_video_id(video.link);
            video.views = comma(video.views);
        });

        return res.render
        ('result', { result : result.items, terms : req.body.terms });
    })
    .catch((err) =>
    {
        console.error(err);
        return res.render('result');
    });
});

router.get('/', (req, res) =>
{
    res.render('result');
});

module.exports = router;