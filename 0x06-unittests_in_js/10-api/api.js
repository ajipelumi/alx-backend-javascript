const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

app.get('/cart/[0-9]+', (req, res) => {
    const cartId = req.url.split('/')[2];
    res.send(`Payment methods for cart ${cartId}`);
});

app.get('/available_payments', (req, res) => {
    const payments = {
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    };
    res.send(payments);
});

app.post('/login', (req, res) => {
    const username = req.body.userName;
    res.send(`Welcome ${username}`);
});

app.listen(7865, () => {
    console.log('API available on localhost port 7865');
});
