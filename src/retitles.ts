import { Retitles } from "./api/types";
import { config } from "./config";

export const retitles: Retitles = {
	title: config.DEFAULT_TITLE,
	subtitle: "",
	count: 0,
	viewstyle: config.DEFAULT_VIEWSTYLE,

	setTitle: function (options) {
		if ( this.checkTypes(options) ) {
			this.title = options.title ? options.title : "";
			this.subtitle = options.subtitle ? options.subtitle : "";
			this.count = options.count ? options.count : 0;
			this.viewstyle = options.viewstyle && config.ENABLED_VIEWSTYLES.includes(options.viewstyle) ? options.viewstyle : config.DEFAULT_VIEWSTYLE;

			this.updatedView();	
		}
	},

	updatedView: function () {
		switch (this.viewstyle) {
			case 0:
				document.title = `
					${this.count ? `(${this.count})` : ""}
					${this.subtitle ? this.subtitle : ""}
					${this.title && this.subtitle ? "|" : ""}
					${this.title ? this.title : ""}
				`;
				break;

			case 1:
				document.title = `
					${this.count ? `(${this.count})` : ""}
					${this.title ? this.title : ""}
					${this.title && this.subtitle ? "-" : ""}
					${this.subtitle ? this.subtitle : ""}
				`;
				break;

			case 2:
				document.title = `
					${this.count ? `(${this.count})` : ""}
					${this.title ? this.title : ""}
					${this.title && this.subtitle ? "/" : ""}
					${this.subtitle ? this.subtitle : ""}
				`;
				break;
		}
	},

	checkTypes: function (options) {
		if (
			typeof options !== undefined &&
			typeof options.title === "string" &&
			typeof options.subtitle === "string" &&
			typeof options.count === "number"
		) {
			return true;
		} else {
			return false;
		}
	},
}
