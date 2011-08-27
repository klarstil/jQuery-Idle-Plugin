(function($) {
	
	/**
	 * $.fn.idle
	 *
	 * This plugin transforms the lame setTimeout()
	 * into the beloved jQuery syntax
	 *
	 * @author: s.pohl <klarstil@googlemail.com>
	 * @date: 2011-08-27
	 * @copyright: MIT
	 *
	 * @param {int} time in milliseconds
	 * @return this
	 */
	$.fn.idle = function(time) {
	
		var obj = $(this);
		obj.queue(function() {
			setTimeout(function() {
				obj.dequeue();
			}, time);
		});
		
		/** Return this for jQuery's chaining support */
		return this;
	}

})(jQuery);