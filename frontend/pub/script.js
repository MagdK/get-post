/* function pageContent(cards) {
    // from this to that
    const cardsHTML = cards.map((card) => {
        return `
        <h1>${card.title}</h1>
        <p>${card.sub}</p>
        <p>${card.text}</p>
    `
    })
    return cardsHTML.join("")
}; */

function pageContent(beers) {
    let myStr = ""

    for(let beer of beers) {
        myStr = myStr.concat(
            `
        <h1>${beer.title}</h1>
        <p>${beer.sub}</p>
        <p>${beer.text}</p>
    `
        )
    }
    return myStr
}

async function fetchBeer() {
    const beerData = await fetch(`http://127.0.0.1:9000/pub/data.json`);

    return beerData.json();
}

async function loadEvent() {
    const beers = await fetchBeer();

    const rootElement = document.getElementById("root")
    rootElement.innerHTML = pageContent(beers.cards);
}

window.addEventListener("load", loadEvent)