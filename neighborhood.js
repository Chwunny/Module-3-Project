
let restaurants = ["Garage Grill", "Mr. Charlies Chicken Fingers", "Penny Ann's Cafe", "Gourmandise", "Oak Wood Fire Kitchen"]


const randomEats = document.querySelector('button#randomEats')

function randomButton(event) {
    event.preventDefault()

    alert(restaurants[Math.floor(Math.random() * restaurants.length)])
}

randomEats.addEventListener('click', randomButton)