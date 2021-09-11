import React from 'react'
import moment from 'moment'
import { useParams, useHistory } from 'react-router-dom'
import { useQuery, useSubscription } from '@apollo/react-hooks'
import { Paper, Grid, Typography, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { CalendarOutlined } from '@ant-design/icons'

import CommentInput from './Comment/CommentInput'
import CommentBox from './Comment/CommentBox'
import ArticleTag from 'Components/ArticleTag'
import { validateError } from 'Utils/ValidateError'
import Loader from 'Components/Loader'
import { SUSCRIPTION_COMMENT } from 'Graphql/Mutations/Comments'
import { ARTICLE_QUERY } from 'Graphql/Querys/Articles'
import { translateMarkdown } from 'Utils'
import { SIDEBAR } from 'Config'
import Page404 from 'Pages/Page404'
import Page from 'Components/Base/Page'

// https://source.unsplash.com/random
const useStyles = makeStyles((theme) => ({
  container: {
    padding: 20,
    borderBottom: `1px solid ${theme.palette.divider}`,
    paddingBottom: '1em',
    //  background: '#263238'
    // boxShadow: '0 2px 8px #f0f1f2'
  },
  body: {
    paddingTop: '1.5em',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    //paddingTop:'56.25%'
  },
  ctn: {
    height: 250,
  },
  paper: {
    maxHeight: 250,
    borderRadius: 8,
    boxSizing: 'border-box',
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    boxShadow: '0 2px 8px #f0f1f2',
  },
  comments: {
    paddingLeft: '3.5em',
    paddingRight: '3.5em',
    boxSizing: 'border-box',
  },
}))
const SingleArticle = () => {
  const history = useHistory()
  const classes = useStyles()
  const { id } = useParams()

  const { data: { newComment } = [] } = useSubscription(SUSCRIPTION_COMMENT)

  const { data, loading, error } = useQuery(ARTICLE_QUERY, {
    variables: { id },
  })
  if (process.env.NODE_ENV !== 'production') {
    validateError(error)
  }
  if (error) {
    history('/404')
    return <Page404 />
  }

  if (loading) {
    return <Loader />
  }

  let { Article } = data

  Article.content = translateMarkdown(Article.content)

  return (
    <Page title={Article.title}>
      <Container>
        <Grid container className={classes.container}>
          <Grid item sm={6} className={classes.body}>
            <Typography
              component="h1"
              variant="h5"
              color="textPrimary"
              gutterBottom
            >
              {Article.title}
            </Typography>
            <Typography variant="h6">{Article.description}</Typography>
            <div>
              <span>
                <CalendarOutlined style={{ marginRight: 5 }} />
                {moment(Article.createdAt).fromNow()}
              </span>
              <ArticleTag
                tagList={Article.tags}
                categoryList={Article.categories}
              />
            </div>
            <div>
              <span>&nbsp; Posted by &nbsp;</span>
              {Article.user.username}
            </div>
          </Grid>
          <Grid item sm={6}>
            <Paper className={classes.paper}>
              <div className={classes.ctn}>
                <img
                  src={SIDEBAR.avatar}
                  alt={Article.title}
                  className={classes.image}
                  // title={Article.title}
                />
              </div>
            </Paper>
          </Grid>
        </Grid>
        <Grid>
          <div
            className="article-detail"
            dangerouslySetInnerHTML={{ __html: Article.content }}
          />
        </Grid>
        <Grid className={classes.comments}>
          {Article.comments.map((comment, i) => (
            <div key={i}>
              <CommentBox comment={comment} />
            </div>
          ))}

          {/* <div>{newComment && <CommentBox comment={newComment} />}</div> */}
        </Grid>
        <Grid className={classes.comments}>
          <CommentInput />
        </Grid>
      </Container>
    </Page>
  )
}

export default SingleArticle
