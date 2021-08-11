// Array inicial da partida;

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

// função addClass verifica jogador e adiciona Classe
let usuarioAtual = 'player1';

function addClass(par) {
    let child = par.childNodes;
    console.log(child)
    child = [...child];
    for (let i = 5; i >= 0; i--) {
        if (child[i].className === "linha vazio") {
            child[i].classList.remove("vazio");
            child[i].classList.add(usuarioAtual);
            break;
        }
    }
    if (usuarioAtual === "player1") {
        usuarioAtual = "player2";
    } else {
        usuarioAtual = "player1";
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
