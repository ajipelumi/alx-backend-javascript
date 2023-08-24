const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    describe('type SUM', () => {
        it('should return 4 when adding 1 and 3', () => {
            expect(calculateNumber('SUM', 1, 3)).to.equal(4);
        });
        it('should return 5 when adding 1 and 3.7', () => {
            expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
        });
        it('should return 5 when adding 1.2 and 3.7', () => {
            expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
        });
        it('should return 6 when adding 1.5 and 3.7', () => {
            expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
        });
        it('should return 0 when adding 0.1 and 0.3', () => {
            expect(calculateNumber('SUM', 0.1, 0.3)).to.equal(0);
        });
        it('should return -5 when adding -1.2 and -3.7', () => {
            expect(calculateNumber('SUM', -1.2, -3.7)).to.equal(-5);
        });
        it('should return 2 when adding -1 and 3', () => {
            expect(calculateNumber('SUM', -1, 3)).to.equal(2);
        });
    });
    describe('type SUBTRACT', () => {
        it('should return 2 when subtracting 1 from 3', () => {
            expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
        });
        it('should return 3 when subtracting 1.2 from 3.7', () => {
            expect(calculateNumber('SUBTRACT', 3.7, 1.2)).to.equal(3);
        });
        it('should return 0 when subtracting 0.1 from 0.3', () => {
            expect(calculateNumber('SUBTRACT', 0.3, 0.1)).to.equal(0);
        });
        it('should return -2 when subtracting -1 from -3', () => {
            expect(calculateNumber('SUBTRACT', -3, -1)).to.equal(-2);
        });
    });
    describe('type DIVIDE', () => {
        it('should return 5 when dividing 10 by 2', () => {
            expect(calculateNumber('DIVIDE', 10, 2)).to.equal(5);
        });
        it('should return 0.2 when dividing 1 by 5', () => {
            expect(calculateNumber('DIVIDE', 1, 5)).to.equal(0.2);
        });
        it('should return Error when dividing by 0', () => {
            expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
        });
    });
});
