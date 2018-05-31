const Backbone = require("backbone"),
	  Marionette = require("backbone.marionette"),
	  _ = require("underscore"),
	  ItemView = require("./item-view.js"),
	  materialTableHTML = require("../template/material-table.html");

const TableBody = Marionette.CollectionView.extend({
	tagName: "tbody",
	childView: ItemView
});

let dummyCollection = new Backbone.Collection([
		{id: 1, type: "SIDING"},
		{id: 2, type: "POLE"},
		{id: 3, type: "TRIM_LENGTH"}
	]);

const TableView = Marionette.View.extend({
	name: "TableView",
	tagName: "table",
	className: "table table-striped table-dark",
	template: _.template(materialTableHTML),
	regions: {
		body: {
			el: "tbody",
			replaceElement: true
		}
	},
	onDomRefresh: function () {
		this.showChildView("body", new TableBody({collection: dummyCollection}));
	}
});

module.exports = TableView;