
const axios = require('axios');

async function createOrderSaga() {
    try {
        console.log("Creating order...");
        await axios.post('http://localhost:3001/create-order');

        console.log("Processing payment...");
        await axios.post('http://localhost:3002/process-payment');

        console.log("Starting shipping...");
        await axios.post('http://localhost:3003/start-shipping');

        console.log("Order completed successfully.");
    } catch (error) {
        console.error("Saga failed:", error.message);

        console.log("Starting compensation...");

        await axios.post('http://localhost:3003/cancel-shipping').catch(() => {});
        await axios.post('http://localhost:3002/refund-payment').catch(() => {});
        await axios.post('http://localhost:3001/cancel-order').catch(() => {});

        console.log("Compensation completed.");
    }
}

createOrderSaga();
