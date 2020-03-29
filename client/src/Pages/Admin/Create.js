import React, { useState } from 'react'

import EditorMD from '../../Components/EditorMD'
import TagGroup from '../../Components/Filters/TagGroup'
import CategoryGroup from '../../Components/Filters/CategoryGroup'
import { Typography } from '@material-ui/core'
import { Input } from 'antd'
import { useQuery } from '@apollo/react-hooks'
import { USERS_QUERY } from '../../Graphql/Querys/User'
import { validateError } from '../../Utils/ValidateError'

const CreateArticle = () => {
  const [content, setContent] = useState('')
  const [tags, setTags] = useState([])
  const [category, setCategory] = useState([])
  const { loading, error, data } = useQuery(USERS_QUERY)
  validateError(error)
  if (loading) return <p>loading...</p>
  console.log(data)

  return (
    <>
      <Typography
        variant="h4"
        style={{ textAlign: 'center', marginBottom: '10px' }}
      >
        CREATE ARTICLE
      </Typography>
      <div style={{ display: 'flex' }}>
        <strong style={{ marginRight: 8 }}>Title:</strong>
        <Input style={{ flex: 1 }} />
      </div>
      <CategoryGroup selectedTags={category} setSelectedTags={setCategory} />
      <TagGroup tags={tags} setTags={setTags} />
      <EditorMD value={content} onChange={setContent} />
    </>
  )
}

export default CreateArticle
