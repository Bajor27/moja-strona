const trainings = [];
const goal = 3;

const msg = document.querySelector('#msg');
const circles = document.querySelectorAll('.circle');
const form = document.querySelector('#form');
const list = document.querySelector('#list');

function totalMinutes(list) {
let sum = 0;

list.forEach((t) => {
    sum = sum + t.minutes;
});
    return sum;
}
 function render() {
    list.innerHTML = '';
    trainings.forEach((t) => {
        const li = document.createElement('li');
        li.textContent = `${t.type} · ${t.minutes} min`;
        list.appendChild(li);
    });
    circles.forEach((circle, i) => {
        const done = i < trainings.length;
        circle.classList.toggle('done'
        , done);
        circle.textContent = done ? '✓' : '+';
    });
    const rest = goal - trainings.length;
    if (rest > 0) {
        msg.textContent = `Do celu brakuje: ${rest}`;
    } else {
        msg.textContent = 'Cel tygodnia zrobiony! 🎉';
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    trainings.push({
        type: data.get('type'),
        minutes: Number(data.get('minutes')),
    });
    localStorage.setItem('trainings', JSON.stringify(trainings));
    render();
 });
 render();



