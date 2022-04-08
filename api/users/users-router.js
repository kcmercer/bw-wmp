const router = require('express').Router()
const Users = require('../auth/auth-model')

router.get('/', async (req, res, next) => {
    try {
        const getUsers = await Users.find()
        res.json(getUsers)
    } catch (err) {
        next(err)
    }
})

module.exports = router