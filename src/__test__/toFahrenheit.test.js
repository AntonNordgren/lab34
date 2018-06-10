import { toFahrenheit } from '../toFahrenheit';

describe('toFahrenheit test suite', () => {

    // get the right Fahrenheit
    test('0c = 32f', () => {
        expect(toFahrenheit(0)).toBe(32);
    })
    test('23c = 73.4f', () => {
        expect(toFahrenheit(23)).toBe(73.4);
    })
    test('27.4c = 81.32f', () => {
        expect(toFahrenheit(27.4)).toBe(81.32);
    })

    // invalid inputs
    test('Send in as null returns NaN', () => {
        expect(isNaN(toFahrenheit(null))).toBe(true);
    });

    test('Send in as Infinity returns NaN', () => {
        expect(isNaN(toFahrenheit(Infinity))).toBe(true);
    });

    test('Send in as -Infinity returns NaN', () => {
        expect(isNaN(toFahrenheit(-Infinity))).toBe(true);
    });

    test('Send in as undefined returns NaN', () => {
        expect(isNaN(toFahrenheit(undefined))).toBe(true);
    });

    test('Send in Array returns NaN', () => {
        expect(isNaN(toFahrenheit([1,2,3]))).toBe(true);
    });

    test('Send in Obejct returns NaN', () => {
        expect(isNaN(toFahrenheit({test: "test"}))).toBe(true);
    });

    // Invalid Degrees
    test('send in -273.16 (too cold) returns NaN', () => {
        expect(isNaN(toFahrenheit(-273.16))).toBe(true);
    });

    // string
    test('send in number as string', () => {
        expect(toFahrenheit("20")).toBe(68);
    });

    test('send in invalid string returns NaN', () => {
        expect(isNaN(toFahrenheit("Hi"))).toBe(true);
    });

});