
import { expect } from 'chai';
import { Person } from '../src/classes';

describe('Classes', () => {

    it('should import class Person', () => {
        expect(Person).to.be.a('function');
    });

    describe('Person', () => {

        var p;

        beforeEach(() => {
            p = new Person('marco', 22);
        });

        it('should instanciate a person', () => {
            expect(p.name).to.equal('marco');
            expect(p.age).to.equal(22);
        });

        it('should increment age with birthday', () => {
            p.birthday();
            expect(p.age).to.equal(23);
        });

        it('should greed for birthday', () => {
            expect(p.birthday()).to.equal('Happy birthday marco, you are 23 years old');
        });

    });

});
