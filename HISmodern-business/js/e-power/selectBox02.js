$(document).ready(function() {
 $('.select-contents').css('display', 'none');
 $('.select-header, .select-header01, .select-header02').toggle(function() {
   toggleContents($(this).parent().find('.select-contents'));
 }, function() { toggleContents($(this).parent().find('.select-contents')); });

 function toggleContents(el) {
  $('.select-contents').css('display', 'none');
  if (el.css('display') == 'none') el.fadeIn("slow");
  else el.fadeOut("slow");
 }
$('.select-contents a').click(function() {
 $(this).parent().parent().find('.select_box select').attr('selectedIndex', $('.select-contents a').index(this));
 $(this).parent().parent().find('.select-title').html($(this).html());
 $(this).parent().parent().find('.select-contents').fadeOut("slow");
 });
$(document).click(function() {
 $('.select-contents').fadeOut("slow");
  });
});