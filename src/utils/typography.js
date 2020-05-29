import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.6,
  scaleRatio: 1.85,
  headerFontFamily: ['YakuhanJPs', 'Kinto Sans', '游ゴシック', 'Yu Gothic', 'Hiragino Kaku Gothic Pro', 'system-ui', 'sans-serif'],
  bodyFontFamily: ['YakuhanJPs', 'Kinto Sans', '游ゴシック', 'Yu Gothic', 'Hiragino Kaku Gothic Pro', 'system-ui', 'sans-serif'],
  headerWeight: 700,
})

export const { scale, thythm, options } = typography
export default typography
