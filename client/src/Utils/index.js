import marked from 'marked'
import xss from 'xss'
import highlight from 'highlight.js'
import { COLOR_LIST } from '../Config'

export const translateMarkdown = (plainText, isGuardXss = false) => {
  return marked(isGuardXss ? xss(plainText) : plainText, {
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: true,
    smartLists: true,
    smartypants: true,
    highlight: function (code, lang) {
      const hljs = highlight
      const language = hljs.getLanguage(lang) ? lang : 'plaintext'
      /*eslint no-undef: "off"*/
      return hljs.highlight(code, { language }).value
    },
  })
}
//npm install highlight.js --save
export const randomIndex = (arr) => Math.floor(Math.random() * arr.length)
export function generateColor(list = [], colorList = COLOR_LIST) {
  const _list = [...list]
  _list.forEach((l, i) => {
    l.color = colorList[i] || colorList[randomIndex(colorList)]
  })
  return _list
}
