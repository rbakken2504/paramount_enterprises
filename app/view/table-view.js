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
		{id: 1, type: "SIDING", label: "Siding"},
		{id: 2, type: "SPECIALTY_SIDING", label: "Specialty Siding"},
		{id: 3, type: "TRIM_LENGTH", label: "Trim Length"},
		{id: 4, type: "CORNER_TRIM", label: "Corner Trim"},
		{id: 5, type: "DRIP_CAP_TRIM", label: "Drip Cap Trim"},
		{id: 6, type: "J_TRIM", label: "J Trim"},
		{id: 7, type: "POLE", label: "Pole"},
		{id: 8, type: "SOFFIT", label: "Soffit"},
		{id: 9, type: "FASCIA", label: "Fascia"},
		{id: 10, type: "SPECIALTY_TRIM", label: "Specialty Siding"}
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