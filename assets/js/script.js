const initialScreen = document.getElementById('initialScreen');
const btnPlay = document.getElementById("btnPlay");
const selectNameScreen = document.getElementById('selectNameScreen');
const btnInitialScreen = document.getElementById('btnInitialScreen');
const btnStartGame = document.getElementById('btnStartGame');
const loadingScreen = document.getElementById('loadingScreen');
const gameScreen = document.getElementById('gameScreen')

let btnBackRules = document.getElementById("backRules");
let rulesSection = document.getElementById("rulesScreen");

let player1 = '';
let player2 = '';


const showSelectNamePlayers = (event) => {
    selectNameScreen.classList.remove('hidden');
}

const hideNameSection = (event) => {
    selectNameScreen.classList.add('hidden');
}

const showLoadingScreen = (event) => {
    
    player1 = document.getElementById('inputPlayer1').value;
    player2 = document.getElementById('inputPlayer2').value;

    if (player1 !== '' && player2 !== ''){
        loadingScreen.classList.remove('hidden');
        selectNameScreen.classList.add('hidden');
        initialScreen.classList.toggle('hidden');
        setTimeout( () => {
            loadingScreen.classList.add('hidden');
            gameScreen.classList.toggle('hidden');
            console.log('hi')
        }, 2000);
        
    }else{
        
    }

}

btnPlay.addEventListener('click', showSelectNamePlayers);
btnInitialScreen.addEventListener('click', hideNameSection);
btnStartGame.addEventListener('click', showLoadingScreen);


const rulesScreen = () => {
    rulesSection.classList.remove('hidden');
    btnBackRules.classList.remove("hidden");
}

const backRules = () => {
    rulesSection.classList.add('hidden');
    btnBackRules.classList.add("hidden");

}

btnRules.addEventListener('click', rulesScreen);

btnBackRules.addEventListener('click', backRules);




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

let game = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];
console.log(gameStructure);
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
    
    for(let i = 0; i < game.length; i++) {
        for(let j = 0; j < game[i].length; j++) {
            if(i === b && j === a) {
                game[i].splice(j, 1, n);
            }
        }
    }
}

// Função de vitoria vertical
const victoryVertical = () => {
    // Se procurar além do length da array dá erro
    const edgeX = game[0].length - 3;
    const edgeY = game.length - 3;

    // Vertical
    // itera sobre cada coluna
    for(let y = 0; y < game.length; y++){

        // itera sobre cada div da coluna
        for(let x = 0; x < edgeX; x++) {
            let cell = game[y][x];
            
            // Checa se a célula esta vazia (se o jogador não fez nenhuma jogada nessa celula)
            if(cell !== 0) {
                
                // Checa se o numero da celula atual e igual os proximos 3 numeros
                if(cell === game[y][x+1] && cell === game[y][x+2] && cell === game[y][x+3]) {
                    console.log("4 in a row vertical found at " + (x+1) + ":" + (y+1));
                }
            }
        }
    }
}
// Função de vitoria horizontal
const victoryHorizontal = () => {
    const edgeX = game[0].length - 3;
    const edgeY = game.length - 3;
    // Horizontal
    // itera sobre cada coluna  
    for(let y = 0; y < edgeY; y++){

        // itera sobre cada div da coluna
        for(let x = 0; x < game[0].length; x++) {
            cell = game[y][x];
            
            // Checa se a célula esta vazia (se o jogador não fez nenhuma jogada nessa celula)
            if(cell !== 0) {
                
                // Checa se o numero da celula atual e igual os proximos 3 numeros
                if(cell === game[y+1][x] && cell === game[y+2][x] && cell === game[y+3][x] ) {
                    console.log("4 in a row horizontal found at " + (x+1) + ":" + (y+1));
                }
            }
        }
    }
}
// Função de vitoria diagonal direita
const victoryDiagonalRight = () => {
    const edgeX = game[0].length - 3;
    const edgeY = game.length - 3;
    // DIAGONAL (direita pra baixo)
    // itera sobre cada coluna  
    for(let y = 0; y < edgeY; y++){

        // itera sobre cada div da coluna
        for(let x = 0; x < edgeX; x++) {
            cell = game[y][x];
            
            // Checa se a célula esta vazia (se o jogador não fez nenhuma jogada nessa celula)
            if(cell !== 0) {
                
                // Checa se o numero da celula atual e igual os proximos 3 numeros
                if(cell === game[y+1][x+1] && cell === game[y+2][x+2] && cell === game[y+3][x+3]) {
                    console.log("4 in a row down-right found at " + (x+1) + ":" + (y+1));
                }
            }
        }
    }
}

// Função de vitoria diagonal esquerda
const victoryDiagonalLeft = () => {
    const edgeX = game[0].length - 3;
    const edgeY = game.length - 3;
    // console.log(edgeX);
    // console.log(edgeY);
    // DIAGONAL (esquerda pra baixo)
    // itera sobre cada coluna  
    for(let coluna = 2; coluna < game.length; coluna++){
        // console.log(game.length);
        // itera sobre cada div da coluna
        for(let linha = 0; linha < edgeX; linha++) {
            cell = game[coluna][linha];
            
            // Checa se a célula esta vazia (se o jogador não fez nenhuma jogada nessa celula)
            if(cell !== 0) {
            
                // Checa se o numero da celula atual e igual os proximos 3 numeros
                // console.log(game[coluna-3][linha+3]);
                if(cell === game[coluna-1][linha+1] && cell === game[coluna-2][linha+2] && cell === game[coluna-3][linha+3]) {
                    console.log("4 in a row down-left found at " + (linha+1) + ":" + (coluna+1));
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
            // console.log(columnPlayer);
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

const playerName = document.querySelector('.victorySection>h2')
const gifWin = document.querySelector('.victorySection div')
const victorySection = document.querySelector('.victorySection')
const playAgain = document.querySelector('#btnPlayAgain')
const btnMenu = document.querySelector('#btnMenu')

function winRed(){
playerName.innerText += " Vermelho Venceu"
playerName.style.color = 'red'
// gifWin.style.backgroundImage = "url('../gif/redWin.gif')"
gifWin.style.width = 300 +'px'
gifWin.style.height = 167 +'px'
}
function winBlue(){
    playerName.innerText += " Azul Venceu"
    playerName.style.color = 'rgb(68, 0, 255)'
    // gifWin.style.backgroundImage = "url('../gif/blueWin.gif')"
    gifWin.style.width = 203 +'px'
    gifWin.style.height = 222 +'px'
}

function menu(){
    victorySection.classList.add('hidden')
    victorySection.classList.remove('victorySection')
}

btnMenu.addEventListener('click', (e)=>{
    menu()
})

playAgain.addEventListener('click', (e) =>{
    
})

winRed()
startGame();
