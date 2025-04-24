const express = require('express');
const app = express();
const port = 3000; // You can choose a different port if you like

// Middleware to parse JSON request bodies
app.use(express.json());

// POST endpoint to receive participant data
app.post('/api/participants', (req, res) => {
    const participantData = req.body;
    console.log('Received participant data:', participantData);

    // For now, we'll just send a simple success response back to the client
    res.status(200).json({ message: 'Participant data received successfully' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});