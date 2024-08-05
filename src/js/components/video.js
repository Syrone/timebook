const videos = document.querySelectorAll('.js-video');

videos?.forEach((videoContainer) => {
	const videoSrc = videoContainer.getAttribute('data-scr-video');
	let videoElement = null;

	videoContainer.addEventListener('click', (event) => {
		if (event.target === videoElement) return;

		if (!videoElement) {
			// Создаем видео элемент
			videoElement = document.createElement('video');
			videoElement.src = videoSrc;
			videoElement.classList.add('video');
			videoElement.controls = true;
			videoContainer.appendChild(videoElement);

			// Запускаем видео
			videoElement.play();
			videoContainer.classList.add('is-active');
			videoContainer.style = '';
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

	if (videoElement) {
		videoElement.addEventListener('click', (event) => {
			event.stopPropagation(); // Предотвращаем всплытие события
			if (videoElement.paused) {
				videoElement.play();
				videoContainer.classList.add('is-active');
			} else {
				videoElement.pause();
				videoContainer.classList.remove('is-active');
			}
		});
	}

	const graphModal = videoContainer.closest('.graph-modal');

  if (graphModal) {
    graphModal.addEventListener('click', (event) => {
      if (
        event.target.classList.contains('graph-modal__close') ||
        event.target === graphModal
      ) {
        if (videoElement && !videoElement.paused) {
          videoElement.pause();
          videoContainer.classList.remove('is-active');
        }
      }
    });
  }
});