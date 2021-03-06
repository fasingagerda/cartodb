var _ = require('underscore');
var CoreView = require('backbone/core-view');
var TabPaneView = require('./tab-pane-view.js');
var TabPaneCollection = require('./tab-pane-collection');
var MixedLabelView = require('./tab-pane-mixed-view');
var ColorView = require('./tab-pane-color-view');

/**
 * Creates a tab pane, where the menu consists of text labels.
 *
 * Example usage:
 * {
 *   label: 'My label',
 *   createContentView: CoreView(),
 *   selected: false
 * }
 *
 * @param {Array} paneItems
 * @param {Object} options
 * @return {Object} instance of CoreView
 */
module.exports = function (paneItems, options) {
  options = options || {};
  var tabPaneItemLabelOptions = options.tabPaneItemLabelOptions;

  var items = paneItems.map(function (paneItem) {
    ['label', 'createContentView'].forEach(function (check) {
      if (!paneItem[check]) {
        throw new Error(check + ' should be provided');
      }
    });

    return {
      name: paneItem.name,
      selected: paneItem.selected,
      label: paneItem.label,
      color: paneItem.color,
      kind: paneItem.kind,
      selectedChild: paneItem.selectedChild,
      createButtonView: function () {
        if (paneItem.type === 'color') {
          return new ColorView(_.extend({ model: this }, tabPaneItemLabelOptions));
        } else {
          return new MixedLabelView(_.extend({ model: this, type: paneItem.type }, tabPaneItemLabelOptions));
        }
      },
      createContentView: function () {
        return paneItem.createContentView && paneItem.createContentView() || new CoreView();
      }
    };
  });

  this.collection = new TabPaneCollection(items);

  var tabPaneOptions = options.tabPaneOptions;

  return new TabPaneView(
    _.extend(
      { collection: this.collection },
      tabPaneOptions
    )
  );
};
