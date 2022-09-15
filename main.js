const id = document.getElementById('advice-id');
const advice = document.getElementById('advice');
const diceBtn = document.getElementById('dice-btn');

function response () {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        advice.innerText = data.slip.advice;
        id.innerText = data.slip.id;
    });
}

response();

diceBtn.addEventListener('click', ()=>{
    response()
})