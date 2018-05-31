const Marionette = require("backbone.marionette"),
	  _ = require("underscore"),
	  DropDownList = require("../component/dropdown/dropdown.js"),
	  NumericTextBox = require("../component/numerictextbox/numeric-text-box.js"),
	  AddButtonView = require("./add-button-view.js"),
	  MaterialDropDownFactory = require("../factory/material-dropdown-factory.js"),
	  viewTemplate = require("../template/item-view.html");

const ItemView = Marionette.View.extend({
	name: "ItemView",
	tagName: "tr",
	template: _.template(viewTemplate),
	regions: {
		numeric: "[name=numeric-region]",
		material: "[name=select-material-region]",
		color: "[name=select-color-region]",
		add: "[name=add-region]"
	},
	onDomRefresh: function () {
		this.showChildView("numeric", new NumericTextBox({
			kendoNumericTextBox: {format: "n0"}
		}));
		this.showChildView("material", MaterialDropDownFactory.create(this.model.get("type")));
		this.showChildView("color", new DropDownList({
			kendoDropDownList: {
				dataSource: {
					data: [
						"Red",
						"Green",
						"Yellow",
						"Blue"
					]
				}
			}
		}));
		this.showChildView("add", new AddButtonView());
	}
});

module.exports = ItemView;