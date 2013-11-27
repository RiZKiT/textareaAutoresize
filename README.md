textareaAutoresize
==================

A framework independent textarea autoresize, compatible with excessive styled textareas and html context


Examples:
---------

_default: 'textarea', simple selector for best compatibility with old browsers_  
`textareaAutoresize();`

_element_  
`textareaAutoresize(textarea);`

_element collection_  
`textareaAutoresize(document.getElementsByTagName('textarea'));`

_complex selector, not compatible with all browsers_  
`textareaAutoresize('form > textarea[placeholder]');`

_jQuery / MooTools_  
`textareaAutoresize($(selector));`

_MooTools_  
`textareaAutoresize($$(selector));`
