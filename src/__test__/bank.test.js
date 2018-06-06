
import {deposit, withdraw, transfer} from '../bank';

describe('deposit test suite', () => {

    test('account is not an object returns error', () => {
        expect(deposit("asd", 150)).toThrow();
    });

    test('amount is not a number returns errror', () => {
        expect(deposit({name: 'Kalle', balance : 150}, undefined)).toThrow();
    });

    test('amount is a negative number returns error', () => {
        expect(deposit({name: 'Kalle', balance : -150})).toThrow();
    })

});

describe('withdraw test suite', () => {

    test('account is not an object returns error', () => {
        expect(withdraw("asd", 150)).toThrow();
    });

    test('amount is not a number returns errror', () => {
        expect(withdraw({name: 'Kalle', balance : 150}, undefined)).toThrow();
    });

    test('Trying to withdraw a negative amount', () => {
        expect(withdraw({name: 'Kalle', balance : 150}, -20)).toThrow();
    });

    test('Trying to withdraw more than your total balance', () => {
        expect(withdraw({name: 'Kalle', balance : 150}, 155)).toThrow();
    });

});

describe('transfer test suite', () => {

    test('accountSender is not an object', () => {
        expect(transfer("Kalle", {name: 'Greta', balance : 150}, 10)).toThrow();
    });

    test('accountReciever is not an object', () => {
        expect(transfer({name: 'Kalle', balance : 150},'Greta', 10)).toThrow();
    });

    test('amount is not a number', () => {
        expect(transfer({name: 'Kalle', balance : 150},{name: 'Greta', balance : 150}, "string")).toThrow();
    });

    test('accountSender name and balance is right type', () => {
        expect(transfer({name: undefined, balance : 150},{name: 'Greta', balance : 150}, 10)).toThrow();
    });

    test('accountReciever name and balance is right type', () => {
        expect(transfer({name: 'Kalle', balance : 150},{name: 'Greta', balance : "string"}, 10)).toThrow();
    });

    test('accountSender can not send money if balance is 0', () => {
        expect(transfer({name: 'Kalle', balance : 0},{name: 'Greta', balance : 150}, 10)).toThrow();
    });

});