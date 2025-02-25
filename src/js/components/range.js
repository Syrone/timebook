const range = document.querySelectorAll('.range');

range?.forEach(el => {
	const input = el.querySelector('.range-input'),
				control = el.querySelector('.range-control-field'),
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

		control.value = `${formatNumber(value)}`;
		
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

	const updateInputFromControl = () => {
		let value = parseInt(control.value);
		const min = parseInt(input.min);
		const max = parseInt(input.max);

		if (isNaN(value) || value < min) {
			value = min;
		} else if (value > max) {
			value = max;
		}

		input.value = value;
		control.value = value
		updateSlider();
	};

	input.addEventListener('input', updateSlider);
	control.addEventListener('input', updateInputFromControl);
	initializeSlider();
});