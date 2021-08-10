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


const rulesScreen = () => {
    rulesSection.classList.remove('hidden')
    btnBackRules.classList.remove("hidden")
}

const backRules = () => {
    rulesSection.classList.add('hidden')
    btnBackRules.classList.add("hidden")

}

btnRules.addEventListener('click', rulesScreen)

btnBackRules.addEventListener('click', backRules)




