const config = {
	APP_NAME: "Multi-Tool",

	// primaryColor: "#74c8ae",
	// secondaryColor: "#F4A127",
	// tertiaryColor: "#FFDAC1",
	// primaryBackgroundColor: "#CFDDD2",
	// secondaryBackgroundColor: "#B3BEB5",

	// COOL BLUE
	// primaryColor: "#6DA39C",
	// secondaryColor: "#406E6D",
	// tertiaryColor: "#D0EBE5",
	// primaryBackgroundColor: "#F2F7F6",
	// secondaryBackgroundColor: "#DCE4E2",

	// COOL GREY
	// primaryColor: "#8AA29E",
	// secondaryColor: "#A5C4C0",
	// tertiaryColor: "#CFE1DC",
	// primaryBackgroundColor: "#F6F9F8",
	// secondaryBackgroundColor: "#E6ECEA",

	// ERIS MORN THEME
	primaryColor: "#4E5D52",
	secondaryColor: "#d9cd45",
	tertiaryColor: "#A9B9A3",
	primaryBackgroundColor: "#CFDDD2",
	secondaryBackgroundColor: "#DCE4E2",

	// primaryColor: "#FF7597",           // Bubblegum punch – playful but bold
	// secondaryColor: "#7161EF",         // Electric periwinkle – ADHD sparkle magic
	// tertiaryColor: "#FFD29D",          // Warm peach glow – inner child healing energy
	// primaryBackgroundColor: "#FDF0F3", // Light rose milk – cozy, soft, dreamy
	// secondaryBackgroundColor: "#DDE4F4", // Soft periwinkle sky – a little melancholy, a lot thoughtful

	primaryFont: '"Notable", sans-serif',
	primaryFontSize: "5rem",
	primaryFontWeight: 400,

	transitionTime: "0.1s",
	containerBorderRadius: "3px",
	standardPadding: "0.5em",
	standardIconSize: "20px",

	lambdaRed: "#e83944",

	// UNAUTHENTICATED MESSAGES
	textAreaMinHeight: "50px",
	textAreaMinWidth: "250px",
};

document.documentElement.style.setProperty("--primary-color", config.primaryColor);
document.documentElement.style.setProperty("--secondary-color", config.secondaryColor);
document.documentElement.style.setProperty("--tertiary-color", config.tertiaryColor);
document.documentElement.style.setProperty("--primary-background-color", config.primaryBackgroundColor);
document.documentElement.style.setProperty("--secondary-background-color", config.secondaryBackgroundColor);

document.documentElement.style.setProperty("--primary-font", config.primaryFont);
document.documentElement.style.setProperty("--primary-font-size", config.primaryFontSize);
document.documentElement.style.setProperty("--primary-font-weight", config.primaryFontWeight);

document.documentElement.style.setProperty("--transition-time", config.transitionTime);
document.documentElement.style.setProperty("--container-border-radius", config.containerBorderRadius);
document.documentElement.style.setProperty("--standard-padding", config.standardPadding);
document.documentElement.style.setProperty("--standard-icon-size", config.standardIconSize);

document.documentElement.style.setProperty("--lambda-red", config.lambdaRed);

document.documentElement.style.setProperty("--textarea-min-height", config.textAreaMinHeight);
document.documentElement.style.setProperty("--textarea-min-width", config.textAreaMinWidth);

export default config;
