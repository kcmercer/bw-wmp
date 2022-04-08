exports.seed = function(knex) {
    return knex('users').insert([
        { username: 'admin', password: '1234', role: 'admin' },
        { username: 'instructor', password: '1234', role: 'instructor' },
        { username: 'user', password: '1234', role: 'user' }
    ])
}