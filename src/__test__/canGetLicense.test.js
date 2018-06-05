import { canGetLicense } from '../canGetLicense.js';

describe('canGetLicense test suite', () => {
    
    test('Too old for License', () => {
        expect( () => canGetLicense('A', 120)).toThrow();
    })

    test('Too young for License', () => {
        expect( () => canGetLicense('A', -1)).toThrow();
    })

    test('License paramter not a string', () => {
        expect( () => canGetLicense([1, 2, 3], 23) ).toThrow();
    });

    test('age paramter not a number', () => {
        expect( () => canGetLicense('A', 'age') ).toThrow();
    });

    test('Licensetype does not exist', () => {
        expect( () => canGetLicense('Z', 24) ).toThrow();
    });

    test('Valid input: B license 24 years old returns true', () => {
        expect(canGetLicense('B', 24)).toBe(true);
    })

    test('B license 18 years old to return true', () => {
        expect(canGetLicense('B', 18)).toBe(true);
    })

    test('B license 15 years old to return false', () => {
        expect(canGetLicense('B', 15)).toBe(false);
    })

    test('D license 25 years old to return true', () => {
        expect(canGetLicense('D', 24)).toBe(true);
    })

    test('BE license 14 years old to return false', () => {
        expect(canGetLicense('BE', 14)).toBe(false);
    })

});