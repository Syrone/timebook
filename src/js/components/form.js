import { validateForms } from '../functions/validate-forms';

const rules = [
  {
		ruleSelector: '.field-name',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Минимальная длина 3 символа',
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Обязательное поле',
      },
    ]
  },
  {
    ruleSelector: '.field-tel',
    tel: true,
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Обязательное поле',
      }
    ]
  },
  {
    ruleSelector: '.field-email',
    rules: [
      {
        rule: 'required',
        errorMessage: 'Обязательное поле',
      },
      {
        rule: 'email',
        errorMessage: 'Неверный формат email',
      },
    ]
  },
];

const afterForm = (form) => {
  if (form.classList.contains('js-form--callback')) {
    window.location.href = "thanks-callback.html";
  } else if (form.classList.contains('js-form--demo')) {
    window.location.href = "thanks-demo.html";
  } else if (form.classList.contains('js-form--quiz')) {
    window.location.href = "thanks-quiz.html";
  } else {
    window.location.href = "thanks-callback.html";
  }
};

validateForms('.js-form', rules, afterForm);