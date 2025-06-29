const config = {
	APP_NAME: "Multi-Tool",

	// -----------------
	colorThemes: {
		minty: {
			primaryColor: "#74c8ae",
			secondaryColor: "#F4A127",
			tertiaryColor: "#FFDAC1",
			primaryBackgroundColor: "#CFDDD2",
			secondaryBackgroundColor: "#B3BEB5",
		},

		"cool blue": {
			primaryColor: "#6DA39C",
			secondaryColor: "#406E6D",
			tertiaryColor: "#D0EBE5",
			primaryBackgroundColor: "#F2F7F6",
			secondaryBackgroundColor: "#DCE4E2",
		},

		"cool grey": {
			primaryColor: "#8AA29E",
			secondaryColor: "#A5C4C0",
			tertiaryColor: "#CFE1DC",
			primaryBackgroundColor: "#F6F9F8",
			secondaryBackgroundColor: "#E6ECEA",
		},

		"eris morn": {
			primaryColor: "#4E5D52",
			secondaryColor: "#d9cd45",
			tertiaryColor: "#A9B9A3",
			primaryBackgroundColor: "#CFDDD2",
			secondaryBackgroundColor: "#DCE4E2",
		},

		pink: {
			primaryColor: "#FF7597", // Bubblegum punch – playful but bold
			secondaryColor: "#7161EF", // Electric periwinkle – ADHD sparkle magic
			tertiaryColor: "#FFD29D", // Warm peach glow – inner child healing energy
			primaryBackgroundColor: "#FDF0F3", // Light rose milk – cozy, soft, dreamy
			secondaryBackgroundColor: "#DDE4F4", // Soft periwinkle sky – a little melancholy, a lot thoughtful
		},

		peachy: {
			primaryColor: "#FF6B6B", // Fiery coral
			secondaryColor: "#FFD93D", // Citrus yellow
			tertiaryColor: "#FFB5A7", // Light watermelon
			primaryBackgroundColor: "#FFF1E6", // Creamy dusk
			secondaryBackgroundColor: "#FDEBD0", // Soft orange sherbet
		},

		mustard: {
			primaryColor: "#D97700", // Spicy Mustard
			secondaryColor: "#FFB84C", // Honey Apricot
			tertiaryColor: "#FCE09B", // Light Toasted Cream
			primaryBackgroundColor: "#FFF8E1", // Ivory Flat
			secondaryBackgroundColor: "#F5E7C4", // Baked Beige
		},

		clouds: {
			// name: "Cloud Whisper",
			primaryColor: "#E0E0E0", // Soft Ash
			secondaryColor: "#D6D6D6", // Misty Pearl
			tertiaryColor: "#CCCCCC", // Pale Grey Fade
			primaryBackgroundColor: "#FAFAFA", // Bare Whisper White
			secondaryBackgroundColor: "#F2F2F2", // Fog-Touched Silver
		},
	},

	// -----------------

	// RETRO THICK
	primaryFont: '"Notable", sans-serif',
	primaryFontSize: "5rem",
	primaryFontWeight: 400,

	// PIXELATED NES STYLE
	// primaryFont: '"Tiny5", sans-serif',
	// primaryFontSize: "5rem",
	// primaryFontWeight: "normal",

	// PIXELATED NES STYLE 2
	// primaryFont: '"Silkscreen", sans-serif',
	// primaryFontSize: "5rem",
	// primaryFontWeight: "normal",

	// PIXELATED NES STYLE 3
	// primaryFont: '"Press Start 2P", system-ui',
	// primaryFontSize: "5rem",
	// primaryFontWeight: 400,

	// THIN
	// primaryFont: '"Plus Jakarta Sans", sans-serif',
	// primaryFontSize: "5rem",
	// primaryFontWeight: 400,

	// RENAISSANCE
	// primaryFont: '"UnifrakturMaguntia", cursive',
	// primaryFontSize: "5rem",
	// primaryFontWeight: 400,

	// -----------------

	transitionTime: "0.2s",
	standardBorderRadius: "10px",
	standardPadding: "0.75em",
	standardIconSize: "25px",
	standardIconStrokeWidth: "2px",

	lambdaRed: "#e83944",
	errorRed: "rgb(224, 102, 102)",
	transparent: "rgba(255, 0, 0, 0)",

	textAreaMinHeight: "50px",
	textAreaMinWidth: "250px",
};

function applyTheme(themeKey) {
	const theme = config.colorThemes[themeKey];
	if (!theme) return console.warn(`Theme '${themeKey}' not found.`);

	document.documentElement.style.setProperty("--primary-color", theme.primaryColor);
	document.documentElement.style.setProperty("--secondary-color", theme.secondaryColor);
	document.documentElement.style.setProperty("--tertiary-color", theme.tertiaryColor);
	document.documentElement.style.setProperty("--primary-background-color", theme.primaryBackgroundColor);
	document.documentElement.style.setProperty("--secondary-background-color", theme.secondaryBackgroundColor);
}

// applyTheme( "minty" );
// applyTheme( "cool blue" );
applyTheme("cool grey");
// applyTheme( "eris morn" );
// applyTheme( "pink" );
// applyTheme( "peachy" );
// applyTheme( "mustard" );
// applyTheme( "clouds" );

// document.documentElement.style.setProperty("--primary-color", config.primaryColor);
// document.documentElement.style.setProperty("--secondary-color", config.secondaryColor);
// document.documentElement.style.setProperty("--tertiary-color", config.tertiaryColor);
// document.documentElement.style.setProperty("--primary-background-color", config.primaryBackgroundColor);
// document.documentElement.style.setProperty("--secondary-background-color", config.secondaryBackgroundColor);

document.documentElement.style.setProperty("--primary-font", config.primaryFont);
document.documentElement.style.setProperty("--primary-font-size", config.primaryFontSize);
document.documentElement.style.setProperty("--primary-font-weight", config.primaryFontWeight);

document.documentElement.style.setProperty("--transition-time", config.transitionTime);
document.documentElement.style.setProperty("--standard-border-radius", config.standardBorderRadius);
document.documentElement.style.setProperty("--standard-padding", config.standardPadding);
document.documentElement.style.setProperty("--standard-icon-size", config.standardIconSize);
document.documentElement.style.setProperty("--standard-icon-stroke-width", config.standardIconStrokeWidth);

document.documentElement.style.setProperty("--lambda-red", config.lambdaRed);
document.documentElement.style.setProperty("--error-red", config.errorRed);
document.documentElement.style.setProperty("--transparent", config.transparent);

document.documentElement.style.setProperty("--textarea-min-height", config.textAreaMinHeight);
document.documentElement.style.setProperty("--textarea-min-width", config.textAreaMinWidth);

export default config;
