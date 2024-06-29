import GraphTabs from 'graph-tabs';

const tabs = document.querySelectorAll('[data-tabs]')
tabs?.forEach((el) => {
	const dataTabsValue = el.getAttribute('data-tabs');
	new GraphTabs(dataTabsValue);
})