const CommonDropDown = require("../component/dropdown/common-dropdown.js");

const createHardieVinylDropDown = function() {
	return new CommonDropDown({
		data: [ 
			{id: "HARDIE", text: "Hardie"},
			{id: "VINYL", text: "Vinyl"}
		]
	});
}


const MATERIAL_DROPDOWN_FACTORY = {
	CORNER_TRIM: function () {
		return createHardieVinylDropDown();
	},
	DRIP_CAP_TRIM: function () {
		return new CommonDropDown({
			data: [
				{id: "METAL", text: "Metal"},
				{id: "VINYL", text: "Vinyl"}
			]
		});
	},
	FASCIA: function () {
		return new CommonDropDown({
			data: [
				{id: "VENTED", text: "Vented"},
				{id: "NON_VENTED", text: "Non-Vented"}
			]
		});
	},
	J_TRIM: function () {
		return new CommonDropDown({
			data: [
				{id: "REGULAR", text: "Regular"},
				{id: "EXTRA_WIDE", text: "Extra Wide"},
				{id: "SHAKE", text: "Shake"},
				{id: "FINISH", text: "Finish"}
			]
		});
	},
	POLE: function () {
		return new CommonDropDown({
			data: [
				{id: "SMALL", text: "Small Pole"},
				{id: "SMALL_DETAIL", text: "Small Detailed Pole"},
				{id: "LARGE", text: "Large Pole"},
				{id: "LARGE_DECORATIVE", text: "Large Decorated Pole"}
			]
		});
	},
	SIDING: function () {
		return createHardieVinylDropDown();
	},
	SOFFIT: function () {
		return new CommonDropDown({
			data: [
				{id: 6, text: "6\""},
				{id: 8, text: "8\""}
			]
		});
	},
	SPECIALTY_SIDING: function () {
		return new CommonDropDown({
			data: [
				{id: "BOARD_BATTEN", text: "Board and Batten"},
				{id: "PANEL", text: "Panel"},
				{id: "SHAKE", text: "Shakes"}
			]
		});
	},
	SPECIALTY_TRIM: function () {
		return new CommonDropDown({
			data: [
				{id: "CORBEILS", text: "Corbeils"},
				{id: "GINGER", text: "Gingerbreading"}
			]
		});
	},
	TRIM_LENGTH: function () {
		return new CommonDropDown({
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