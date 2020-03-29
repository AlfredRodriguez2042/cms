import React, { useState } from 'react'
import { Tag, Input, Tooltip, Button } from 'antd'

const TagGroup = props => {
  const { tags, setTags } = props
  const [inputVisible, SetInputVisible] = useState(false)
  const [inputValue, SetInputValue] = useState('')
  let inputId = null
  const handleClose = removedTag => {
    const tag = tags.filter(tag => tag !== removedTag)
    console.log(tag)
    setTags(tag)
  }

  const showInput = () => {
    SetInputVisible(true)

    inputId && inputId.focus()
  }

  const handleInputChange = e => {
    SetInputValue(e.target.value)

    console.log(inputValue)
  }

  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue])
    }

    console.log(tags)
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
            key={tag}
            closable={index !== -1}
            onClose={() => handleClose(tag)}
          >
            {isLongTag ? `${tag.slice(0, 20)}...` : tag}
          </Tag>
        )
        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
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
