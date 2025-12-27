'use strict';

// write code here
const fieldElements = [...document.querySelectorAll('.field')];

function firstLetterToUpperCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

fieldElements.map((field) => {
  const label = document.createElement('label');
  const input = field.lastElementChild;
  const attributeName = input.getAttribute('name');
  const attributeId = input.getAttribute('id');

  input.setAttribute('placeholder', firstLetterToUpperCase(attributeName));
  label.textContent = attributeName.toUpperCase();
  label.setAttribute('for', attributeId);
  label.classList.add('field-label');
  field.prepend(label);
});
