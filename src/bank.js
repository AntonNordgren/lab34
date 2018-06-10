
export const deposit = (account, amount) => {

    if( typeof account !== 'object' || typeof amount !== 'number' || amount < 0 || typeof account.name !== 'string' ||
    typeof account.balance !== 'number' || account.balance === Infinity || account.balance === -Infinity) {
        throw new Error('Invalid parameters');
    } 
    else {
        account.balance += amount;
    }
}

export const withdraw = (account, amount) => {

    if( typeof account !== 'object' || typeof amount !== 'number' || amount < 0 || account.balance < amount)
        throw new Error('Error');
    else
        account.balance -= amount;

}

export const transfer = (accountSender, accountReceiver, amount) => {

    if( typeof accountSender !== 'object' ||
        typeof accountReceiver !== 'object' ||
        typeof amount !== 'number' ||
        typeof accountSender.name !== 'string' ||
        typeof accountSender.balance !== 'number' ||
        typeof accountReceiver.name !== 'string' ||
        typeof accountReceiver.balance !== 'number' ||
        accountSender.balance < amount) {
            throw new Error('Error');
        }
        else {
            accountSender.balance -= amount;
            accountReceiver.balance += amount;
        }


}

