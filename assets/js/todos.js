// Check off spesific todos by clicking

// document ready make your jQuery just run if the all document alredy loaded
$(document).ready(function() {
    $('li').click(function() {
        $(this).css('color', 'gray');
    })
})