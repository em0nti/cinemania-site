import createMarkup from "./cardset-markup";
const refs = {
    cardSetRef: document.querySelector('.card-set'),
}
export default function renderCards(cards) {
    refs.cardSetRef.insertAdjacentHTML('beforeend', createMarkup(cards));
};