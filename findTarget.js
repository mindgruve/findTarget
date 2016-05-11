define(['jquery'], function ($) {

    /**
     * findTarget is used find the target specified on an elements "data-target" or an alternative 'data-' attribute.
     * data-target may have any complex set of custom selectors including the full suite available to jQuery
     * You can chain a set of selectors using a pipe (|) delimiter this allows you to perform complex traversals
     * Selectors
     *     "prev" select the element before the element provided
     *     "next" select the element after the element provided
     *     "parent" select the direct parent element of the element provided
     *     "parents <<CSS Selector>>" select all parents of the element provided. Optionally filtered by CSS Selector
     *     "child <<CSS Selector>>" select child elements of the element provided. You must provide a search CSS Selector
     *     "this" Select the element provided
     *     "<<CSS Selector>>" Select the elements that match the CSS Selector with jQuery
     *
     * @author Abishai Gray <agray@abishaigray.com>
     * @version: 1.1.1
     *
     * @param $elem The current element
     * @param override An alternative "data-" attribute to pull the target selector from. Pass true if you wish to override the 'target' in the next param
     * @param target primarily used internally for complex target selectors
     * @returns jQuery
     */
    function findTarget($elem, override, target) {
        var target = override === true && target ? target : (override && $elem.data(override) !== undefined ? $elem.data(override) : $elem.data('target'));
        var targetArray = target.split("|");

        if (targetArray.length > 1) {
            var subTarget = $elem;
            for (var i = 0; i < targetArray.length; i++) {
                subTarget = findTarget(
                    subTarget, true, targetArray[i]
                );
            }
            return subTarget;
        }

        switch (true) {
            case target === 'next':
                return $elem.next();
                break;

            case target === 'prev':
                return $elem.prev();
                break;

            case target === 'parent':
                return $elem.parent();
                break;

            case target.indexOf('parents') !== -1:
                var parentTarget = target.length > 8 ? target.substring(8) : null;
                return $elem.parents(parentTarget);
                break;

            case target.indexOf('child') !== -1:
                var childTarget = target.length > 6 ? target.substring(6) : null;
                return $elem.find(childTarget);
                break;

            case target === 'this':
                return $elem;
                break;

            default:
                return $(target);
                break;
        }
    }

    return findTarget;
});