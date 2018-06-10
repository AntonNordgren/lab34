import { canGetLicense } from '../canGetLicense.js';

describe('canGetLicense test suite', () => {
    
    test('Too old for License', () => {
        expect( () => canGetLicense('A', 121)).toThrow();
    });

    test('Negative age throws error', () => {
        expect( () => canGetLicense('A', -1)).toThrow();
    });

    test('License paramter not a string', () => {
        expect( () => canGetLicense([1, 2, 3], 23) ).toThrow();
    });

    test('age paramter not a number', () => {
        expect( () => canGetLicense('A', 'age') ).toThrow();
    });

    test('Licensetype does not exist', () => {
        expect( () => canGetLicense('Z', 24) ).toThrow();
    });

    describe('License A', () => {
        test('A license 24 years old to return true', () => {
            expect(canGetLicense('A', 24)).toBe(true);
        })
    
        test('A license 23 years old to return false', () => {
            expect(canGetLicense('A', 23)).toBe(false);
        })

    });

    describe('License B', () => {
        test('B license 18 years old returns true', () => {
            expect(canGetLicense('B', 18)).toBe(true);
        })
    
        test('B license 17 years old to return false', () => {
            expect(canGetLicense('B', 17)).toBe(false);
        })

    });

    describe('License BE', () => {
        test('BE license 18 years old to return true', () => {
            expect(canGetLicense('BE', 18)).toBe(true);
        });

        test('BE license 17 years old to return false', () => {
            expect(canGetLicense('BE', 17)).toBe(false);
        });

    });

    describe('License C', () => {
        test('C license 21 years old to return true', () => {
            expect(canGetLicense('C', 21)).toBe(true);
        });

        test('C license 20 years old to return false', () => {
            expect(canGetLicense('C', 20)).toBe(false);
        });

    });

    describe('License D', () => {
        test('D license 24 years old to return true', () => {
            expect(canGetLicense('D', 24)).toBe(true);
        })

        test('D license 23 years old to return false', () => {
            expect(canGetLicense('D', 23)).toBe(false);
        })
    });

});