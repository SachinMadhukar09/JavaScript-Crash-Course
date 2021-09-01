// Challenge 1 : Your Age in Days

function ageInDays(){
    var birthYear = prompt("What Year you are born")
    var ageInDayss = (2021-birthYear)*365
    var h1 = document.createElement('h1')
    var textAnswer = document.createTextNode('You Are ' + ageInDayss + ' days old')
    h1.setAttribute('id','ageInDays')
    h1.appendChild(textAnswer)
    document.getElementById('flex-box-result').appendChild(h1)
    // console.log(ageInDayss)

}

function reset(){
    document.getElementById('ageInDays').remove()
}

// Challenge 2 : Your Age in Years

function ageInYears(){
    var birthYear=prompt("What is your Birth Year")
    var ageInYearss=(2021-birthYear)
    var h1 = document.createElement('h1')
    var textAnswer = document.createTextNode('You are ' + ageInYearss + ' Years Old')
    h1.setAttribute('id','ageInYears')
    h1.appendChild(textAnswer)
    document.getElementById('flex-box-result-2').appendChild(h1)
}

function reset2(){
    document.getElementById('ageInYears').remove()
}

// Challenge 3 : Cat Generator

function generateCat(){
    var image = document.createElement('img')
    var div = document.getElementById('flex-cat-gen')
    image.src="https://thecatapi.com/api/images/get?format=src&type=gif"
    div.appendChild(image)

}

