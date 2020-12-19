import React from 'react'

import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
import { translateMarkdown } from '../Utils'

function EditorMD(props) {
  return (
    <SimpleMDE
      value={props.value}
      onChange={props.onChange}
      options={{
        autofocus: true,
        autosave: {
          enabled: true,
        },
        previewRender: translateMarkdown,
      }}
    />
  )
}

export default EditorMD
