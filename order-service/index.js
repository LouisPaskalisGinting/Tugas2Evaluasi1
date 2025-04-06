
const express = require('express');
const app = express();
app.use(express.json());

app.post('/create-order', (req, res) => {
    console.log('Order Service called');
    res.status(200).json({ message: 'Order Service success' });
});

app.post('/cancel-order', (req, res) => {
    console.log('Order Service compensation triggered');
    res.status(200).json({ message: 'Order Service compensation success' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log('Order Service running on port ' + PORT);
});
