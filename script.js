
// global-scope variables
let submitBtn = document.querySelector('button');
let inputBox = document.querySelector('input');

// endpoint + API information
let url = 'https://api.nasa.gov/planetary/apod?api_key=';
const apiKey = config.APIKEY;

console.log(apiKey);


// display data response from API to user
function displayData(data) {

    // set photo and description + dimensions
    let picture = document.querySelector('img');
    let description = document.querySelector('p');

    // show image and description from returned data
    document.getElementById('picTitle').innerText = data.title;
    picture.src = data.url;
    picture.width = '500';
    picture.height = '500';

    description.innerText = data.explanation;
    

}


// eventHandler for click events on Submit button
async function logInput() {

    // date input element
    const input = document.querySelector('input');

    try {
        // send request to API for data
        const response = await fetch(url + apiKey + `&date=${input.value}`);

        if(response.ok) {

            const jsonResponse = await response.json();

            // display data to user
            displayData(jsonResponse);
        }
        else {
            throw new Error('Request failed!');
        }
    }
    catch (error) {
        console.log(error);
    }

}

// add eventListener and eventHandler to Submit button for 'click' events
submitBtn.addEventListener('click', logInput);

