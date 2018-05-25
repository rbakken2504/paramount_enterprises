const Marionette = require("backbone.marionette"),
	  _ = require("underscore"),
	  DropDownList = require("./component/dropdown/dropdown.js"),
	  NumericTextBox = require("./component/numerictextbox/numeric-text-box.js"),
	  requireText = require("require-text");
	  //materialTableHTML = requireText("./template/material-table.html", require);

const tableHTML = "" +
	"<thead>" +
	  "<tr>" +
	    "<th scope='col'>#</th>" +
	    "<th scope='col'>Material</th>" +
	    "<th scope='col'></th>" +
	  "</tr>" +
	"</thead>" +
	"<tbody>" +
	  "<tr>" +
	    "<th scope='row' id='numeric-1'></th>" +
	    "<td id='material-1'></td>" +
	    "<td></td>" +
	  "</tr>" +
	  "<tr>" +
	    "<th scope='row' id='numeric-2'></th>" +
	    "<td id='material-2'></td>" +
	    "<td></td>" +
	  "</tr>" +
	"</tbody>";

const dropDownListOne = new DropDownList({
	kendoDropDownList: {
		dataSource: {
			data: ["One", "Two", "Three"]
		}
	}
});
const dropDownListTwo = new DropDownList({
	kendoDropDownList: {
		dataSource: {
			data: ["Foo", "Bar", "Baz"]
		}
	}
});
const numericTextBox = new NumericTextBox({
	kendoNumericTextBox: {format: "n0"}
});
const numericTextBoxTwo = new NumericTextBox({
	kendoNumericTextBox: {format: "n0"}
});

const TableView = Marionette.View.extend({
	tagName: "table",
	className: "table table-striped table-dark",
	template: _.template(tableHTML),
	regions: {
		numericOne: "#numeric-1",
		numericTwo: "#numeric-2",
		materialOne: "#material-1",
		materialTwo: "#material-2"
	},
	onAttach: function () {
		this.showChildView("numericOne", numericTextBox);
		this.showChildView("numericTwo", numericTextBoxTwo);
		this.showChildView("materialOne", dropDownListOne);
		this.showChildView("materialTwo", dropDownListTwo);
	}
});



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