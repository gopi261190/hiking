$(".icon").click(function () {
    $('ul').slideToggle('medium', function () {
        if ($(this).is(':visible'))
            $(this).css('display', 'flex');
    });
});