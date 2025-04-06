
const express = require('express');
const app = express();
app.use(express.json());

app.post('/start-shipping', (req, res) => {
    console.log('Shipping Service called');
    res.status(200).json({ message: 'Shipping Service success' });
});

app.post('/cancel-shipping', (req, res) => {
    console.log('Shipping Service compensation triggered');
    res.status(200).json({ message: 'Shipping Service compensation success' });
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log('Shipping Service running on port ' + PORT);
});
