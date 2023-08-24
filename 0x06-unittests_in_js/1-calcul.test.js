const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    describe('type SUM', () => {
        it('should return 4 when adding 1 and 3', () => {
            assert.strictEqual(calculateNumber(1, 3, 'SUM'), 4);
        });
        it('should return 5 when adding 1 and 3.7', () => {
            assert.strictEqual(calculateNumber(1, 3.7, 'SUM'), 5);
        });
        it('should return 5 when adding 1.2 and 3.7', () => {
            assert.strictEqual(calculateNumber(1.2, 3.7, 'SUM'), 5);
        });
        it('should return 6 when adding 1.5 and 3.7', () => {
            assert.strictEqual(calculateNumber(1.5, 3.7, 'SUM'), 6);
        });
        it('should return 0 when adding 0.1 and 0.3', () => {
            assert.strictEqual(calculateNumber(0.1, 0.3, 'SUM'), 0);
        });
        it('should return -5 when adding -1.2 and -3.7', () => {
            assert.strictEqual(calculateNumber(-1.2, -3.7, 'SUM'), -5);
        });
        it('should return 2 when adding -1 and 3', () => {
            assert.strictEqual(calculateNumber(-1, 3, 'SUM'), 2);
        });
    });
    describe('type SUBTRACT', () => {
        it('should return 2 when subtracting 1 from 3', () => {
            assert.strictEqual(calculateNumber(3, 1, 'SUBTRACT'), 2);
        });
        it('should return 3 when subtracting 1.2 from 3.7', () => {
            assert.strictEqual(calculateNumber(3.7, 1.2, 'SUBTRACT'), 3);
        });
        it('should return 0 when subtracting 0.1 from 0.3', () => {
            assert.strictEqual(calculateNumber(0.3, 0.1, 'SUBTRACT'), 0);
        });
        it('should return -2 when subtracting -1 from -3', () => {
            assert.strictEqual(calculateNumber(-3, -1, 'SUBTRACT'), -2);
        });
    });
    describe('type DIVIDE', () => {
        it('should return 5 when dividing 10 by 2', () => {
            assert.strictEqual(calculateNumber(10, 2, 'DIVIDE'), 5);
        });
        it('should return 0.2 when dividing 1 by 5', () => {
            assert.strictEqual(calculateNumber(1, 5, 'DIVIDE'), 0.2);
        });
        it('should return Error when dividing by 0', () => {
            assert.strictEqual(calculateNumber(1, 0, 'DIVIDE'), 'Error');
        });
    });
});
