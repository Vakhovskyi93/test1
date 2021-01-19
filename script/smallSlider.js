let control = document.querySelector('.fb_content');
let slides = document.querySelectorAll('.feedback_item');
let right = document.querySelector('.r');
let left = document.querySelector('.l');
left.classList.add('none');
let n = 0;
right.addEventListener('click', () => {
	n++;
	left.classList.remove('none');
	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove('shows');
		slides[i].classList.remove('nexts');
		slides[i].classList.remove('prews');
	}

	slides[n].classList.add('shows');
	n == 0 ? null : slides[n - 1].classList.add('prews');
	n == slides.length - 1 ? slides[n - 1].classList.add('prews') : slides[n + 1].classList.add('nexts');
	slides[0].classList.add('prews');
	n == slides.length - 1 ? right.classList.add('none') : null;
});

left.addEventListener('click', () => {
	n--;
	right.classList.remove('none');
	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove('shows');
		slides[i].classList.remove('nexts');
		slides[i].classList.remove('prews');
	}

	slides[slides.length - 1].classList.add('nexts');
	n == 0 ? slides[n + 1].classList.add('nexts') : null;
	slides[slides.length - 1].classList.add('nexts');
	n == 0 ? left.classList.add('none') : slides[n - 1].classList.add('prews');
	slides[n].classList.add('shows');
});

//  first slider

//let control = document.querySelector('.slider_control');
let slides1 = document.querySelectorAll('.slider_item');
let right1 = document.querySelector('.button_next');
let left1 = document.querySelector('.button_prew');
left1.classList.add('none');
let t = 0;
right1.addEventListener('click', () => {
	t++;
	left1.classList.remove('none');
	for (let i = 0; i < slides1.length; i++) {
		slides1[i].classList.remove('shows');
		slides1[i].classList.remove('nexts');
		slides1[i].classList.remove('prews');
	}

	slides1[t].classList.add('shows');
	t == 0 ? null : slides1[t - 1].classList.add('prews');
	t == slides1.length - 1 ? slides1[t - 1].classList.add('prews') : slides1[t + 1].classList.add('nexts');

	t == slides1.length - 1 ? slides1[t - 2].classList.add('prews') : console.log('no');

	slides1[0].classList.add('prews');
	t == slides1.length - 1 ? right1.classList.add('none') : slides1[slides1.length - 1].classList.add('nexts');
});

left1.addEventListener('click', () => {
	t--;
	right1.classList.remove('none');

	for (let i = 0; i < slides.length; i++) {
		slides1[i].classList.remove('shows');
		slides1[i].classList.remove('nexts');
		slides1[i].classList.remove('prews');
	}
	t == 2 ? slides1[0].classList.add('prews') : slides1[2].classList.add('nexts');

	slides1[slides1.length - 1].classList.add('nexts');
	t == 0 ? slides1[t + 1].classList.add('nexts') : null;
	slides1[slides1.length - 1].classList.add('nexts');
	t == slides1.length - 2 ? slides1[t + 1].classList.remove('shows') : null;
	t == 0 ? left1.classList.add('none') : slides1[t - 1].classList.add('prews');

	slides1[t].classList.add('shows');
});

let viewPort = window.innerWidth;

if (viewPort < 992) {
	for (let i = 1; i < slides1.length; i++) {
		slides1[i].classList.add('nexts');
	}

	slides1[0].classList.add('shows');

	// document.querySelector('.slider_control')
}
