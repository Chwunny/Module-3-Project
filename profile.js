let colorButton = document.querySelector('button#color')

let placeButton = document.querySelector('button#place')

let ritualButton = document.querySelector('button#ritual')

const showColor = (event) =>  {
    event.preventDefault()

    alert('My favorite color is Aqua #00FFFF')
}

const showPlace = (event) => {
    event.preventDefault()

    alert('My favorite place is Anaheim, CA')
}

const showRitual = (event) => {
    event.preventDefault()

    alert('My favorite ritual is eating belvita cookies after the morning lecture')
}

colorButton.addEventListener('click', showColor)

placeButton.addEventListener('click', showPlace)

ritualButton.addEventListener('click', showRitual)