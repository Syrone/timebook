const range = document.querySelectorAll('.range');

range?.forEach(el => {
	const current = el.querySelector('.range-current'),
				input = el.querySelector('.range-input'),
				track = el.querySelector('.range-track'),
				setEl = el.querySelector('.range-set'),
				minEl = el.querySelector('.range-value-min'),
				maxEl = el.querySelector('.range-value-max');

	const formatNumber = (num) => {
		return num.toLocaleString();
	};

	const updateSlider = () => {
		const min = parseInt(input.min),
					max = parseInt(input.max),
					value = parseInt(input.value);

		const postfix = current.dataset.postfix || '';
		current.textContent = `${formatNumber(value)} ${postfix}`;
		
		const percent = ((value - min) / (max - min)) * 100;
		const setElWidth = setEl.offsetWidth;

		const offset = setElWidth * (percent / 100);

		setEl.style.left = `calc(${percent}% - ${offset}px)`;
		track.style.width = `${percent}%`;
	};

	const initializeSlider = () => {
		const min = parseInt(input.min);
		const max = parseInt(input.max);

		if (minEl) {
			minEl.textContent = formatNumber(min);
		}

		if (maxEl) {
			maxEl.textContent = formatNumber(max);
		}

		updateSlider();
	};

	input.addEventListener('input', updateSlider);
	initializeSlider();
});