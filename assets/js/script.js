const btnPlay = document.getElementById("btnPlay");
const selectNameSection = document.getElementById('selectNameScreen');
const btnInitialScreen = document.getElementById('btnInitialScreen')
let btnBackRules = document.getElementById("backRules")
let rulesSection = document.getElementById("rulesScreen")

const showSelectNamePlayers = (event) => {
    selectNameSection.classList.remove('hidden')
}

const hide = (event) => {
    selectNameSection.classList.add('hidden')
}

btnPlay.addEventListener('click', showSelectNamePlayers)
btnInitialScreen.addEventListener('click', hide)

btnBackRules.addEventListener('click', (e) =>{
    backRules()
})
function backRules(){
    rulesSection.classList.add('hidden')
}



