const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/updateProfile', (req, res) => {
    const { username, role } = req.body;

    // Vulnerability: Directly embedding user input into JSON response
    const jsonResponse = `{"message": "User ${username} updated", "role": "${role}"}`;

    res.setHeader('Content-Type', 'application/json');
    res.send(jsonResponse);  // Unsafe: User input is not sanitized
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
