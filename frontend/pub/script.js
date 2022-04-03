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

function pageContent(tasks) {
    let myStr = ""

    for(let task of tasks) {
        myStr = myStr.concat(
            `
            <div>
                <h1>${task.activity}</h1>
                <p>${task.type}</p>
                <p>accessibility – ${task.accessibility}</p>
            </div>
    `
        )
    }
    return myStr
}

async function fetchTask() {
    const taskData = await fetch(`http://127.0.0.1:9000/pub/data.json`);

    return taskData.json();
}

async function loadEvent() {
    const tasks = await fetchTask();

    const rootElement = document.getElementById("root")
    rootElement.innerHTML = pageContent(tasks.cards);
}

window.addEventListener("load", loadEvent)