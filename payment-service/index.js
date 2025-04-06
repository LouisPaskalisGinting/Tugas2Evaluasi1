
const express = require('express');
const app = express();
app.use(express.json());

app.post('/process-payment', (req, res) => {
    console.log('Payment Service called');
    res.status(200).json({ message: 'Payment Service success' });
});

app.post('/refund-payment', (req, res) => {
    console.log('Payment Service compensation triggered');
    res.status(200).json({ message: 'Payment Service compensation success' });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log('Payment Service running on port ' + PORT);
});
