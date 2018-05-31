const $ = require("jquery"),
	  _ = require("underscore"),
	  Marionette = require("backbone.marionette");

require("kendo-ui-core");

const DropDownList = Marionette.View.extend({
	tagName: "select",
	name: "DropDownList",
	template: _.noop,
	initialize: function (options) {
		this.options = options;
		this._ensureRequiredOptions();
	},
	onDomRefresh: function () {
		this.$el.kendoDropDownList(this.options.kendoDropDownList);
	},
	onBeforeDestroy: function () {
		const kendoDropDownList = this.getKendoComponent();
		if (kendoDropDownList) {
			const wrapper = kendoDropDownList.wrapper;

			kendoDropDownList.destroy();
			wrapper.empty();
			wrapper.remove();
		}
	},
	getKendoComponent: function () {
		return this.$el.getKendoDropDownList();
	},
	_ensureRequiredOptions: function () {
		if (!this.options.kendoDropDownList) {
			throw new Error(this.name + " must have a [kendoDropDownList] option.");
		}
	}
});

module.exports = DropDownList;