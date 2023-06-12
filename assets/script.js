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
const bannerImg = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');
let slidePosition = 0;

/*creation de la fonction slide pour images et texte*/

function slide() {
	
	const dots = dotsContainer.querySelectorAll('.dot');
	dots.forEach((dotFull, index) => {
	  if (index === slidePosition) {
		dotFull.classList.add('dot_selected');
	  } else {
		dotFull.classList.remove('dot_selected');
	  }

	  
	});

  const slide = slides[slidePosition];
  bannerImg.src = `./assets/images/slideshow/${slide.image}`;
  tagLine.innerHTML = slide.tagLine;
	
  }

  /*decrementation et appel de la fonction + defilement infini*/

arrowLeft.addEventListener('click', () => {
  

	slidePosition--
	if (slidePosition < 0)
	slidePosition = 3;
	slide();
});

 /*incrementation et appel de la fonction + defilement infini*/

arrowRight.addEventListener('click', () => {
	
	slidePosition++
	if (slidePosition > 3)
	  slidePosition = 0;
	slide();
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