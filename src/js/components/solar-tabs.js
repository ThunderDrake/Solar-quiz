import GraphTabs from 'graph-tabs';
import Choices from 'choices.js';

const tabs = new GraphTabs('quiz-tabs');
tabs.switchTabs(document.querySelector('#quiz-tabs2'));

const quizSelects = document.querySelectorAll('.solar-quiz__select');

quizSelects.forEach(el=>{
  const choices = new Choices(el, {
    searchEnabled: false,
  });

  el.addEventListener('choice', (e)=>{
    const name = e.srcElement.name;

    const targetInput = document.querySelector(`input[name="${name}"]`);
    targetInput.value = e.detail.choice.value
  })
})
