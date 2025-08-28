// Function to update the clock
function updateClock() {
    const now = new Date();
    const date = now.toISOString().split('T')[0];
    const time = now.toTimeString().split(' ')[0];
    const newContent = `${date} ${time}`;
    
    const clockContainer = document.getElementById('time');
    const oldContent = clockContainer.dataset.content || '';
    clockContainer.dataset.content = newContent;
    
    // Clear container
    clockContainer.innerHTML = '';
    
    // Create characters
    for (let i = 0; i < newContent.length; i++) {
        const wrapper = document.createElement('div');
        wrapper.className = 'char-wrapper';
        
        const char = document.createElement('div');
        char.className = 'char';
        char.textContent = newContent[i];
        
        // If character has changed, add animation
        if (newContent[i] !== oldContent[i]) {
            char.classList.add('new');
            // Trigger animation after a small delay
            setTimeout(() => {
                char.classList.add('active');
            }, 50);
        }
        
        wrapper.appendChild(char);
        clockContainer.appendChild(wrapper);
    }
}

// Update clock every second
setInterval(updateClock, 1000);

// Initial display
updateClock();