
// global-scope variables
let submitBtn = document.querySelector('button');
let inputBox = document.querySelector('input');


// eventHandler for click events on Submit button
function logInput() {

    console.log(inputBox.value);

}

// add eventListener and eventHandler to Submit button for 'click' events
submitBtn.addEventListener('click', logInput);

