const router = require('express').Router()
const {
    restricted,
    validateClassId,
    checkRole
} = require('./classes-middleware')
const Classes = require('./classes-model')

router.get('/', async (req, res, next) => {
    try {
        const getClasses = await Classes.findClass()
        res.json(getClasses)
    } catch (err) {
        next(err)
    }
})

router.post('/', restricted, checkRole, async (req, res, next) => {
    try {
        const createClass = await Classes.add(req.body)
        res.status(201).json(createClass)
    } catch (err) {
        next(err)
    }
})

router.put('/:class_id', restricted, validateClassId, checkRole, async (req, res, next) => {
    const { class_id } = req.params
        try {
            const updateClass = await Classes.update(class_id, req.body)
            res.json(updateClass)
        } catch (err) {
            next(err)
        }
})

router.delete('/:class_id', restricted, validateClassId, checkRole, async (req, res, next) => {
    const { class_id } = req.params
        try {
            const removeClass = await Classes.remove(class_id)
            res.json(removeClass)
        } catch (err) {
            next(err)
        }
})

module.exports = router