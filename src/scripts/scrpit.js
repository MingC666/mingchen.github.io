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


    // const clock = $('<div id="clock"></div>');
    const clock = $('<div>').attr('id', 'clock');

    ////////////////////////////////
    //////  Date Time display  /////
    ///////////////////////////////
    function updateTime() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        var ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        if (hours == 0) hours = 12;
        var dateString = now.toDateString();
        var timeString = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + ampm;
        var timeString = `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`
        clock.text(dateString + ' ' + timeString);
    }

    setInterval(updateTime, 1000);
    const profile = $('#profile');
    profile.append(clock);
})