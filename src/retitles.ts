import type { Title } from "./types";
import { config } from "./config";

class Retitles {
	private title: string = config.DEFAULT_TITLE;
	private subtitle: string = "";
	private count: number = 0;
	private viewstyle: number = config.DEFAULT_VIEWSTYLE;

	constructor(title: string = config.DEFAULT_TITLE) {
		if (typeof title === "string") this.title = title;
	};

	public setTitle(options: Title = {}) {
		this.title = options.title ? options.title : "";
		this.subtitle = options.subtitle ? options.subtitle : "";
		this.count = options.count ? options.count : 0;
		this.viewstyle = options.viewstyle && config.ENABLED_VIEWSTYLES.includes(options.viewstyle) ? options.viewstyle : config.DEFAULT_VIEWSTYLE;

		this.updateView();	
	};

	private updateView() {
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
	};
}

export const retitles = new Retitles();
