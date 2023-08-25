const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

app.get('/cart/[0-9]+', (req, res) => {
    const cartId = req.url.split('/')[2];
    res.send(`Payment methods for cart ${cartId}`);
});

app.listen(7865, () => {
    console.log('API available on localhost port 7865');
});
