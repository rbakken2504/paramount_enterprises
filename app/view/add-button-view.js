const Marionette = require("backbone.marionette"),
	  _ = require("lodash");

const AddButtonView = Marionette.View.extend({
	tagName: "button",
	className: "btn btn-success",
	name: "ButtonView",
	template: _.template("Add Material"),
	triggers: {
		"click": "add:item:click"
	}
});

module.exports = AddButtonView;