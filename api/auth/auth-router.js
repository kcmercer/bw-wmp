const router = require('express').Router()
const {
    checkUsernameExists,
    validateBody
} = require('./auth-middleware')
const bcrypt = require('bcryptjs')
const buildToken = require('./auth-token-builder')

const Auth = require('./auth-model')
const { BCRYPT_ROUNDS } = require('../secrets/index')

router.post('/register', validateBody, async (req, res, next) => {
    const { username, password, role } = req.body
    const hash = bcrypt.hashSync(password, BCRYPT_ROUNDS)
        try {
            const addUser = await Auth.add({ username, password: hash, role })
            res.status(201).json(addUser)
        } catch (err) {
            next(err)
        }
})

router.post('/login', validateBody, checkUsernameExists, (req, res, next) => {
    const { password } = req.body
        if (bcrypt.compareSync(password, req.user.password)) {
            const token = buildToken(req.user)
                res.json({
                    message: `Welcome, ${req.user.username}!`,
                    token
                })
            }
})

module.exports = router