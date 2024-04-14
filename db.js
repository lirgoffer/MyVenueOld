const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'my_venue_db',
    password: 'Lr220520',
    port: 5432, // Default port for PostgreSQL
});

pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error acquiring client', err.stack);
    }
    console.log('Connected to PostgreSQL database');

    // Execute the SQL query to fetch venue data
    client.query('SELECT * FROM public.venues ORDER BY "venue_id " ASC', (err, result) => {
        release(); // Release the client back to the pool
        if (err) {
            return console.error('Error executing query', err.stack);
        }
        // Log the fetched venue data
        console.log('Venue data:', result.rows);
    });
});

module.exports = pool;
