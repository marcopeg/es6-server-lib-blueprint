
import {expect} from 'chai';
import {square} from '../src/arrow-functions';

describe('arrow-functions', () => {

    it('should square a number', () => {
        expect(square(2)).to.equal(4);
    });

});
