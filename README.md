#findTarget

## Version: 1.1.0


findTarget is used find the target specified on an elements "data-target" or an alternative 'data-' attribute.

data-target may have any complex set of custom selectors including the full suite available to jQuery
You can chain a set of selectors using a pipe (|) delimiter this allows you to perform complex traversals

Selectors
    "prev" select the element before the element provided
    "next" select the element after the element provided
    "parent" select the direct parent element of the element provided
    "parents <<CSS Selector>>" select all parents of the element provided. Optionally filtered by CSS Selector
    "child <<CSS Selector>>" select child elements of the element provided. You must provide a search CSS Selector
    "this" Select the element provided
    "<<CSS Selector>>" Select the elements that match the CSS Selector with jQuery


Abishai Gray <agray@abishaigray.com>
