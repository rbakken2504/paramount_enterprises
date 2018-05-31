const Marionette = require("backbone.marionette"),
	  _ = require("lodash");

const AddButtonView = Marionette.View.extend({
	tagName: "button",
	className: "btn btn-success",
	name: "ButtonView",
	template: _.template("Add Material"),
	events: {
		"click": "onButtonClick"
	},
	onButtonClick: function () {
		console.log("Button Clicked!");
	}
});

module.exports = AddButtonView;