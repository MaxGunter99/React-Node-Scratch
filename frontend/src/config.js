
const config = {
  APP_NAME: "My App!",

  primaryColor: "#A0E7E5",
  secondaryColor: "#FFB3C6",
  tertiaryColor: "#FFDAC1",

  primaryFont: '"Notable", sans-serif',
  primaryFontSize: "6rem",
  primaryFontWeight: 400
};

document.documentElement.style.setProperty('--primary-color', config.primaryColor);
document.documentElement.style.setProperty('--secondary-color', config.secondaryColor);
document.documentElement.style.setProperty('--tertiary-color', config.tertiaryColor);

document.documentElement.style.setProperty('--primary-font', config.primaryFont);
document.documentElement.style.setProperty('--primary-font-size', config.primaryFontSize);
document.documentElement.style.setProperty('--primary-font-weight', config.primaryFontWeight);

export default config;
