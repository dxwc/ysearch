let router        = require('express').Router();
const get_comment = require('youtube-comment-api');

router.get('/comments', (req, res) =>
{
    get_comment(req.query.v)
    .then((result) =>
    {
        return res.json(result.comments);
    })
    .catch((err) =>
    {
        console.error(err);
        res.status(500).json([]);
    });
});

module.exports = router;

