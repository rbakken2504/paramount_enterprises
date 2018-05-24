const Marionette = require("backbone.marionette"),
	  _ = require("underscore"),
	  DropDownList = require("./component/dropdown.js");

const RootView = Marionette.View.extend({
	template: _.template("<div id='content-region'></div>"),
	regions: { content: "#content-region" },
	onRender: function () {
		const dropDownList = new DropDownList({
			kendoDropDownList: {
				dataSource: {
					data: ["One", "Two", "Three"]
				}
			}
		});
		this.showChildView("content", dropDownList);
	}
});

const App = Marionette.Application.extend({
	region: "#materials-container",
	onStart: function () {
		this.showView(new RootView());
	}
});

module.exports = App;