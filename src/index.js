const deadline = '2022-02-26 19:30';
let intervalId;

const fireworks = new Fireworks(
    document.querySelector('.fireworks-container'),
    {
        particles: 100
    });

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

function updateCountdown() {
    const total = Math.max(0, Date.parse(deadline) - new Date());
    const milliseconds = total % 1000;
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    let desc = '';

    if (days > 0) {
        desc += days + 'd ';
    }

    desc += pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2) + '.' + pad(milliseconds, 3)

    var el = document.getElementById('countdown');
    el.innerText = desc;

    if (total == 0) {
        window.clearInterval(intervalId);
        el.classList.add('countdown--expired');
        fireworks.start();
    }
}

intervalId = window.setInterval(updateCountdown, 1);
