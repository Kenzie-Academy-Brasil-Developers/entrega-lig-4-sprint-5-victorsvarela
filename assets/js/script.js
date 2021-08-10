let gameStructure = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];

// Criar função de renderizar;

const renderGame = () => {
    const container = document.getElementById("gameScreen");
    for (let i = 0; i < gameStructure.length; i++) {
        let column = document.createElement("div");
        column.id = `${i}`;
        column.classList.add("coluna");
        for (let j = 0; j < gameStructure[i].length; j++) {
            let row = document.createElement("div");
            row.id = `${i}${j}`;
            row.classList.add("linha", "vazio");
            column.appendChild(row);
            container.appendChild(column);
        }
    }

}

function addClass(par) {
    let rowCurrent = par.lastElementChild.id;
        let positionActual = document.getElementById(rowCurrent)
        let idColumn = document.getElementById('0');
        console.log(idColumn);
        let id = Number(par.lastElementChild.id);
        if (par.lastElementChild.className === "linha vazio") {
            positionActual.classList.remove("vazio");
            positionActual.classList.add("player1");
            // console.log("verdade")
            console.log(Number(par.lastElementChild.id))
        }
}


// Função movePills
const movePills = () => {
    let listColumns = document.getElementsByClassName("coluna");
    listColumns = [...listColumns];
    // console.log(listColumns)
    let currentColumn = "";

    listColumns[0].addEventListener("click", (evt) => {
        currentColumn = evt.currentTarget;
        addClass(currentColumn)
    })
    listColumns[1].addEventListener("click", (evt) => {
        currentColumn = evt.currentTarget;
        addClass(currentColumn)
    })
    listColumns[2].addEventListener("click", (evt) => {
        currentColumn = evt.currentTarget;
        addClass(currentColumn)
    })
    listColumns[3].addEventListener("click", (evt) => {
        currentColumn = evt.currentTarget;
        addClass(currentColumn)
    })
    listColumns[4].addEventListener("click", (evt) => {
        currentColumn = evt.currentTarget;
        addClass(currentColumn)
    })
    listColumns[5].addEventListener("click", (evt) => {
        currentColumn = evt.currentTarget;
        addClass(currentColumn)
    })
    listColumns[6].addEventListener("click", (evt) => {
        currentColumn = evt.currentTarget;
        addClass(currentColumn)
    })
}



// Criar função start game
const startGame = () => {
    renderGame();
    movePills();
}

startGame();
