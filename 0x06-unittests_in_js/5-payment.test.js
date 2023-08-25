const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

let consoleSpy;

describe('sendPaymentRequestToApi', () => {
    beforeEach(() => {
        // Create a spy for the console.log before each test
        consoleSpy = sinon.spy(console, 'log');
    });
    afterEach(() => {
        // Restore the console.log after each test
        consoleSpy.restore();
    });
    it('should call sendPaymentRequestToAPI with 100, and 20', () => {
        sendPaymentRequestToApi(100, 20);
        expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
        expect(consoleSpy.calledOnce).to.be.true;
    });
    it('should call sendPaymentRequestToAPI with 10, and 10', () => {
        sendPaymentRequestToApi(10, 10);
        expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
        expect(consoleSpy.calledOnce).to.be.true;
    });
});
