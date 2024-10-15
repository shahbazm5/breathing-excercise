const circle = document.querySelector('.circle');
const instruction = document.querySelector('#instruction');

let currentState = 'inhale';

setInterval(() => {
    switch (currentState) {
        case 'inhale':
            circle.classList.add('breathe-in');
            instruction.textContent = 'Inhale...';
            setTimeout(() => {
                currentState = 'hold';
            }, 2000);
            break;
        case 'hold':
            circle.classList.remove('breathe-in');
            instruction.textContent = 'Hold...';
            setTimeout(() => {
                currentState = 'exhale';
            }, 2000);
            break;
        case 'exhale':
            circle.classList.add('breathe-out');
            instruction.textContent = 'Exhale...';
            setTimeout(() => {
                currentState = 'hold';
            }, 2000);
            break;
    }
}, 4000);