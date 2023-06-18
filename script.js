const btn1 = document.getElementById('btn')
const apiKey = "KXwr7/fRq5CsmLRUOOPm3Q==yO3YzZfVwqwlU0IZ";
const jokeEl = document.getElementById('joke')

const options = {
    method: 'GET',
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/jokes?limit=1"

async function getJoke(){
    const response = await fetch(apiURL,options)
    const data = await response.json();

    jokeEl.innerText = data[0].joke;
}

btn1.addEventListener('click',getJoke)