// Some general UI pack related JS
// Extend JS String with repeat method

/*
String.prototype.repeat = function(num) {
    return new Array(num + 1).join(this);
};
*/
(function($) {


  $(function() {    // Custom Selects
    $("select[name='adult']").selectpicker({style: 'btn-default', menuStyle: 'dropdown-inverse'});
    $("select[name='child']").selectpicker({style: 'btn-default', menuStyle: 'dropdown-inverse'});
    $("select[name='infant']").selectpicker({style: 'btn-default', menuStyle: 'dropdown-inverse'});
	
    // Switch
    $("[data-toggle='switch']").wrap('<div class="switch" />').parent().bootstrapSwitch();

  });
  
})(jQuery);