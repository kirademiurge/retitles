export {};

declare global {
  interface Title {
    title?: string,
	  subtitle?: string,
	  count?: number,
	  viewstyle?: number,
  }
  interface Retitles {
    setTitle: (options: Title) => void;
  }
}
