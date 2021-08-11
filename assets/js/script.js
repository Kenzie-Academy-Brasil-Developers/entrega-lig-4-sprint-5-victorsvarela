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

// função addClass verifica jogador e adiciona Classe
let usuarioAtual = 'player1';

function addClass(par) {

    // Pegando todos os filhos da coluna selecionada;
    let child = par.childNodes;
    
    // unindo em forma de array com spreed
    child = [...child];

    // percorrendo os elementos para ver se encontra a classe "linha vazio"
    for (let i = 5; i >= 0; i--) {

        // se encontrar a classe linha vazio, irá substituir pela classe do jogador atual;
        if (child[i].className === "linha vazio") {
            child[i].classList.remove("vazio");
            child[i].classList.add(usuarioAtual);
            // após encontrar parar o loop para não alimentar todos os espaços vazios
            break;
        }
    }
    // verificando qual o jogador atual e modificando para o próximo jogador da próxima rodada. 
    if (usuarioAtual === "player1") {
        usuarioAtual = "player2";
    } else {
        usuarioAtual = "player1";
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
