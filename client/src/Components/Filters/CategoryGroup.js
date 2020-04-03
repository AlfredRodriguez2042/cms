import React from 'react'
import { Tag } from 'antd'
const CheckableTag = Tag.CheckableTag

const tagsFromServer = [
  { name: 'Programing' },
  { name: 'System' },
  { name: 'Linux' },
  { name: 'Windows' },
  { name: 'Node' }
]

const CategoryGroup = props => {
  const { selectedTags, setSelectedTags } = props

  const handleChange = (tag, checked) => {
    console.log(
      'ver',
      selectedTags //.map(value => value.name).filter(t => {name:t})
    )
    const newtag = selectedTags.map(value => value.name).filter(t => t !== tag)
    const nextSelectedTags = checked
      ? [...selectedTags, { name: tag }]
      : { name: newtag }
    console.log('You are interested in: ', nextSelectedTags)
    setSelectedTags(nextSelectedTags)
  }
  const handleChecked = name => {
    const check = selectedTags.map(value => value.name).indexOf(name) > -1
    console.log('chek', check)
    return check
  }

  return (
    <div>
      <strong style={{ marginRight: 8 }}>Cate:</strong>
      {tagsFromServer.map(tag => (
        <CheckableTag
          key={tag.name}
          checked={handleChecked(tag.name)}
          onChange={checked => handleChange(tag.name, checked)}
        >
          {tag.name}
        </CheckableTag>
      ))}
    </div>
  )
}
export default CategoryGroup
