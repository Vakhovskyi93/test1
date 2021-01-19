const media = document.querySelector('video');
let video_control = document.querySelector('.video_control');

video_control.addEventListener('click', () => {
	video_control.style.display = 'none';

	media.play();
});
media.addEventListener('click', () => {
	video_control.style.display = 'block';
	media.pause();
});
