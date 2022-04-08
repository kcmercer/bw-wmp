const db = require('../../data/db-config')

function find() {
    return db('users')
}

function findBy(filter) {
    return db('users')
        .where(filter)
}

async function add(newUser) {
   const [user_id] = await db('users').insert(newUser, ['username', 'user_id', 'password', 'role'])
   return user_id
}

module.exports = {
    find,
    findBy,
    add
}