let router = require('express').Router();

router.get('/watch', (req, res) =>
{
    if(!req.query.v || req.query.v.trim().length !== 11) res.status(400).send();
    return res.render('watch', { id : req.query.v });
});

module.exports = router;