// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require_tree .

jQuery("document").ready(function() {
	$('li.product .actions a').twipsy({
		placement: 'below'
	});
	
	$('li.product').hover(function() {
		$(this).find('.actions').show();
	}, function() {
		$(this).find('.actions').hide();
	});
	
	$('li.product .actions a').click(function(e) {
		e.preventDefault();
		var panel = $('div.panels div.panel-container div.panel');
		// keep color + don't hide icons of $(this).closest('li.product');
		if (panel.is('.active')) {
			$('div.panels div.panel-container div.panel').removeClass('active');
		} else {
			$('div.panels div.panel-container div.panel').addClass('active');	
		}
		return false;
	});
	
	$('div.panels div.panel-container div.panel a.close').click(function(e) {
		$('div.panels div.panel-container div.panel').removeClass('active');
	});
});