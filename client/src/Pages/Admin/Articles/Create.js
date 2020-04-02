import React, { useState } from 'react'
import { Typography, Grid } from '@material-ui/core'
import { Input, Button } from 'antd'
import { PlusOutlined, SyncOutlined } from '@ant-design/icons'
import { makeStyles } from '@material-ui/core/styles'

import EditorMD from '../../../Components/EditorMD'
import TagGroup from '../../../Components/Filters/TagGroup'
import CategoryGroup from '../../../Components/Filters/CategoryGroup'
import { USERS_QUERY } from '../../../Graphql/Querys/User'
import { CREATE_ARTICLE } from '../../../Graphql/Mutations/Articles'

import { useQuery, useMutation } from '@apollo/react-hooks'
import { useSelector, connect } from 'react-redux'
import { useParams } from 'react-router-dom'

const useStyles = makeStyles({
  list: {
    display: 'flex',
    lineHeight: '36px'
  },
  label: {
    width: '50px',
    fontWeight: 'bold'
  },
  button: {
    position: 'fixed',
    bottom: '100px',
    right: '300px',
    zIndex: 2
  }
})

const CreateArticle = props => {
  const classes = useStyles()
  const userId = useSelector(state => state.user.user.id)
  const params = useParams()
  const editId = params.id

  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const [tags, setTags] = useState([])
  const [category, setCategory] = useState([])
  // const { loading, error, data } = useQuery(USERS_QUERY)
  const [create, { loading, error }] = useMutation(CREATE_ARTICLE, {
    variables: {
      title,
      content,
      category,
      tags,
      userId
    },
    onCompleted: ({ createArticle }) => {
      console.log(createArticle)
    },
    onError() {}
  })
  if (loading) return <p>loading...</p>
  console.log(title)
  console.log(content)
  console.log(category)
  console.log(tags)
  return (
    <>
      <Grid container item spacing={1}>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            style={{ textAlign: 'center', marginBottom: '10px' }}
          >
            CREATE ARTICLE
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.list}>
            <span className={classes.label}>Title:</span>
            <Input
              style={{ flex: 1 }}
              name="title"
              type="text"
              onChange={({ target }) => setTitle(target.value)}
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <CategoryGroup
            selectedTags={category}
            setSelectedTags={setCategory}
          />
        </Grid>
        <Grid item xs={12}>
          <TagGroup tags={tags} setTags={setTags} />
        </Grid>
        <Grid item xs={12}>
          <EditorMD value={content} onChange={setContent} />
          <Button
            type="primary"
            shape="circle"
            size="large"
            disabled={!title}
            className={classes.button}
            title={editId ? '更新' : '新增'}
            icon={editId ? <SyncOutlined /> : <PlusOutlined />}
            onClick={() => {}}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default CreateArticle
