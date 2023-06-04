export type Title = {
	title: string,
	subtitle: string,
	count: 0,
	viewstyle: number,
};

export type Retitles = Title & {
	setTitle: (options: Title) => void,
	updatedView: () => void,
	checkTypes: (options: Title) => boolean,
};
