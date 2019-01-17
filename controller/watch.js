let router = require('express').Router();

router.get('/watch', (req, res) =>
{
    if(!req.query.v || req.query.v.trim().length !== 11) return res.render('result');
    return res.render('watch', { id : req.query.v });
});

module.exports = router;