import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.6,
  scaleRatio: 1.85,
  headerFontFamily: ['YakuhanJPs', 'Kinto Sans', '游ゴシック', 'Yu Gothic', 'Hiragino Kaku Gothic Pro', 'system-ui', 'sans-serif'],
  bodyFontFamily: ['YakuhanJPs', 'Kinto Sans', '游ゴシック', 'Yu Gothic', 'Hiragino Kaku Gothic Pro', 'system-ui', 'sans-serif'],
  headerWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    h1: {
      lineHeight: 1.5,
    },
    h2: {
      marginTop: rhythm(1.75),
    },
    h3: {
      marginTop: rhythm(1.5),
      marginBottom: rhythm(1),
    },
    p: {
      lineHeight: 1.85,
    }
  })
})

export const { scale, thythm, options } = typography
export default typography
