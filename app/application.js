const Marionette = require("backbone.marionette"),
	  _ = require("underscore"),
	  TableView = require("./view/table-view.js");

const RootView = Marionette.View.extend({
	template: _.template("<div id='content-region'></div>"),
	regions: { content: "#content-region" },
	onRender: function () {
		this.showChildView("content", new TableView());
	}
});

const App = Marionette.Application.extend({
	region: "#materials-container",
	onStart: function () {
		this.showView(new RootView());
	}
});

module.exports = App;