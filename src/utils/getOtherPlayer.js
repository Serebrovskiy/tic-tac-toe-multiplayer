export const getOtherPlayer = currentPlayer => {
    console.log('change player')
    if (currentPlayer === undefined) {
        return;
    }
    return currentPlayer === 'X' ? 'O' : 'X'
}