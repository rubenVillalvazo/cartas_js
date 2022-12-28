const cardObjectDefinitions = [
    {
        id: 1,
        imagePath: '/assets/card-KingHearts.png'
    },
    {
        id: 2,
        imagePath: '/assets/card-JackClubs.png'
    },
    {
        id: 3,
        imagePath: '/assets/card-QueenDiamonds.png'
    },
    {
        id: 4,
        imagePath: '/assets/card-AceSpades.png'
    }
];

const cardBackImagePath = '/assets/card-back-Blue.png';

const cardContainerElem = document.querySelector('.card-container');

{/*
    <div class="card">
        <div class="card-inner">
            <div class="card-front">
                <img src="./assets/card-JackClubs.png" alt="" class="card-img">
            </div>
            <div class="card-back">
                <img src="./assets/card-back-Blue.png" alt="" class="card-img">
            </div>
        </div>
    </div>
*/}

createCards()

function createCards() {
    cardObjectDefinitions.forEach((cardItem) => {
        createCard(cardItem)
    })
}

function createCard(cardItem) {

    /* ***** Create div elements that make up a card ***** */
    const cardElem = createElement('div');
    const cardInnerElem = createElement('div');
    const cardFrontElem = createElement('div');
    const cardBackElem = createElement('div');

    /* ***** Create front and back image elements for a card ***** */
    const cardFrontImage = createElement('img');
    const cardBackImage = createElement('img');

    /* ***** Add class and id to card elemnt ***** */
    addClassToElement(cardElem, 'card');
    addIdToElement(cardElem, cardItem.id);

    /* ***** Add class to inner card element ***** */
    addClassToElement(cardInnerElem, 'card-inner');

    /* ***** Add class to front card element ***** */
    addClassToElement(cardFrontElem, 'card-front')

    /* ***** Add class to back card element ***** */
    addClassToElement(cardBackElem, 'card-back')

    /* ***** Add src attribute and appropiate value to img elemnt - back of card ***** */
    addSrcToImageElement(cardBackImage, cardBackImagePath)

    /* ***** Add src attribute and appropiate value to img elemnt - front of card ***** */
    addSrcToImageElement(cardFrontImage, cardItem.imagePath)

    /* ***** Assign class to back image element of back of card ***** */
    addClassToElement(cardBackImage, 'card-img');

    /* ***** Assign class to front image element of front of card ***** */
    addClassToElement(cardFrontImage, 'card-img');

    /* ***** Add front image element as child element to front card element ***** */
    addChildElement(cardFrontElem, cardFrontImage)

    /* ***** Add back image element as child element to back card element ***** */
    addChildElement(cardBackElem, cardBackImage)

    /* ***** Add front card element as child element to inner card element ***** */
    addChildElement(cardInnerElem, cardFrontElem)

    /* ***** Add back card element as child element to inner card element */
    addChildElement(cardInnerElem, cardBackElem)

    /* ***** Add inner card element as child element to card element ***** */
    addChildElement(cardElem, cardInnerElem)

    /* ***** Add card element as child element to appropiate grid cell ***** */
    addCardToGridCell(cardElem)
}

function createElement(elemType) {
    return document.createElement(elemType);
}

function addClassToElement(elem, className) {
    elem.classList.add(className);
}

function addIdToElement(elem, id) {
    elem.id = id;
}

function addSrcToImageElement(imgElem, src) {
    imgElem.src = src;
}

function addChildElement(parentElem, childElem) {
    parentElem.appendChild(childElem)
}

function addCardToGridCell(card) {
    const cardPositionClassName = mapCardIdToGridCell(card)
    const cardPosElem = document.querySelector(cardPositionClassName)
    addChildElement(cardPosElem, card)
}

function mapCardIdToGridCell(card) {
    if (card.id == 1) {
        return '.card-pos-a'
    }
    else if (card.id == 2) {
        return '.card-pos-b'
    }
    else if (card.id == 3) {
        return '.card-pos-c'
    }
    else if (card.id == 4) {
        return '.card-pos-d'
    }
}