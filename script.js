function updateClock() {
    const now = new Date();

    const year = now.getFullYear();
    const month = now.toLocaleString('default', { month: 'long' });
    const day = now.getDate();

    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

   //  const ampm = hours >= 12 ? 'PM' : 'AM';
   //  hours = hours % 12;
   //  hours = hours ? hours : 12; // the hour '0' should be '12'
   //  hours = hours.toString().padStart(2, '0');

    document.getElementById('date').innerText = `${day} ${month} ${year}`;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
   // document.getElementById('ampm').innerText = ampm;
}

setInterval(updateClock, 1000);
updateClock();
