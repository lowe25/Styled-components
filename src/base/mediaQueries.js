const size = {
  mobileSm: "480px",
  mobileM: "481px",
  mobileL: "767px",
  tabletSm: "768px",
  tabletL:"1024px"
};

export const deviceSize = {
  mobileScreenSmall: `(max-width: ${size.mobileSm})`,
  mobileScreenMedium: `(min-width: ${size.mobileM}) and (max-width: ${size.mobileL})`,
  mobileScreenLarge: `(max-width: ${size.mobileL})`,
  tabletScreenSmall: `(min-width: ${size.tabletSm}) and (max-width: ${size.tabletL})`
};
