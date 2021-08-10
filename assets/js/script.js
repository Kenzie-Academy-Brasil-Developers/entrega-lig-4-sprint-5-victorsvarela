const btnBackRules = document.getElementById("backRules")
const rulesSection = document.getElementById("rulesScreen")
const btnRules = document.getElementById("btnRules")

function rulesScreen(){
    rulesSection.classList.remove('hidden')
    btnBackRules.classList.remove("hidden")
}
function backRules(){
    rulesSection.classList.add('hidden')
    btnBackRules.classList.add("hidden")

}
btnRules.addEventListener('click', (e)=>{
    rulesScreen()
         
})

btnBackRules.addEventListener('click', (e) =>{
    backRules()
})




