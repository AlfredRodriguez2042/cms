import React, { useState } from 'react'
import { Typography, Grid, Container } from '@material-ui/core'
import { Input, Button } from 'antd'
import { PlusOutlined, SyncOutlined } from '@ant-design/icons'
import { makeStyles } from '@material-ui/core/styles'

import EditorMD from 'Components/EditorMD'
import TagGroup from 'Components/Filters/TagGroup'
import CategoryGroup from 'Components/Filters/CategoryGroup'
import { CREATE_ARTICLE } from 'Graphql/Mutations/Articles'

import { useMutation } from '@apollo/react-hooks'
import { useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { validateError } from 'Utils/ValidateError'
import { ARTICLES_QUERY } from 'Graphql/Querys/Articles'
import Page from 'Components/Base/Page'

const useStyles = makeStyles({
  list: {
    display: 'flex',
    lineHeight: '36px',
  },
  label: {
    width: '50px',
    fontWeight: 'bold',
  },
  button: {
    position: 'fixed',
    bottom: '100px',
    right: '300px',
    zIndex: 2,
  },
})

const CreateArticle = () => {
  const classes = useStyles()
  const userId = useSelector((state) => state.user.user.id)
  const params = useParams()
  const history = useHistory()
  const editId = params.id
  const [content, setContent] = useState('')
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')
  const [tags, setTags] = useState([])
  const [category, setCategory] = useState([])
  const [create, { loading, error }] = useMutation(CREATE_ARTICLE, {
    variables: {
      title,
      description,
      content,
      category,
      tags,
      userId,
    },
    update: (proxy, { data }) => {
      try {
        const { Articles } = proxy.readQuery({
          query: ARTICLES_QUERY,
        })
        proxy.writeQuery({
          query: ARTICLES_QUERY,
          data: { Articles: [data.createArticle, ...Articles] },
        })
      } catch (error) {
        console.log(error)
      }
    },
    onCompleted: () => {
      history.push(`/articles/`)
    },
  })
  validateError(error)
  const [update] = useMutation(CREATE_ARTICLE, {
    variables: {
      title,
      content,
      category,
      tags,
      userId,
    },
    onCompleted: ({ createArticle }) => {
      console.log(createArticle)
    },
    onError() {},
  })
  if (loading) return <p>loading...</p>

  return (
    <Page title="create">
      <Typography variant="h4" align="center" style={{ marginBottom: '10px' }}>
        CREATE ARTICLE
      </Typography>
      <Container>
        <Grid container item spacing={1}>
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
            <div className={classes.list}>
              <span className={classes.label}>Desc:</span>
              <Input
                style={{ flex: 1 }}
                name="description"
                type="text"
                onChange={({ target }) => setDescription(target.value)}
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
              title={editId ? 'Edit' : 'Create'}
              icon={editId ? <SyncOutlined /> : <PlusOutlined />}
              onClick={() => {
                editId ? update() : create()
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  )
}

export default CreateArticle
