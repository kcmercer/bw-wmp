const db = require('../../data/db-config')

function findClass() {
    return db('classes')
}

function findBy(filter) {
    return db('classes').where(filter).first()
}

function findById(id) {
    return db('classes').where('class_id', id).first()
}

async function add(newClass) {
    const [class_id] = await db('classes').insert(newClass, ['class_id', 'class_name', 'class_type', 'start_time', 'class_duration', 'intensity_level', 'location', 'registered_number', 'registered_max'])
    return class_id
}

async function update(id, updateClass) {
    await db('classes')
        .where('class_id', id)
        .update(updateClass)
    return findById(id)
}

function remove(id) {
    return db('classes').where('class_id', id).first().del()
}

module.exports = {
    findClass,
    findBy,
    findById,
    add,
    update,
    remove
}