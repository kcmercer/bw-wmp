const Auth = require('./auth-model')

const checkUsernameExists = async (req, res, next) => {
    const { username } = req.body
        try {
            const [user] = await Auth.findBy({ username })
                if (!user) {
                    next({
                        status: 401,
                        message: 'Invalid credentials'
                    })
                } else {
                    req.user = user
                    next()
                }
            } catch (err) {
                next(err)
            }
}

const validateBody = (req, res, next) => {
    const { username, password, role } = req.body
    if (!username || !password || !role) {
        next({
            status: 400,
            message: 'Missing required fields'
        })
    } else {
        next()
    }
}

module.exports = {
    checkUsernameExists,
    validateBody,
}