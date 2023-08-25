const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
    it('returns 200', (done) => {
        request('http://localhost:7865', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});

describe('Cart page', () => {
    it('returns 200 when the cart ID is a number', (done) => {
        request('http://localhost:7865/cart/12', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 12');
            done();
        });
    });
    it('returns 404 when the cart ID is not a number', (done) => {
        request('http://localhost:7865/cart/anything', (error, response, body) => {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });
});

describe('Login Endpoint', () => {
    it('returns login page with 200', (done) => {
        const options = {
            url: 'http://localhost:7865/login',
            method: 'POST',
            json: {
                userName: 'Pelumi'
            }
        };
        request(options, (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Welcome Pelumi');
            done();
        });
    });
});

describe('Available Payments', () => {
    it('returns available payments', (done) => {
        request('http://localhost:7865/available_payments', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
            done();
        });
    });
});
