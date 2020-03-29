import React from 'react'
import { Tag } from 'antd'
const CheckableTag = Tag.CheckableTag

const tagsFromServer = ['Programing', 'System', 'Linux', 'Windows', 'Node']

const CategoryGroup = props => {
  const { selectedTags, setSelectedTags } = props

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter(t => t !== tag)
    console.log('You are interested in: ', nextSelectedTags)
    setSelectedTags(nextSelectedTags)
  }

  return (
    <div>
      <strong style={{ marginRight: 8 }}>Categories:</strong>
      {tagsFromServer.map(tag => (
        <CheckableTag
          key={tag}
          checked={selectedTags.indexOf(tag) > -1}
          onChange={checked => handleChange(tag, checked)}
        >
          {tag}
        </CheckableTag>
      ))}
    </div>
  )
}
export default CategoryGroup
