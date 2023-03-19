const form = document.querySelector('.form');
const setDelay = document.querySelector('input[name="delay"]');
const setStepDelay = document.querySelector('input[name="step"]');
const setAmount = document.querySelector('input[name="amount"]');
const position = setAmount.value;
const delay = setStepDelay.value;

function createFirstPromise() {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve();
      } else {
        reject();
      }
    }, setDelay.value);
  });
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', onSumbit);

function onSumbit(event) {
  event.preventDefault();
  createFirstPromise().then(onFirstResolve).catch(onFirstReject);
  for (let i = 1; i < setAmount.value; i++) {
    let delayCount = setStepDelay.value * i;
    let setSecondDelay = Number(setDelay.value) + Number(delayCount);
    createPromise(i, setSecondDelay).then(onResolve).catch(onReject);
  }
}

function onResolve({ position, delay }) {
  console.log(`✅ Fulfilled promise ${position + 1} in ${delay}ms`);
}

function onReject({ position, delay }) {
  console.log(`❌ Rejected promise ${position + 1} in ${delay}ms`);
}

function onFirstResolve() {
  console.log(`✅ Fulfilled promise 1 in ${setDelay.value}ms`);
}

function onFirstReject() {
  console.log(`❌ Rejected promise 1 in ${setDelay.value}ms`);
}
