document.querySelectorAll('.accordion-group')?.forEach(group => {
	const accordions = group.querySelectorAll('.accordion');

	accordions?.forEach(element => {
			const btn = element.querySelector('.accordion__btn');

			btn.addEventListener('click', () => {
					accordions?.forEach(accordion => {
							if (accordion !== element) {
									accordion.classList.remove('is-open');
							}
					});

					element.classList.toggle('is-open');
			});
	});
});