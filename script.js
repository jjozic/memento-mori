const enterBtn = document.getElementById('enter')
const ageInput = document.getElementById('age')
const lifeBoard = document.getElementById('life-board')

function drawLifeBoard(){
    for(i = 0; i < 80; i++){
        let row = document.createElement('tr')
        for(j = 0; j < 52; j++){
            let col = document.createElement('td')
            row.appendChild(col)
        }
        lifeBoard.appendChild(row)
    }

}

function drawLivedYears(){
    let rows = document.getElementsByTagName('tr')
    //clear
    for(i = 0; i < rows.length; i++){
        rows[i].classList.remove('lived')
    }
    let age = ageInput.value

    for(i = 0; i < age; i++){
        rows[i].classList.add('lived')
    }
}

enterBtn.addEventListener('click', drawLivedYears)
window.addEventListener('load', drawLifeBoard())
