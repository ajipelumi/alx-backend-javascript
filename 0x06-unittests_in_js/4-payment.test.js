const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    it('should use Utils.calculateNumber for math', () => {
        // Create a spy for the console.log
        const consoleSpy = sinon.spy(console, 'log');
        // Create a stub for the function calculateNumber in the module Utils
        const stubUtils = sinon.stub(Utils, 'calculateNumber');
        // Stub the function and return 10
        stubUtils.returns(10);
        // Call the function
        sendPaymentRequestToApi(100, 20);
        // Check if the stub was called with the correct parameters
        expect(stubUtils.calledWith('SUM', 100, 20)).to.be.true;
        // Check if the console.log is logging the correct message
        expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
        // Restore the console so it is not spied anymore
        consoleSpy.restore();
        // Restore the stub so it is not stubbed anymore
        stubUtils.restore();
    });
});
