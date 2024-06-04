function updateTime() {
    const screen = document.getElementById("screen");
    const now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    let pm = false

    if (hours > 12) {
        hours -= 12;
        pm = true
    } else if (hours === 0) {
    hours = 12;
    }
console.log(hours);
    // let time = `
    //     <p>
    //         <span class="hours">10</span>
    //         <span class="dots">:</span>
    //         <span class="minutes">58</span>
    //         <small class="seconds">58</small>
    //     </p>
    // `;
    let time = `
        <p>
            <span class="hours">${pm && hours < 10 ? `0${hours}` : hours}</span>
            <span class="dots">:</span>
            <span class="minutes">${minutes}</span>
            <small class="seconds">${seconds}</small>
        </p>
    `;

    screen.innerHTML = `${time}`;
}

setInterval(updateTime, 1000);
updateTime(); // initial call to display time immediately
