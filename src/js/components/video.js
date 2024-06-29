const videos = document.querySelectorAll('.js-video');

videos?.forEach((videoContainer) => {
	const videoSrc = videoContainer.getAttribute('data-scr-video');
	let videoElement = null;

	videoContainer.addEventListener('click', () => {
		if (!videoElement) {
			videoElement = document.createElement('video');
			videoElement.src = videoSrc;
			videoElement.classList.add('video')
			videoElement.controls = true;
			videoElement.autoplay = true;
			videoContainer.appendChild(videoElement);
			videoContainer.classList.add('is-active');
			videoContainer.style = ''
		} else {
			if (videoElement.paused) {
				videoElement.play();
				videoContainer.classList.add('is-active');
			} else {
				videoElement.pause();
				videoContainer.classList.remove('is-active');
			}
		}
	});
});