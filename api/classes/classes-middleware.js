const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../secrets/index')
const Classes = require('../classes/classes-model')

const restricted = (req, res, next) => {
    const token = req.headers.authorization
    if (token) {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                next({
                    status: 401,
                    message: 'token invalid'
                })
            } else {
                req.decodedJwt = decoded
                next()
            }
        })
    } else {
        next({
            status: 401,
            message: 'token required'
        })
    }
};

const validateClassId = async (req, res, next) => {
    const { class_id } = req.params
        try {
            const cId = await Classes.findById(class_id)
                if (cId) {
                    req.class = cId
                    next()
                } else {
                    next({
                        status: 404,
                        message: 'Class not found'
                    })
                }
            } catch (err) {
                next(err)
            }
}

const checkRole = (req, res, next) => {
    if (req.decodedJwt.role === 'instructor') {
        next()
    } else {
        next({
            status: 401,
            message: 'Only instructors are able to access this'
        })
    }
}

module.exports = {
    restricted,
    validateClassId,
    checkRole
}