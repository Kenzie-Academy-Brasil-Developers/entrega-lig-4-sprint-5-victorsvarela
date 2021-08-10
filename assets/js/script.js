let gameStructure = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];

// console.log(gameStructure);
// Criar função start game


const startGame = () => {

}

startGame();

// Criar função de renderizar;

const renderGame = () => {
    const container = document.getElementById("gameScreen");
    for (let i = 0; i < gameStructure.length; i++) {
        let column = document.createElement("div");
        column.id = `${i}`; 
        column.classList.add("coluna");
        for (let j = 0; j < gameStructure[i].length; j++) {
            let row = document.createElement("div");
            row.id =  `${i}${j}`;
            row.classList.add("linha");
            column.appendChild(row);
            container.appendChild(column);
        }
    }
}

renderGame();

let atual = undefined;
const selectTower = (evt) => {

    atual = evt.target.closest('section');
    console.log(atual);
}


let towers = document.getElementsByClassName("gameSection");
//adc listeners em todas as colunas
for(let i = 0; i < towers.length; i++) {
    towers[i].addEventListener("click", selectTower);
}

