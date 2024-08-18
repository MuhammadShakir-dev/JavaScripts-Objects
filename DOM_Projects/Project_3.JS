
function udpateClock() { 
    const clockDiv = document.querySelector('.clockContainer');
    const date = new Date();
    clockDiv.textContent = date.toLocaleTimeString()
}

setInterval(udpateClock, 1000)


