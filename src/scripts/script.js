$(() => {
    $('#myProfile').hide();
    $('.navItems').hide();

    ///////////////////////////////
    ///////  Handle Click  ////////
    //////////////////////////////
    // Profile Name 
    $('#myName').on('click', () => {
        console.log("Detected click");
        $('#myProfile').toggle();
    });

    // Project Menu click
    $('#projectsMenu').on('click', () => {
        $('.navItems').hide();
        $('#projectArea').show();
    });

    // Game Menu click
    $('#gameMenu').on('click', () => {
        $('.navItems').hide();
        $('#gameArea').show();
    });

    $('#contactMenu').on('click', () => {
        $('.navItems').hide();
        $('#contactArea').show();
    });

    ////////////////////////////////
    //////  Clock Display  /////////
    ///////////////////////////////
    
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
            wrapper.className = 'digit-wrapper';
            
            const digit = document.createElement('div');
            digit.className = 'digit';
            digit.textContent = newContent[i];
            
            // If character has changed, add animation
            if (newContent[i] !== oldContent[i]) {
                digit.classList.add('new');
                requestAnimationFrame(() => {
                    digit.classList.add('slide-down');
                });
            }
            
            wrapper.appendChild(digit);
            clockContainer.appendChild(wrapper);
        }
    }

    // Update clock every second
    setInterval(updateClock, 1000);

    // Initial display
    updateClock();
});