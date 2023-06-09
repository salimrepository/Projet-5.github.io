const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector('.dots');


arrowLeft.addEventListener('click', () => {
  

	alert ("fleche gauche")

});

arrowRight.addEventListener('click', () => {
	
	alert ("fleche droite")
});

/*creation des bullets points*/

function createDots() {
	
	const dot = document.createElement('div');
	dot.classList.add('dot');
	dotsContainer.appendChild(dot);
	dot.classList.add("dot_selected")

	const dotDeux = document.createElement('div');
	dotDeux.classList.add('dot');
	dotsContainer.appendChild(dotDeux);

	const dotTrois = document.createElement('div');
	dotTrois.classList.add('dot');
	dotsContainer.appendChild(dotTrois);

	const dotQuatre = document.createElement('div');
	dotQuatre.classList.add('dot');
	dotsContainer.appendChild(dotQuatre);
	  
}
createDots();