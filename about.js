console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Submitted successfully!')
}

const giveCompliment = (evt) => {
	evt.preventDefault()

	alert('Still looking great!')
}



let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let img1 = document.querySelector('img#img1')

img1.addEventListener('mouseover', giveCompliment)

