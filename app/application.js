const Marionette = require("backbone.marionette"),
	  _ = require("underscore");

const RootView = Marionette.View.extend({
	template: _.template("<h5>Materials Grid Goes Here At Some Point</h5>"),
});

const App = Marionette.Application.extend({
	region: "#materials-container",
	onStart: function () {
		this.showView(new RootView());
	}
});

module.exports = App;