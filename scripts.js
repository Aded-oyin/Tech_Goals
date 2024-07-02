function updateTime() {
    const currentTimeUTC = document.getElementById('currentTimeUTC');
    const currentDay = document.getElementById('currentDay');

    const now = new Date();
    const utcTime = now.toUTCString().slice(17, 25);
    const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });

    currentTimeUTC.textContent = `Current Time (UTC): ${utcTime}`;
    currentDay.textContent = `Current Day: ${dayOfWeek}`;
}

updateTime();
setInterval(updateTime, 1000);
