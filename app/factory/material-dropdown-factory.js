const DropDownList = require("../component/dropdown/dropdown.js");

const MaterialDropDown = DropDownList.extend({
	name: "MaterialDropDown",
	initialize: function (options) {
		const materialOptions = {
			kendoDropDownList: {
				dataSource: {
					data: options.data
				},
				dataValueField: "id",
				dataTextField: "text"
			}
		};

		MaterialDropDown.__super__.initialize.call(this, materialOptions);
	}
});

const MATERIAL_DROPDOWN_FACTORY = {
	SIDING: function () {
		return new MaterialDropDown({
			data: [ 
				{id: "HARDIE", text: "Hardie"},
				{id: "VINYL", text: "Vinyl"}
			]
		});
	},
	POLE: function () {
		return new MaterialDropDown({
			data: [
				{id: "SMALL", text: "Small Pole"},
				{id: "SMALL_DETAIL", text: "Small Detailed Pole"},
				{id: "LARGE", text: "Large Pole"},
				{id: "LARGE_DECORATIVE", text: "Large Decorated Pole"}
			]
		});
	},
	TRIM_LENGTH: function () {
		return new MaterialDropDown({
			data: [
				{id: 2, text: "2'"},
				{id: 4, text: "4'"},
				{id: 6, text: "6'"},
				{id: 8, text: "8'"},
				{id: 10, text: "10'"},
				{id: 12, text: "12'"}
			]
		});
	}
};

module.exports = {
	create: function (type) {
		if (!type) {
			throw new Error("[type] is required");
		}

		const createDropDownFn = MATERIAL_DROPDOWN_FACTORY[type];
		if (!createDropDownFn) {
			throw new Error("${type} is not defined within the factory.");
		}

		return createDropDownFn();
	}
}