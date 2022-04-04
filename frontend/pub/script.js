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

function pageContent(activities) {
    let myStr = ""

    for(let activity of activities) {
        if (activity.participants > 1) {
            
            myStr = myStr.concat(
                `
                <div>
                    <h2>${activity.activity}</h2>
                    <p>${activity.participants}</p>
                </div>
        `
            )
        }
        
    }
    return myStr
}

// fetch data from json file
async function fetchActivity() {
    const activityData = await fetch(`http://127.0.0.1:9000/pub/data.json`);

    return activityData.json();
}

//load event function
async function loadEvent() {
    const activities = await fetchActivity();

    const rootElement = document.getElementById("root")
    rootElement.innerHTML = pageContent(activities.cards);
}

window.addEventListener("load", loadEvent)