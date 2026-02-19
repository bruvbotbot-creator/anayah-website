// Set the target date for university departure
const targetDate = new Date('2026-09-15T00:00:00').getTime();

// Function to update the university countdown
function updateUniCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('uni-days').textContent = days;
        document.getElementById('uni-hours').textContent = hours;
        document.getElementById('uni-minutes').textContent = minutes;
        document.getElementById('uni-seconds').textContent = seconds;
    } else {
        // If the date has passed
        document.getElementById('uni-days').textContent = 0;
        document.getElementById('uni-hours').textContent = 0;
        document.getElementById('uni-minutes').textContent = 0;
        document.getElementById('uni-seconds').textContent = 0;
    }
}

// Function to count Saturdays left with dad
function updateSaturdayCountdown() {
    const now = new Date();
    const target = new Date('2026-09-15T00:00:00');
    
    let saturdayCount = 0;
    let currentDate = new Date(now);
    
    // Find the next Saturday from today
    const daysUntilSaturday = (6 - currentDate.getDay()) % 7;
    if (daysUntilSaturday === 0 && currentDate.getDay() === 6) {
        // If today is Saturday, count it
        saturdayCount = 1;
        currentDate.setDate(currentDate.getDate() + 7);
    } else {
        // Go to next Saturday
        currentDate.setDate(currentDate.getDate() + daysUntilSaturday);
    }
    
    // Count Saturdays until target date
    while (currentDate < target) {
        saturdayCount++;
        currentDate.setDate(currentDate.getDate() + 7); // Next Saturday
    }
    
    document.getElementById('saturdays-left').textContent = saturdayCount;
}

// Function to add some visual flair
function addVisualEffects() {
    // Add a subtle pulse to the Saturday countdown
    const saturdayElement = document.getElementById('saturdays-left');
    saturdayElement.style.animation = 'pulse 2s ease-in-out infinite';
    
    // Add CSS for pulse animation if it doesn't exist
    if (!document.getElementById('pulse-style')) {
        const style = document.createElement('style');
        style.id = 'pulse-style';
        style.textContent = `
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize and start the countdowns
function init() {
    updateUniCountdown();
    updateSaturdayCountdown();
    addVisualEffects();
    
    // Update university countdown every second
    setInterval(updateUniCountdown, 1000);
    
    // Update Saturday countdown every hour (or when page loads)
    setInterval(updateSaturdayCountdown, 3600000);
}

// Start when page loads
document.addEventListener('DOMContentLoaded', init);

// Add some interactivity - click on Saturday counter for a message
document.addEventListener('DOMContentLoaded', function() {
    const saturdayCounter = document.getElementById('saturday-countdown');
    if (saturdayCounter) {
        saturdayCounter.addEventListener('click', function() {
            const hearts = document.querySelector('.hearts');
            if (hearts) {
                hearts.textContent = '💙❤️💙❤️💙';
                setTimeout(() => {
                    hearts.textContent = '💙';
                }, 2000);
            }
        });
    }
});