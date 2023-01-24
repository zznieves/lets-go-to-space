
// global-scope variables
let submitBtn = document.querySelector('button');
let inputBox = document.querySelector('input');

// API information
let url = 'https://api.nasa.gov/planetary/apod?api_key=';
let apiKey = process.env.myAPI-key;


// display data response from API to user
function displayData(data) {

    let picture = document.querySelector('img');
    let description = document.querySelector('p');

    // show image and description from returned data
    picture.src = data.url;
    description.innerText = data.explanation;


}


// eventHandler for click events on Submit button
async function logInput() {

    try {
        // send request to API for data
        const response = await fetch(url + apiKey);

        if(response.ok) {

            const jsonResponse = await response.json();

            // display data to user
            displayData(jsonResponse);
        }
        throw new Error('Request failed!');
    }
    catch (error) {
        console.log(error);
    }

}

// add eventListener and eventHandler to Submit button for 'click' events
submitBtn.addEventListener('click', logInput);

