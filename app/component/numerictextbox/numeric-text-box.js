const $ = require("jquery"),
	  Marionette = require("backbone.marionette"),
	  _ = require("underscore");

require("kendo-ui-core");

const NumericTextBox = Marionette.View.extend({
	name: "NumericTextBox",
	template: _.noop,
	tagName: "input",
	initialize: function (options) {
		this.options = options;
		this._ensureRequiredOptions();
	},
	onDomRefresh: function () {
		this.$el.kendoNumericTextBox(this.options.kendoNumericTextBox);
	},
	onBeforeDestroy: function () {
		const kendoNumericTextBox = this.getKendoComponent();
		if (kendoNumericTextBox) {
			const wrapper = kendoNumericTextBox.wrapper;

			kendoNumericTextBox.destroy();
			wrapper.empty();
			wrapper.remove();
		}
	},
	getKendoComponent: function () {
		return this.$el.getKendoNumericTextBox();
	},
	_ensureRequiredOptions: function () {
		if (!this.options.kendoNumericTextBox) {
			throw new Error(this.name + " must have a [kendoNumericTextBox] option.")
		}
	}
});

module.exports = NumericTextBox;