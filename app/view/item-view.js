const Marionette = require("backbone.marionette"),
	  _ = require("underscore"),
	  DropDownList = require("../component/dropdown/dropdown.js"),
	  NumericTextBox = require("../component/numerictextbox/numeric-text-box.js"),
	  AddButtonView = require("./add-button-view.js"),
	  MaterialDropDownFactory = require("../factory/material-dropdown-factory.js"),
	  ColorDropDownFactory = require("../factory/color-component-factory.js"),
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
	childViewEvents: {
		"material:drop:down:change": "onMaterialChange",
		"add:item:click": "onAddItemClick"
	},
	onDomRefresh: function () {
		this.showChildView("numeric", new NumericTextBox({
			kendoNumericTextBox: {format: "n0"}
		}));
		this.onMaterialChange(this.model.get("type"));
		this._showMaterialDropDown();
		this.showChildView("add", new AddButtonView());
	},
	onMaterialChange: function (material) {
		const colorDropDown = ColorDropDownFactory.create(material);
		if (colorDropDown) {
			this.showChildView("color", colorDropDown);
		} else {
			this.detachChildView("color");
		}
	},
	onAddItemClick: function () {
		this.trigger("add:item", this.model.toJSON());
	},
	_showMaterialDropDown: function () {
		const materialDropDown = MaterialDropDownFactory.create(this.model.get("type"));
		if (materialDropDown) {
			this.showChildView("material", materialDropDown);
		}
	}
});

module.exports = ItemView;