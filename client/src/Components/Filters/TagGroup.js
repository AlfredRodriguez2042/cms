import React, { useState } from 'react'
import { Tag, Input, Tooltip, Button } from 'antd'

const TagGroup = props => {
  const { tags, setTags } = props
  const [inputVisible, SetInputVisible] = useState(false)
  const [inputValue, SetInputValue] = useState('')

  let inputId = null

  const handleClose = removedTag => {
    const tag = tags
      .map(value => {
        return value.name
      })
      .find(tag => tag !== removedTag)

    if (tag) {
      setTags(tag)
    }
  }

  const showInput = () => {
    SetInputVisible(true)

    inputId && inputId.focus()
  }

  const handleInputChange = e => {
    SetInputValue(e.target.value)
  }

  const handleInputConfirm = () => {
    const TAG = tags.map(value => {
      return value.name
    })
    if (inputValue && TAG.indexOf(inputValue) === -1) {
      setTags([...tags, { name: inputValue }])
    }

    SetInputVisible(false)
    SetInputValue('')
  }

  return (
    <div>
      <strong style={{ marginRight: 8 }}>Tags:</strong>

      {tags.map((tag, index) => {
        const isLongTag = tag.length > 20
        const tagElem = (
          <Tag
            key={tag.name}
            closable={index !== -1}
            onClose={() => handleClose(tag.name)}
          >
            {isLongTag ? `${tag.name.slice(0, 20)}...` : tag.name}
          </Tag>
        )
        return isLongTag ? (
          <Tooltip title={tag.name} key={tag.name}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        )
      })}
      {inputVisible && (
        <Input
          ref={el => {
            inputId = el
          }}
          type="text"
          size="small"
          name="name"
          style={{ width: 78 }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!inputVisible && (
        <Button size="small" type="dashed" onClick={showInput}>
          + New Tag
        </Button>
      )}
    </div>
  )
}

export default TagGroup
