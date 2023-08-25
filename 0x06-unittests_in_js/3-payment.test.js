const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    it('should use Utils.calculateNumber for math', () => {
        // Create a spy for the function calculateNumber in the module Utils
        const spy = sinon.spy(Utils, 'calculateNumber');
        // Call the function sendPaymentRequestToApi
        sendPaymentRequestToApi(100, 20);
        // Check if the spy was called with the right arguments
        expect(spy.calledWith('SUM', 100, 20)).to.be.true;
        // Restore the function so it is not spied anymore
        spy.restore();
    });
});
