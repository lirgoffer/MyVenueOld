const express = require('express');
const pool = require('./db');


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
// Add your routes here
// In your server.js or routes file

app.get('/api/venues', async (req, res) => {
    try {
        // Fetch venue data from the database
        const result = await pool.query('SELECT * FROM public.venues');
        // Extract the rows from the result object
        const venues = result.rows;
        // Send the venue data as JSON response
        res.json(venues);
    } catch (error) {
        console.error('Error fetching venue data:', error);
        res.status(500).json({ error: 'Server error' });
    }
});





// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
