setInterval(() => {
    const d = new Date();
    let h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    const c = h >= 12 ? "PM" : "AM";
    h=h%12 || 12;
    const time=document.getElementById("h");
    time.textContent=`${h.toString().padStart(2,"0")}:${m.toString().padStart(2,"7")}:${s.toString().padStart(2)}:${c}`;
    time.style.background="red";
    time.style.display = "inline-block";
    time.style.opacity = "0.7"; // Decrease overall opacity to 70%

    
    const hrotation = 30 * h + m / 2; // Each hour = 30 degrees, minute adjustment
    const mrotation = 6 * m;         // Each minute = 6 degrees
    const srotation = 6 * s;         // Each second = 6 degrees
  
    const hourHand = document.getElementById("hour");
    const minuteHand = document.getElementById("min");
    const secondHand = document.getElementById("sec");
  
    hourHand.style.transform = `rotate(${hrotation}deg)`;
    minuteHand.style.transform = `rotate(${mrotation}deg)`;
    secondHand.style.transform = `rotate(${srotation}deg)`;
  }, 1000);
  