import { describe, it } from 'vitest';


describe('#Dashboard', () => {
  it('handles todo input change', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const inputElement = container.querySelector('input[type="text"]') as HTMLInputElement;

    if (inputElement) {
      inputElement.value = 'New Todo';
      inputElement.dispatchEvent(new Event('input'));
    } else {
      throw new Error('Input element not found');
    }
  });

  it('handles adding todo', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const inputElement = container.querySelector('input[type="text"]') as HTMLInputElement;
    const addButton = container.querySelector('button');

    if (inputElement && addButton) {
      inputElement.value = 'New Todo';
      inputElement.dispatchEvent(new Event('input'));
      addButton.click();
    } else {
      throw new Error('Input element or add button not found');
    }
  });

});
