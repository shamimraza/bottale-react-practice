const getStoreCard = () => {
    const storeCardString = localStorage.getItem('cards')
    if (storeCardString) {
        return JSON.parse(storeCardString)
    }
    return [];
}

const saveCardToLocalStorage = (cards) => {
    console.log(cards);
    const cardStringified = JSON.stringify(cards);
    localStorage.setItem('cards', cardStringified);
}

const addToLocalStorage = id => {
    const card = getStoreCard();
    card.push(id);
    // save to local storage
    saveCardToLocalStorage(card)
}


const removeFromLocalStorage = id => {
    const cards = getStoreCard();
    // removing every id
    const remaining = cards.filter(idx => idx !== id)
    saveCardToLocalStorage(remaining)

}
export { addToLocalStorage, getStoreCard, removeFromLocalStorage }

