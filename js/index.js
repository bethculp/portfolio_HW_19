$('.toggle').on("click", function(){
    $(this).parent().find('.toggle-content').fadeToggle();
});