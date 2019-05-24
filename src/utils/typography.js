
import Typography from 'typography'
import noriegaTheme from 'typography-theme-noriega'
import gray from 'gray-percentage';

noriegaTheme.overrideStyles = ({ adjustFontSizeTo, rhythm }, options, styles) => ({
  blockquote: {
    ...adjustFontSizeTo('19px'),
    color: gray(41),
    fontStyle: 'italic',
    paddingLeft: rhythm(13/16),
    marginLeft: rhythm(-1),
    borderLeft: `${rhythm(3/16)} solid ${gray(10)}`,
  },
  'blockquote > :last-child': {
    marginBottom: 0,
  },
})


const typography = new Typography(noriegaTheme)


// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale

