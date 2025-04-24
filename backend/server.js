const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3000;

app.use(express.json());

app.use(cors());

app.post('/api/participants', (req, res) => {
    const participantData = req.body;
    console.log('Received participant data:', participantData);

    res.status(200).json({ message: 'Participant data received successfully' });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});