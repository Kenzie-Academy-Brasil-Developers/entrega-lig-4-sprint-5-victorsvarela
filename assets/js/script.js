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


// Função movePills
const movePills = () => {
    let listColumns = document.getElementsByClassName("coluna");
    // listColumns = [...listColumns];
    // console.log(listColumns)
    let currentColumn = "";

    listColumns[0].addEventListener("click", (evt) => {
        currentColumn = evt.currentTarget;
        
        let rowCurrent = currentColumn.lastElementChild.id;
        let positionActual = document.getElementById(rowCurrent)
        if (currentColumn.lastElementChild.className === "linha vazio") {
            positionActual.classList.remove("vazio");
            positionActual.classList.add("player1");
            // console.log("verdade")
            console.log(currentColumn)
        }
    })
    listColumns[1].addEventListener("click", (evt) => {
        currentColumn = evt.currentTarget;
        console.log(currentColumn)
        let rowCurrent = currentColumn.lastElementChild.id;
        let positionActual = document.getElementById(rowCurrent)
        if (currentColumn.lastElementChild.className === "linha vazio") {
            positionActual.classList.remove("vazio");
            positionActual.classList.add("player2");
            // console.log("verdade")
            // console.log(positionActual)
        }
    })
    listColumns[2].addEventListener("click", (evt) => {
        currentColumn = evt.currentTarget;
        console.log(currentColumn)
        let rowCurrent = currentColumn.lastElementChild.id;
        let positionActual = document.getElementById(rowCurrent)
        if (currentColumn.lastElementChild.className === "linha vazio") {
            positionActual.classList.remove("vazio");
            positionActual.classList.add("player1");
            // console.log("verdade")
            // console.log(positionActual)
        }
    })
    listColumns[3].addEventListener("click", (evt) => {
        currentColumn = evt.currentTarget;
        console.log(currentColumn)
        let rowCurrent = currentColumn.lastElementChild.id;
        let positionActual = document.getElementById(rowCurrent)
        if (currentColumn.lastElementChild.className === "linha vazio") {
            positionActual.classList.remove("vazio");
            positionActual.classList.add("player2");
            // console.log("verdade")
            // console.log(positionActual)
        }
    })
    listColumns[4].addEventListener("click", (evt) => {
        currentColumn = evt.currentTarget;
        console.log(currentColumn)
        let rowCurrent = currentColumn.lastElementChild.id;
        let positionActual = document.getElementById(rowCurrent)
        if (currentColumn.lastElementChild.className === "linha vazio") {
            positionActual.classList.remove("vazio");
            positionActual.classList.add("player2");
            // console.log("verdade")
            // console.log(positionActual)
        }
    })
    listColumns[5].addEventListener("click", (evt) => {
        currentColumn = evt.currentTarget;
        console.log(currentColumn)
        let rowCurrent = currentColumn.lastElementChild.id;
        let positionActual = document.getElementById(rowCurrent)
        if (currentColumn.lastElementChild.className === "linha vazio") {
            positionActual.classList.remove("vazio");
            positionActual.classList.add("player1");
            // console.log("verdade")
            // console.log(positionActual)
        }
    })
    listColumns[6].addEventListener("click", (evt) => {
        currentColumn = evt.currentTarget;
        console.log(currentColumn)
        let rowCurrent = currentColumn.lastElementChild.id;
        let positionActual = document.getElementById(rowCurrent)
        if (currentColumn.lastElementChild.className === "linha vazio") {
            positionActual.classList.remove("vazio");
            positionActual.classList.add("player2");
            // console.log("verdade")
            // console.log(positionActual)
        }
    })
}



// Criar função start game
const startGame = () => {
    renderGame();
    movePills();
}

startGame();