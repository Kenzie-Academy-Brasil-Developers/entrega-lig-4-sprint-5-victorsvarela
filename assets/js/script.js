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




