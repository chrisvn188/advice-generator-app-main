const adviceId = document.querySelector('.js-advice-id');
const adviceContent = document.querySelector('.js-advice-content');
const diceBtn = document.querySelector('.js-dice-btn');

// get random advice using the Advice Slip API
const URL = 'https://api.adviceslip.com/advice';

async function getAdvice() {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            return Error(response.statusText);
        }
        const { slip } = await response.json();
        displayAdvice(slip);
    } catch (error) {
        console.log(error);
        alert('Failed to fetch new advice');
    }
}

function displayAdvice(data) {
    adviceId.textContent = `Advice #${data.id}`;
    adviceContent.textContent = `${data.advice}`;
}

// handle click on dice btn to get random advice
diceBtn.addEventListener('click', getAdvice);
