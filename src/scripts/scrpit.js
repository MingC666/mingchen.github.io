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
    })

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
    //////  Date Time display  /////
    ///////////////////////////////

    // Function to update the clock
    function updateFancyClock() {
        const now = new Date();

        // Format date and time
        const date = now.toISOString().split('T')[0]; // YYYY-MM-DD
        const time = now.toTimeString().split(' ')[0]; // HH:MM:SS
        const newContent = `${date} ${time}`; // Combine date and time

        // Get the clock container
        const clockContainer = document.getElementById('time');

        // Update the clock content
        clockContainer.textContent = newContent;
    }

    // Update the clock every second
    setInterval(updateFancyClock, 1000);

    // Initial call to display the clock immediately
    updateFancyClock();
})