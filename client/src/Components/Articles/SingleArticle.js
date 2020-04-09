import React from 'react'
import {} from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import moment from 'moment'
import { ARTICLE_QUERY } from '../../Graphql/Querys/Articles'
import Loader from '../Loader'
import { Paper, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ArticleTag from '../ArticleTag'
import { translateMarkdown } from '../../Utils'
import { SIDEBAR } from '../../Config'
import Page404 from '../../Pages/Page404'

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
}))
const SingleArticle = () => {
  const history = useHistory()
  const classes = useStyles()
  const { id } = useParams()

  const { data, loading, error } = useQuery(ARTICLE_QUERY, {
    variables: { id },
  })
  if (error) {
    history.push('/404')
    return <Page404 />
  }

  if (loading) {
    return <Loader />
  }

  let { Article } = data

  Article.content = translateMarkdown(Article.content)

  return (
    <>
      <Grid container className={classes.container}>
        <Grid item sm={6} className={classes.body}>
          <Typography
            component="h2"
            variant="h5"
            color="textPrimary"
            //align="center"
            gutterBottom
          >
            {Article.title}
          </Typography>
          <Typography variant="h6">
            aprennde a usar este articluo para tu mejor desepmeño
          </Typography>
          <div>
            <span>{moment(Article.createdAt).fromNow()}</span>
            <ArticleTag tagList={Article.tags} categoryList={Article.tags} />
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
    </>
  )
}

export default SingleArticle
