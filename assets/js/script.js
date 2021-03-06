const initialScreen = document.getElementById('initialScreen');
const btnPlay = document.getElementById("btnPlay");
const selectNameScreen = document.getElementById('selectNameScreen');
const btnInitialScreen = document.getElementById('btnInitialScreen');
const btnStartGame = document.getElementById('btnStartGame');
const loadingScreen = document.getElementById('loadingScreen');
const gameScreen = document.getElementById('gameScreen')
const sectionFGameScreen = document.getElementById('sectionFGameScreen')
const dispPlayer = document.getElementById("dispPlayer");

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

    if (player1 !== '' && player2 !== '') {
        loadingScreen.classList.remove('hidden');
        selectNameScreen.classList.add('hidden');
        initialScreen.classList.toggle('hidden');
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            //gameScreen.classList.remove('hidden');
            sectionFGameScreen.classList.remove('hidden')
            startGame();
        }, 2000);

    } else {

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



const playerName = document.querySelector('#victoryScreen>h2')
const gifWin = document.querySelector('#victoryScreen div')
const victorySection = document.querySelector('#victoryScreen')
const playAgain = document.querySelector('#btnPlayAgain')
const btnMenu = document.querySelector('#btnMenu')
const winPlayer = document.getElementById('winPlayer')

function winRed() {
    victorySection.classList.add('victorySection')
    victorySection.classList.remove('hidden')
    gifWin.classList.add('victoryRed')
    gifWin.classList.remove('victoryBlue')
    winPlayer.classList.add('txtRed')
    winPlayer.classList.remove('txtBlue')
    winPlayer.classList.remove('txtDraw')
    playerName.innerHTML = `${player1} Abra??ou a Verdade Dolorosa`;
   
}
function winBlue() {
    victorySection.classList.add('victorySection')
    victorySection.classList.remove('hidden')
    gifWin.classList.add('victoryBlue')
    gifWin.classList.remove('victoryRed')
    winPlayer.classList.add('txtBlue')
    winPlayer.classList.remove('txtRed')
    winPlayer.classList.remove('txtDraw')
    playerName.innerHTML = `${player2} Continuou Cego na Matrix`;
  
}
function drawGame(){
    victorySection.classList.add('victorySection')
    victorySection.classList.remove('hidden')
    gifWin.classList.remove('victoryRed')
    gifWin.classList.remove('victoryBlue')
    winPlayer.classList.remove('txtBlue')
    winPlayer.classList.remove('txtRed')
    winPlayer.classList.add('txtDraw')
    playerName.classList.add('empate')
    playerName.innerText = "Empatou"
      
}
function menu(){
    victorySection.classList.add('hidden')
    victorySection.classList.remove('victorySection')
    // resetArray();
    // selectNameScreen.classList.add("hidden");
    // initialScreen.classList.remove("hidden");
}

btnMenu.addEventListener('click', (e) => {
    // menu()
    window.location.reload()

})

playAgain.addEventListener('click', (e) => {
    const containeer = document.querySelector(".gameSection")
    let child = containeer.childNodes

    //  Inserido um for para remover todos os elementos filhos de sectionGame
    for (let i = 0; i < 7; i++) {
        containeer.removeChild(child[0])
    }
    resetArray()
    startGame();
    menu();

})

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

// Criar fun????o de renderizar;

// Fun????o para resetar a partida;
const resetArray = () => {
    game = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ];
    verifiqueEmpate = 0
}

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
    if (currentPlayer === 'player1') {
        n = 1;
    } else {
        n = 2;
    }

    a = Number(a);
    b = Number(b);

    for (let i = 0; i < game.length; i++) {
        for (let j = 0; j < game[i].length; j++) {
            if (i === b && j === a) {
                game[i].splice(j, 1, n);
            }
        }
    }
}

const winner = (cell) => {
    if (cell === 1) {
        winRed()
    }
    if (cell === 2) {
        winBlue()
    }
}
let verifiqueEmpate = 0
// Fun????o de vitoria vertical
const victoryVertical = () => {
    // Se procurar al??m do length da array d?? erro
    const edgeX = game[0].length - 3;
    const edgeY = game.length - 3;

    // Vertical
    // itera sobre cada coluna
    for (let y = 0; y < game.length; y++) {

        // itera sobre cada div da coluna
        for (let x = 0; x < edgeX; x++) {
            let cell = game[y][x];

            // Checa se a c??lula esta vazia (se o jogador n??o fez nenhuma jogada nessa celula)
            if (cell !== 0) {

                // Checa se o numero da celula atual e igual os proximos 3 numeros
                if (cell === game[y][x + 1] && cell === game[y][x + 2] && cell === game[y][x + 3]) {
                    winner(cell)              
                }
                
            }
        }
    }
}
// Fun????o de vitoria horizontal
const victoryHorizontal = () => {
    const edgeX = game[0].length - 3;
    const edgeY = game.length - 3;
    // Horizontal
    // itera sobre cada coluna  
    for (let y = 0; y < edgeY; y++) {

        // itera sobre cada div da coluna
        for (let x = 0; x < game[0].length; x++) {
            cell = game[y][x];

            // Checa se a c??lula esta vazia (se o jogador n??o fez nenhuma jogada nessa celula)
            if (cell !== 0) {

                // Checa se o numero da celula atual e igual os proximos 3 numeros
                if (cell === game[y + 1][x] && cell === game[y + 2][x] && cell === game[y + 3][x]) {
                    winner(cell)
                }
            }
        }
    }
}
// Fun????o de vitoria diagonal direita
const victoryDiagonalRight = () => {
    const edgeX = game[0].length - 3;
    const edgeY = game.length - 3;
    // DIAGONAL (direita pra baixo)
    // itera sobre cada coluna  
    for (let y = 0; y < edgeY; y++) {

        // itera sobre cada div da coluna
        for (let x = 0; x < edgeX; x++) {
            cell = game[y][x];

            // Checa se a c??lula esta vazia (se o jogador n??o fez nenhuma jogada nessa celula)
            if (cell !== 0) {

                // Checa se o numero da celula atual e igual os proximos 3 numeros
                if (cell === game[y + 1][x + 1] && cell === game[y + 2][x + 2] && cell === game[y + 3][x + 3]) {
                    winner(cell)  
                }
                
            }
        }
    }
}

// Fun????o de vitoria diagonal esquerda
const victoryDiagonalLeft = () => {
    const edgeX = game[0].length - 3;
    const edgeY = game.length - 3;
    // DIAGONAL (esquerda pra baixo)
    // itera sobre cada coluna  
    for (let coluna = 2; coluna < game.length; coluna++) {
        // itera sobre cada div da coluna
        for (let linha = 0; linha < edgeX; linha++) {
            cell = game[coluna][linha];

            // Checa se a c??lula esta vazia (se o jogador n??o fez nenhuma jogada nessa celula)
            if (cell !== 0) {

                // Checa se o numero da celula atual e igual os proximos 3 numeros
                if (cell === game[coluna - 1][linha + 1] && cell === game[coluna - 2][linha + 2] && cell === game[coluna - 3][linha + 3]) {
                    winner(cell)
                }
            }
        }
    }
}

// fun????o display jogador atual

const displayJogador = (jogador) => {
    if(jogador === "player1") {
        dispPlayer.innerHTML = `Jogador Atual ${player1}`
        dispPlayer.className ='txtPlayerRed'
    } else {
        dispPlayer.innerHTML = `Jogador Atual ${player2}`
        dispPlayer.className ='txtPlayerBlue'
    }
}

// fun????o addClass verifica jogador e adiciona Classe
const addClass = (par) => {

    // Pegando todos os filhos da coluna selecionada;
    let child = par.childNodes;

    // unindo em forma de array com spreed
    // child = [...child];

    // percorrendo os elementos para ver se encontra a classe "linha vazio"
    for (let i = 5; i >= 0; i--) {

        // se encontrar a classe linha vazio, ir?? substituir pela classe do jogador atual;
        if (child[i].className === "linha vazio") {
            child[i].classList.remove("vazio");
            child[i].classList.add(currentPlayer);

            if(child[i].className !== 'linha vazio'){
                verifiqueEmpate += 1
                if(verifiqueEmpate === 42){
                    drawGame();
                }
            }

            columnPlayer = child[i].id[1];
            rowPlayer = child[i].id[3];

            updateArray(columnPlayer, rowPlayer);
            victoryVertical();
            victoryHorizontal();
            victoryDiagonalLeft();
            victoryDiagonalRight();
            // ap??s encontrar parar o loop para n??o alimentar todos os espa??os vazios
            break;
        }
    }
    // verificando qual o jogador atual e modificando para o pr??ximo jogador da pr??xima rodada. 
    if (currentPlayer === "player1") {
        currentPlayer = "player2";
    } else {
        currentPlayer = "player1";
    }

    displayJogador(currentPlayer);
}


// Fun????o movePills
const movePills = () => {
    // Capturando os elementos do tipo coluna que cont??m os elementos filhos que ser??o as linhas
    let listColumns = document.getElementsByClassName("coluna");

    /*  listColumns = [...listColumns]; (remover essa parte - n??o t?? servindo)
    let currentColumn = ""; (remover essa parte - n??o ta servindo)*/

    // Iterar sobre cada coluna para identificar o click e chamar a fun????o add.Class
    for (let i = 0; i <= 6; i++) {
        listColumns[i].addEventListener("click", (evt) => {
            let currentColumn = evt.currentTarget;
            addClass(currentColumn)
            

        })
    }
}

// Criar fun????o start game
const startGame = () => {
    if(dispPlayer.className === ''){
        dispPlayer.className ='txtPlayerRed';
        dispPlayer.innerHTML = `Jogador Atual ${player1}`;
    }
    resetArray();
    renderGame();
    movePills();
    
}


// startGame();
