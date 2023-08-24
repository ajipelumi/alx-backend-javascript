const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    describe('type SUM', () => {
        it('should return 4 when adding 1 and 3', () => {
            assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
        });
        it('should return 5 when adding 1 and 3.7', () => {
            assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
        });
        it('should return 5 when adding 1.2 and 3.7', () => {
            assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
        });
        it('should return 6 when adding 1.5 and 3.7', () => {
            assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
        });
        it('should return 0 when adding 0.1 and 0.3', () => {
            assert.strictEqual(calculateNumber('SUM', 0.1, 0.3), 0);
        });
        it('should return -5 when adding -1.2 and -3.7', () => {
            assert.strictEqual(calculateNumber('SUM', -1.2, -3.7), -5);
        });
        it('should return 2 when adding -1 and 3', () => {
            assert.strictEqual(calculateNumber('SUM', -1, 3), 2);
        });
    });
    describe('type SUBTRACT', () => {
        it('should return 2 when subtracting 1 from 3', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 3, 1), 2);
        });
        it('should return 3 when subtracting 1.2 from 3.7', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.2), 3);
        });
        it('should return 0 when subtracting 0.1 from 0.3', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 0.3, 0.1), 0);
        });
        it('should return -2 when subtracting -1 from -3', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', -3, -1), -2);
        });
    });
    describe('type DIVIDE', () => {
        it('should return 5 when dividing 10 by 2', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 10, 2), 5);
        });
        it('should return 0.2 when dividing 1 by 5', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1, 5), 0.2);
        });
        it('should return Error when dividing by 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
        });
    });
});
