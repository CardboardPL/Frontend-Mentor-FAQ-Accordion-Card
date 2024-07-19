function toggleFAQAnswer(event) {
  event.preventDefault();

  const summaryElem = event.currentTarget;
  const parentElem = summaryElem.parentElement;
  const answerElem = summaryElem.nextElementSibling;

  if (!parentElem.hasAttribute('open')) {
    parentElem.setAttribute('open', '');
    answerElem.style.height = `${answerElem.scrollHeight}px`;
    answerElem.addEventListener('transitionend', function setHeightAuto() {
      answerElem.style.height = 'auto';
      answerElem.removeEventListener('transitionend', setHeightAuto);
    });
  } else {
    answerElem.style.height = `${answerElem.scrollHeight}px`;

    answerElem.offsetHeight;

    answerElem.style.height = '0px';

    answerElem.addEventListener('transitionend', function removeOpenAttribute() {
      parentElem.removeAttribute('open');
      answerElem.removeEventListener('transitionend', removeOpenAttribute);
    }); 
  }
}

document.querySelectorAll('.js-faq__item-question').forEach(element => {
  element.addEventListener('click', toggleFAQAnswer);
});