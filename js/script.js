(function($) {
$(function() {

  $('ul.tabs').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.wrapper').find('div.tab_caption').removeClass('active').eq($(this).index()).addClass('active');
  });

});
})(jQuery);