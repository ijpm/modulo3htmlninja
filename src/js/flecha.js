$('#linkflecha').on('click',function (e) {
    e.preventDefault();
    $('html, body').stop().animate({
        'scrollTop': 0
    }, 900, 'swing');
});