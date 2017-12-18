'use strict';

var getCurrentItem = require('./getCurrentItem');
var getListForItem = require('./getListForItem');

/**
 * Return the parent list block, from current selection or from a node (paragraph in a list item).
 *
 * @param {PluginOptions} opts
 * @param {Slate.State} state
 * @param {Slate.Block} block?
 * @return {Slate.Block || Void}
 */
function getCurrentList(opts, state, block) {
    var item = getCurrentItem(opts, state, block);

    if (!item) {
        return null;
    }

    return getListForItem(opts, state, item);
}

module.exports = getCurrentList;