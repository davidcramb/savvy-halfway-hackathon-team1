//ADD YOUR CUSTOM JAVASCRIPT AND jQUERY HERE
$('.gallery').on('click','img', function() {
   $(this).animate({
       'width':'50vh'
   },500);
   $('img').not($(this)).animate({'opacity':'0.2'}, 500);
});
