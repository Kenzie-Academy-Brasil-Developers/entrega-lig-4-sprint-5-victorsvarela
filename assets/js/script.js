let btnBackRules = document.getElementById("backRules")
let rulesSection = document.getElementById("rulesScreen")

btnBackRules.addEventListener('click', (e) =>{
    backRules()
})
function backRules(){
    rulesSection.classList.add('hidden')
}