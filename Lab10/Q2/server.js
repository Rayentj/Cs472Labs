const express = require('express');

const app = express();
const port = 3000;

// Middleware for parsing JSON and urlEncoded body data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Function to handle various math operations
function handleOperation(req, res, operation) {
    const num1 = parseInt(req.query.a || req.params.a || req.body.a);
    const num2 = parseInt(req.query.b || req.params.b || req.body.b);

    // Check if input numbers are valid
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Invalid or missing numbers" });
    }

    let result;

    // Switch statement to handle various operations
    switch (operation) {
        case 'addition':
            result = num1 + num2;
            break;
        case 'subtraction':
            result = num1 - num2;
            break;
        case 'multiplication':
            result = num1 * num2;
            break;
        case 'division':
            result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
            break;
        case 'modulus':
            result = num2 !== 0 ? num1 % num2 : 'Cannot divide by zero';
            break;
        default:
            return res.status(400).json({ error: 'Invalid operation' });
    }

    // Return result as JSON
    res.json({ result });
}

// Generate routes for all operations
['addition', 'subtraction', 'multiplication', 'division', 'modulus'].forEach((operation) => {
    // GET route for query and path parameters
    app.get(`/${operation}/:a?/:b?`, (req, res) => handleOperation(req, res, operation));

    // POST route for body data (JSON or urlencoded)
    app.post(`/${operation}`, (req, res) => handleOperation(req, res, operation));
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
