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

    let age = calculateAge(mydate)
    let weeks = age['years'] * 52 + age['months'] * 4 + age['days'] / 7

    for(var i = 0; i < weeks; i++){
        (function(i){
            setTimeout(() => columns[i].classList.add('lived'), i*5);
        })(i);
    }
}

function calculateAge(birthday) { 
    var timeDiff = Date.now() - birthday.getTime();
    var newDate = new Date(timeDiff);
    // - 1970 because of UNIX Time
    let years = Math.abs(newDate.getUTCFullYear() - 1970)
    // + 1 becaue getDay goes from 0-11
    var months = newDate.getMonth() + 1 
    var days = newDate.getDay() + 1  

    return {years, months, days}
}

enterBtn.addEventListener('click', drawLivedYears)
window.addEventListener('load', drawLifeBoard())
