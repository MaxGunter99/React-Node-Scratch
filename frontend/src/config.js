const config = {
	APP_NAME: "Multi-Tool",

	primaryColor: "#74c8ae",
	secondaryColor: "#F4A127",
	tertiaryColor: "#FFDAC1",

	primaryBackgroundColor: "#CFDDD2",
	secondaryBackgroundColor: "#B3BEB5",

	primaryFont: '"Notable", sans-serif',
	primaryFontSize: "5rem",
	primaryFontWeight: 400,
};

document.documentElement.style.setProperty("--primary-color", config.primaryColor);
document.documentElement.style.setProperty("--secondary-color", config.secondaryColor);
document.documentElement.style.setProperty("--tertiary-color", config.tertiaryColor);
document.documentElement.style.setProperty(
	"--primary-background-color",
	config.primaryBackgroundColor
);
document.documentElement.style.setProperty(
	"--secondary-background-color",
	config.secondaryBackgroundColor
);

document.documentElement.style.setProperty("--primary-font", config.primaryFont);
document.documentElement.style.setProperty("--primary-font-size", config.primaryFontSize);
document.documentElement.style.setProperty("--primary-font-weight", config.primaryFontWeight);

export default config;
