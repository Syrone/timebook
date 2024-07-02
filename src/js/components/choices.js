import Choices from 'choices.js'

const selectChoices = document.querySelectorAll('.js-choices')

const selectConfig = {
	allowHTML: true,
	placeholder: true,
	searchEnabled: false,
	shouldSort: false,
	itemSelectText: '',
	callbackOnCreateTemplates: function(template) {
    return {
			item: ({ classNames }, data) => {
        return template(`
          <div class="${classNames.item} ${
          data.highlighted
            ? classNames.highlightedState
            : classNames.itemSelectable
        } ${
          data.placeholder ? classNames.placeholder : ''
        }" data-item data-id="${data.id}" data-value="${data.value}" ${
          data.active ? 'aria-selected="true"' : ''
        } ${data.disabled ? 'aria-disabled="true"' : ''}>
            ${data.label}
            <span class="icon ${classNames.item}-icon">
							<svg>
								<use xlink:href="img/icons/down.svg#svg-down"></use>
							</svg>
						</span>
          </div>
        `);
      },
    };
  }
}

selectChoices?.forEach((select) => {
  new Choices(select, selectConfig)
})