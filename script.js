document.addEventListener("DOMContentLoaded", () => {
    // ... codul anterior pentru limba ...

    const foodBtn = document.getElementById('btn-food');
    const drinksBtn = document.getElementById('btn-drinks');
    const navElements = document.querySelectorAll('.nav-logo, .nav-links a, .lang-btn');

    drinksBtn.addEventListener('click', () => {
        // Schimbăm navbar în alb pentru fundalul închis de la băuturi
        navElements.forEach(el => el.style.color = "#ffffff");
        document.querySelector('.lang-btn').style.borderColor = "#ffffff";
    });

    foodBtn.addEventListener('click', () => {
        // Schimbăm navbar în negru pentru fundalul bej de la mâncare
        navElements.forEach(el => el.style.color = "#000000");
        document.querySelector('.lang-btn').style.borderColor = "#000000";
    });
});