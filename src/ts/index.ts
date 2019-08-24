// Import stylesheets
import '../scss/index.scss';

import { abstractEquality, Operands } from './abstract-equality';

function appendOperandsElement(
  element: HTMLElement,
  operands: Operands,
  result: undefined | boolean,
  index: number,
): void {
  const operandsElement = document.createElement('span');
  operandsElement.className = 'operands';

  operandsElement.innerHTML = `<b>${index}</b>`;

  const operandXElement = document.createElement('span');
  operandXElement.className = 'operands__operand operands__operand_x';
  operandXElement.innerText = `x: ${JSON.stringify(operands.x)}`;

  operandsElement.appendChild(operandXElement);

  const operandYElement = document.createElement('span');
  operandYElement.className = 'operands__operand operands__operand_y';
  operandYElement.innerText = `y: ${JSON.stringify(operands.y)}`;

  operandsElement.appendChild(operandYElement);

  if (result !== undefined) {
    const resultElement = document.createElement('span');
    resultElement.className = 'operands__result';
    resultElement.innerText = `return: ${result}`;

    operandsElement.appendChild(resultElement);
  }

  element.insertBefore(operandsElement, element.childNodes[1]);
}

let animationTimeoutIds: any[] = [];

const form: HTMLFormElement = document.getElementById('form') as HTMLFormElement;
const sections = document.getElementById('sections');
const x: HTMLInputElement = document.getElementById('x') as HTMLInputElement;
const y: HTMLInputElement = document.getElementById('y') as HTMLInputElement;

form.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  animationTimeoutIds.forEach(clearTimeout);

  sections.querySelectorAll('li').forEach((li: HTMLElement) => {
    li.style.color = null;
  });

  sections.querySelectorAll('.operands').forEach((operandElement: HTMLElement) => {
    operandElement.parentNode.removeChild(operandElement);
  });

  const result = abstractEquality(eval(x.value), eval(y.value));

  result.forEach((section, i) => {
    const timeOutId = setTimeout(() => {
      const element: HTMLElement = document.querySelector('#sections > ' + section.selector);

      appendOperandsElement(element, section.operands, section.result, i + 1);

      element.style.color = 'mediumseagreen';
    }, 1000 * i);

    animationTimeoutIds.push(timeOutId);
  });
});
