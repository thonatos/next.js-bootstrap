const router = require('express').Router()

router.get('/:hash', function (req, res, next) {       
    req.counter = (req.counter || 0) + 1    
    next()
})

module.exports = router