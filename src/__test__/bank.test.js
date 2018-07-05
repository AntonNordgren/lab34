
import { deposit, withdraw, transfer } from '../bank';

describe('deposit test suite', () => {

    test('if account is not an object returns error', () => {
        expect(() => deposit("asd", 150)).toThrow();
    });

    test('if acount.name is not a string', () => {
        expect(() => deposit({ name: undefined, balance: 150 }, 50)).toThrow();
    });

    test('if acount.balance is not a number', () => {
        expect(() => deposit({ name: 'Kalle', balance: "string" }, 50)).toThrow();
    });

    test('if amount is not a number returns error', () => {
        expect(() => deposit({ name: 'Kalle', balance: 150 }, undefined)).toThrow();
    });

    test('if amount is a negative number returns error', () => {
        expect(() => deposit({ name: 'Kalle', balance: 150 }, -50)).toThrow();
    })

    test('Deposit infinity throws', () => {
        expect(() => deposit({ name: 'Kalle', balance: Infinity })).toThrow();
    });

    test('Deposit -infinity throws', () => {
        expect(() => deposit({ name: 'Kalle', balance: -Infinity })).toThrow();
    });

    describe('Valid tests', () => {
        test('Deposit 50', () => {

            let kalle = { name: "Kalle", balance: 100 };
    
            deposit(kalle, 50);
    
            expect(kalle).toEqual({ name: "Kalle", balance: 150 });
        });
    });
});

describe('withdraw test suite', () => {

    test('if account is not an object returns error', () => {
        expect(() => withdraw("asd", 150)).toThrow();
    });

    test('if amount is not a number returns error', () => {
        expect(() => withdraw({ name: 'Kalle', balance: 150 }, undefined)).toThrow();
    });

    test('if trying to send negative amount of money returns error', () => {
        expect(() => withdraw({ name: 'Kalle', balance: 150 }, -20)).toThrow();
    });

    test('if trying to withdraw more money than you have returns error', () => {
        expect(() => withdraw({ name: 'Kalle', balance: 150 }, 155)).toThrow();
    });

    describe('test the function', () => {
        test('withdraw 50', () => {
            let kalle = { name: 'Kalle', balance: 150 };

            withdraw(kalle, 50);

            expect(kalle).toEqual({ name: 'Kalle', balance: 100 });

        });

        test('withdraw all money', () => {
            let kalle = { name: 'Kalle', balance: 150 };

            withdraw(kalle, 150);

            expect(kalle).toEqual({ name: 'Kalle', balance: 0 });
        });
    });
});

describe('transfer test suite', () => {

    test('if accountSender is not an object returns error', () => {
        expect(() => transfer("Kalle", { name: 'Greta', balance: 150 }, 10)).toThrow();
    });

    test('if accountReciever is not an object returns error', () => {
        expect(() => transfer({ name: 'Kalle', balance: 150 }, 'Greta', 10)).toThrow();
    });

    test('if amount is not a number returns error', () => {
        expect(() => transfer({ name: 'Kalle', balance: 150 }, { name: 'Greta', balance: 150 }, "")).toThrow();
    });

    test('if accountSender name and balance is not right type returns error', () => {
        expect(() => transfer({ name: undefined, balance: 150 }, { name: 'Greta', balance: 150 }, 10)).toThrow();
    });

    test('if accountReciever name and balance is not right type returns error', () => {
        expect(() => transfer({ name: 'Kalle', balance: 150 }, { name: 'Greta', balance: "string" }, 10)).toThrow();
    });

    test('if accountSender tries to send money and do not have any returns error', () => {
        expect(() => transfer({ name: 'Kalle', balance: 0 }, { name: 'Greta', balance: 150 }, 10)).toThrow();
    });

    describe('transfer tests', () => {

        test('transfer 50', () => {

            let obj1 = { name: 'Kalle', balance: 100 };
            let obj2 = { name: 'Greta', balance: 150 };

            transfer(obj1, obj2, 50);

            expect(obj1.balance).toEqual(50);
            expect(obj2.balance).toEqual(200);

        });
    });
});