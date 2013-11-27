**
 * Textarea Autoresize
 *
 *  examples:
 *  // you don't need onload if script runs at the end of the page or inside another event
 *  window.onload = function() {
 *  	textareaAutoresize(); // default: 'textarea', simple selector for best compatibility with old browsers
 *	textareaAutoresize(textarea); // element
 *	textareaAutoresize(document.getElementsByTagName('textarea')); // element collection
 *	textareaAutoresize('textarea'); // simple selector, not compatible with all browsers
 *	textareaAutoresize('form > textarea[placeholder]'); // complex selector, not compatible with all browsers
 *	textareaAutoresize($(selector)); // jQuery / MooTools
 *	textareaAutoresize($$(selector)); // MooTools
 *  }
 *
 *  pros:
 *  - works with complex textarea styles and no problems mit html entities,
 *    because it works without a mirror element (unlike many other implementations)
 *  - shrinks too (unlike some other implementations)
 *  - no framework dependencies
 *
 *  cons:
 *  - height animation via css transition isn´t possible with this resize implementation (afaik)
 *
 *  info:
 *  - compatibility: depending of the selector used, the more complex, the less IE
 *  - minimal height can be set via 'min-height' css style or the 'rows' attribute on the textarea
 *  - delay/throttle the resize event has been tested (was jaggy) and removed for improved usability
 *  - no forEach() over the elements, because it is not supported for nodelists and converting to array would be more code
 *
 *  inspired by:
 *  - http://phaistonian.pblogs.gr/expanding-textareas-the-easy-and-clean-way.html
 * 	- http://chuvash.eu/2011/12/14/the-cleanest-auto-resize-for-a-textarea/
 *
 * 	@author	Aicke Schulz <aicke.schulz@gmail.com>
 *
 * 	@param selectorOrElements [object|string|null]
 */
var textareaAutoresize = function(selectorOrElements){

	var elements;

	/* get textarea elements */

	if (!selectorOrElements) selectorOrElements = document.body.getElementsByTagName('textarea');
	switch (typeof selectorOrElements) {
		case 'object':
			elements = selectorOrElements.length ? selectorOrElements : [selectorOrElements];
			break;
		case 'string':
			elements = document.body.querySelectorAll(selectorOrElements); /* works with IE8+ */
			break;
		default:
			return false;
	}
	if (!(elements && elements.length)) return false;

	/* handle resize */

	function resize(element, offset) {
		element.style.height = 'auto'; /* needed to get scrollHeight */
		element.style.height = (element.scrollHeight  + offset ) + 'px';
	}

	for (var i = 0; i < elements.length; i++) {

		if (!elements[i]._autoresize) {

			var element = elements[i],
				offset= !window.opera ? (element.offsetHeight - element.clientHeight) : (element.offsetHeight + parseInt(window.getComputedStyle(element, null).getPropertyValue('border-top-width')));

			/* initial resize */
			element._autoresize = true;
			element.style.overflowY = 'hidden';
			element.style.resize = 'none';
			resize(element, offset);

			/* add events */
			if (element.addEventListener) {
				element.addEventListener('input', function() { resize(element, offset); });
			} else if (element['attachEvent']) {
				element.attachEvent('onkeyup',  function() { resize(element, offset); });
			}

		}

	}

	return elements;

};
