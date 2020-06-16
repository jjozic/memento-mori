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
    let columns = document.getElementsByTagName('td')   
    //clear
    for(i = 0; i < columns.length; i++){
        columns[i].classList.remove('lived')
    }
    let mydate = new Date(ageInput.value);
    let weeks = calculateAgeInWeeks(mydate)

    for(var i = 0; i < weeks; i++){
        (function(i){
            setTimeout(() => columns[i].classList.add('lived'), i*5);
        })(i);
    }
}

function calculateAgeInWeeks(birthday) { 
    var timeDiff = Date.now() - birthday.getTime();
    
    return timeDiff / (24*3600*1000*7)
}

enterBtn.addEventListener('click', drawLivedYears)
window.addEventListener('load', drawLifeBoard())
