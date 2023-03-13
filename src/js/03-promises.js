const setDelay = document.querySelector('input[name="delay"]');
console.log(setDelay);
const setStepDelay = document.querySelector('input[name="step"]');
console.log(setStepDelay);
const setAmount = document.querySelector('input[name="amount"]');
console.log(setAmount);
const clickPromiseButton = document.querySelector('button');
console.log(clickPromiseButton);

/* setDelay.addEventListener('input', takeSetDelay);
setStepDelay.addEventListener('input', takeSetStepDelay);
setAmount.addEventListener('input', takeSetAmount); */
clickPromiseButton.addEventListener('click', test);

/* function takeSetDelay() {
  const takeSetDelayValue = setDelay.value;
  console.log(takeSetDelayValue);
}
function takeSetStepDelay() {
  const takeSetStepDelayValue = setStepDelay.value;
  console.log(takeSetStepDelayValue);
} */

/* function takeSetAmount() {
  const takeSetAmountValue = setAmount.value;
  console.log(takeSetAmountValue);
} */
function test() {
  setTimeout(() => {
    console.log('pierwsze wywołanie');

    for (let i = 0; i < setAmount.value; i++) {
      const delay = i * setStepDelay.value;
      setTimeout(() => {
        console.log(`wywołanie numer ${i + 1}`);
      }, delay);
    }
  }, setDelay.value);
}

/* function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
 */
