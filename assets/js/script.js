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
            row.id = `c${i}l${j}`;
            row.classList.add("linha", "vazio");
            column.appendChild(row);
            container.appendChild(column);
        }
    }

}

let currentPlayer = 'player1';
let columnPlayer = undefined;
let rowPlayer = undefined;

const updateArray = (a, b) => {
    let n = 0;
    if(currentPlayer === 'player1') {
        n = 1;
    } else {
        n = 2;
    }

    a = Number(a);
    b = Number(b);
    
    for(let i = 0; i < gameStructure.length; i++) {
        for(let j = 0; j < gameStructure[i].length; j++) {
            if(i === a && j === b) {
                gameStructure[i].splice(j, 1, n);
            }
        }
    }
    
    console.log(gameStructure);
}

// Função de vitoria vertical
const victoryVertical = () => {
    // Se procurar além do length da array dá erro
    const edgeX = gameStructure[0].length - 3;
    const edgeY = gameStructure.length - 3;

    // Vertical
    // itera sobre cada coluna
    for(let y = 0; y < gameStructure.length; y++){

        // itera sobre cada div da coluna
        for(let x = 0; x < edgeX; x++) {
            let cell = gameStructure[y][x];
            
            // Checa se a célula esta vazia (se o jogador não fez nenhuma jogada nessa celula)
            if(cell !== 0) {
                
                // Checa se o numero da celula atual e igual os proximos 3 numeros
                if(cell === gameStructure[y][x+1] && cell === gameStructure[y][x+2] && cell === gameStructure[y][x+3]) {
                    console.log("4 in a row vertical found at " + (x+1) + ":" + (y+1));
                }
            }
        }
    }
}
// Função de vitoria horizontal
const victoryHorizontal = () => {
    const edgeX = gameStructure[0].length - 3;
    const edgeY = gameStructure.length - 3;
    // Horizontal
    // itera sobre cada coluna  
    for(let y = 0; y < edgeY; y++){

        // itera sobre cada div da coluna
        for(let x = 0; x < gameStructure[0].length; x++) {
            cell = gameStructure[y][x];
            
            // Checa se a célula esta vazia (se o jogador não fez nenhuma jogada nessa celula)
            if(cell !== 0) {
                
                // Checa se o numero da celula atual e igual os proximos 3 numeros
                if(cell === gameStructure[y+1][x] && cell === gameStructure[y+2][x] && cell === gameStructure[y+3][x] ) {
                    console.log("4 in a row horizontal found at " + (x+1) + ":" + (y+1));
                }
            }
        }
    }
}
// Função de vitoria diagonal direita
const victoryDiagonalRight = () => {
    const edgeX = gameStructure[0].length - 3;
    const edgeY = gameStructure.length - 3;
    // DIAGONAL (direita pra baixo)
    // itera sobre cada coluna  
    for(let y = 0; y < edgeY; y++){

        // itera sobre cada div da coluna
        for(let x = 0; x < edgeX; x++) {
            cell = gameStructure[y][x];
            
            // Checa se a célula esta vazia (se o jogador não fez nenhuma jogada nessa celula)
            if(cell !== 0) {
                
                // Checa se o numero da celula atual e igual os proximos 3 numeros
                if(cell === gameStructure[y+1][x+1] && cell === gameStructure[y+2][x+2] && cell === gameStructure[y+3][x+3]) {
                    console.log("4 in a row down-right found at " + (x+1) + ":" + (y+1));
                }
            }
        }
    }
}
// Função de vitoria diagonal esquerda
const victoryDiagonalLeft = () => {
    const edgeX = gameStructure[0].length - 3;
    const edgeY = gameStructure.length - 3;
    // DIAGONAL (esquerda pra baixo)
    // itera sobre cada coluna  
    for(let y = 2; y < gameStructure.length; y++){

        // itera sobre cada div da coluna
        for(let x = 0; x < edgeX; x++) {
            cell = gameStructure[y][x];
            
            // Checa se a célula esta vazia (se o jogador não fez nenhuma jogada nessa celula)
            if(cell !== 0) {
            
                // Checa se o numero da celula atual e igual os proximos 3 numeros
                if(cell === gameStructure[y-1][x+1] && cell === gameStructure[y-2][x+2] && cell === gameStructure[y-3][x+3]) {
                    console.log("4 in a row down-left found at " + (x+1) + ":" + (y+1));
                }
            }
        }
    }
}

// função addClass verifica jogador e adiciona Classe
const addClass = (par) => {

    // Pegando todos os filhos da coluna selecionada;
    let child = par.childNodes;
    
    // unindo em forma de array com spreed
    // child = [...child];

    // percorrendo os elementos para ver se encontra a classe "linha vazio"
    for (let i = 5; i >= 0; i--) {

        // se encontrar a classe linha vazio, irá substituir pela classe do jogador atual;
        if (child[i].className === "linha vazio") {
            child[i].classList.remove("vazio");
            child[i].classList.add(currentPlayer);

            columnPlayer = child[i].id[1];
            rowPlayer = child[i].id[3];
            updateArray(columnPlayer, rowPlayer);
            victoryVertical();
            victoryHorizontal();
            victoryDiagonalLeft();
            victoryDiagonalRight();
            // após encontrar parar o loop para não alimentar todos os espaços vazios
            break;
        }
    }
    // verificando qual o jogador atual e modificando para o próximo jogador da próxima rodada. 
    if (currentPlayer === "player1") {
        currentPlayer = "player2";
    } else {
        currentPlayer = "player1";
    }
}



// Função movePills
const movePills = () => {
    // Capturando os elementos do tipo coluna que contém os elementos filhos que serão as linhas
    let listColumns = document.getElementsByClassName("coluna");
    
    /*  listColumns = [...listColumns]; (remover essa parte - não tá servindo)
    let currentColumn = ""; (remover essa parte - não ta servindo)*/

    // Iterar sobre cada coluna para identificar o click e chamar a função add.Class
    for (let i = 0; i <= 6; i++){
        listColumns[i].addEventListener("click", (evt) => {
            let currentColumn = evt.currentTarget;
            addClass(currentColumn)
        })
    }
}

// Criar função start game
const startGame = () => {
    renderGame();
    movePills();
}

startGame();
