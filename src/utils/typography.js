import Typography from "typography"


const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.4,
  headerFontFamily: ['Work Sans', 'sans-serif'],
  bodyFontFamily: ['Work Sans', 'sans-serif'],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
