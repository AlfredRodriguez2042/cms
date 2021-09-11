import React, { useMemo } from 'react'

import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
import { translateMarkdown } from '../Utils'

function EditorMD({ value, onChange }) {
  const options = useMemo(() => {
    return {
      autofocus: true,
      spellChecker: false,
      previewRender: translateMarkdown,
    }
  }, [])
  return <SimpleMDE value={value} onChange={onChange} options={options} />
}

export default EditorMD
