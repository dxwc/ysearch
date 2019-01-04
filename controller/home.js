let router = require('express').Router();
const ytsr = require('ytsr');

router.post('/', (req, res) =>
{
    if(!req.body.terms.trim().length) res.status(400).send();

    ytsr(req.body.terms, { limit : 20 })
    .then((result) =>
    {
        return res.json(result.items);

        // .forEach((val) =>
        // {
        //     if(val.type === 'video')
        //     {
        //         console.log(val.title);
        //         console.log(val.link);
        //         console.log(val.author.name);
        //         console.log(val.author.ref);
        //         console.log(val.thumbnail);
        //         console.log(val.description);
        //         console.log(val.views);
        //         console.log(val.duration);
        //         console.log(val.uploaded_at);
        //     }
        // });
    })
    .catch((err) =>
    {
        throw err;
    });
});

router.get('/', (req, res) =>
{
    res.render('index');
});

module.exports = router;