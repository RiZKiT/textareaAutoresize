textareaAutoresize
==================

A framework independent textarea autoresize, compatible with excessive styled textareas and html context


How to Use
----------

_default: 'textarea', simple selector for best compatibility with old browsers_  

	textareaAutoresize();	

_element_  

	textareaAutoresize(textarea);

_element collection_  

	textareaAutoresize(document.getElementsByTagName('textarea'));

_complex selector, not compatible with all browsers_  

	textareaAutoresize('form > textarea[placeholder]');

_jQuery / MooTools_  

	textareaAutoresize($(selector));

_MooTools_  

	textareaAutoresize($$(selector));
	
pros
----

* no framework dependencies
* works with complex textarea styles and no problems mit html entities, because it works without a mirror element (unlike many other implementations)
* shrinks too (unlike some other implementations)

cons
----

* height animation via css transition isnt possible with this resize implementation (afaik)

info
----
* compatibility: depending of the selector used, the more complex, the less IE
* minimal height can be set via 'min-height' css style or the 'rows' attribute on the textarea
* delay/throttle the resize event has been tested (was jaggy) and removed for improved usability
* no forEach() over the elements, because it is not supported for nodelists and converting to array would be more code

inspired by
-----------
 * [http://phaistonian.pblogs.gr/expanding-textareas-the-easy-and-clean-way.html]
 * [http://chuvash.eu/2011/12/14/the-cleanest-auto-resize-for-a-textarea/]
