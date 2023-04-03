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

})